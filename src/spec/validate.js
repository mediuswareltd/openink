import { getBlock, blockNames } from "../render/blocks/index.js";
import { COMMON, TONES } from "../render/blocks/shared.js";
import { ICON_NAMES } from "../icons.js";
import { THEME_PRESETS, COLOR_KEYS } from "../themes.js";

const ID = /^[A-Za-z][\w-]*$/;
const WIDTHS = ["narrow", "medium", "wide"];
const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);

/** Levenshtein distance, for "did you mean" hints. */
function distance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
const suggest = (word, options) => {
  const best = options.map((o) => [o, distance(word, o)]).sort((x, y) => x[1] - y[1])[0];
  return best && best[1] <= Math.max(2, Math.floor(word.length / 3)) ? ` Did you mean "${best[0]}"?` : "";
};

/**
 * Check a parsed spec. Never throws.
 * @returns {{ errors: {path:string,message:string}[], warnings: {path:string,message:string}[] }}
 */
export function validate(spec) {
  const errors = [];
  const warnings = [];
  const err = (path, message) => errors.push({ path, message });
  const warn = (path, message) => warnings.push({ path, message });

  if (!isObj(spec)) return { errors: [{ path: "", message: "Spec must be a YAML/JSON object." }], warnings };

  if (typeof spec.name !== "string" || !spec.name.trim()) err("name", "`name` is required (a non-empty string).");
  const languages = spec.languages ?? [];
  if (!Array.isArray(languages) || languages.some((l) => typeof l !== "string" || !/^[a-z]{2,3}$/i.test(l))) {
    err("languages", "`languages` must be a list of 2-3 letter codes, e.g. [en, de].");
  }
  const langs = Array.isArray(languages) ? languages.filter((l) => typeof l === "string") : [];

  const topKnown = ["name", "languages", "footer", "theme", "colors", "nav", "modals", "screens"];
  // `x-*` keys are free-form: a place to define YAML anchors (&name) that screens reuse (*name)
  for (const k of Object.keys(spec)) if (!topKnown.includes(k) && !k.startsWith("x-")) warn(k, `Unknown top-level field "${k}".${suggest(k, topKnown)}`);

  // ---- theme + colors
  if (spec.theme !== undefined) {
    if (typeof spec.theme !== "string") err("theme", "`theme` must be a preset name or the path of a .css file.");
    else if (!THEME_PRESETS.includes(spec.theme) && !spec.theme.endsWith(".css")) {
      err("theme", `Unknown theme "${spec.theme}". Use a preset (${THEME_PRESETS.join(", ")}) or a path ending in .css.${suggest(spec.theme, THEME_PRESETS)}`);
    }
  }
  if (spec.colors !== undefined) {
    if (!isObj(spec.colors)) err("colors", "`colors` must be an object such as { accent: \"#e11d48\" }.");
    else for (const [k, v] of Object.entries(spec.colors)) {
      if (!COLOR_KEYS.includes(k)) err(`colors.${k}`, `Unknown colour "${k}". Available: ${COLOR_KEYS.join(", ")}.${suggest(k, COLOR_KEYS)}`);
      else if (typeof v !== "string" || /[;{}<>]/.test(v)) err(`colors.${k}`, `\`${k}\` must be a CSS colour such as "#e11d48" or "tomato".`);
    }
  }

  // ---- screens
  const screens = Array.isArray(spec.screens) ? spec.screens : [];
  if (!screens.length) {
    err("screens", "`screens` must be a non-empty list.");
    return { errors, warnings };
  }
  const ids = new Set();
  screens.forEach((s, i) => {
    const p = `screens[${i}]`;
    if (!isObj(s)) return err(p, "A screen must be an object with `id` and `blocks`.");
    if (typeof s.id !== "string" || !ID.test(s.id)) err(`${p}.id`, `Screen \`id\` must start with a letter and use letters, digits, "_" or "-" (got ${JSON.stringify(s.id)}).`);
    else if (ids.has(s.id)) err(`${p}.id`, `Duplicate screen id "${s.id}".`);
    else ids.add(s.id);
    const screenKeys = ["id", "title", "nav", "note", "width", "tone", "blocks"];
    for (const k of Object.keys(s)) if (!screenKeys.includes(k)) warn(`${p}.${k}`, `Unknown screen field "${k}".${suggest(k, screenKeys)}`);
    if (!Array.isArray(s.blocks)) err(`${p}.blocks`, "`blocks` must be a list.");
    if (s.tone !== undefined && !TONES.includes(s.tone)) err(`${p}.tone`, `\`tone\` must be one of: ${TONES.join(", ")} (got ${JSON.stringify(s.tone)}).`);
    if (s.width !== undefined && !WIDTHS.includes(s.width)) err(`${p}.width`, `\`width\` must be one of: ${WIDTHS.join(", ")} (got ${JSON.stringify(s.width)}).`);
    if (s.title !== undefined) checkText(s.title, `${p}.title`);
    if (s.note !== undefined) checkText(s.note, `${p}.note`);
  });

  // ---- text values
  function checkText(v, path) {
    if (typeof v === "string" || typeof v === "number") return true;
    if (isObj(v)) {
      if (!langs.length) warn(path, "Translation object used but the spec has no `languages`; only the first value is shown.");
      else {
        for (const k of Object.keys(v)) if (!langs.includes(k)) warn(path, `Language "${k}" is not listed in \`languages\`.`);
        const missing = langs.filter((l) => v[l] == null);
        if (missing.length) warn(path, `Missing translation: ${missing.join(", ")} (falls back to ${langs[0]}).`);
      }
      return Object.values(v).every((x) => typeof x === "string" || typeof x === "number") || (err(path, "Translation values must be strings."), false);
    }
    err(path, `Expected text (string, number or { lang: text }), got ${Array.isArray(v) ? "a list" : typeof v}.`);
    return false;
  }

  const links = []; // [path, screenId]
  const modalRefs = []; // [path, modalId] from `open:`
  const modalIds = new Set();
  const checkProp = (name, def, v, path) => {
    switch (def.type) {
      case "text": checkText(v, path); break;
      case "string":
        if (typeof v !== "string") err(path, `\`${name}\` must be a string.`);
        else if (def.enum && !def.enum.includes(v)) {
          err(path, def.enum.length > 12 ? `Unknown ${name} "${v}".${suggest(v, def.enum)} See docs/blocks.md for the list.` : `\`${name}\` must be one of: ${def.enum.join(", ")} (got "${v}").`);
        }
        break;
      case "number": if (typeof v !== "number") err(path, `\`${name}\` must be a number.`); break;
      case "boolean": if (typeof v !== "boolean") err(path, `\`${name}\` must be true or false.`); break;
      case "text[]":
        if (!Array.isArray(v)) err(path, `\`${name}\` must be a list.`);
        else v.forEach((x, i) => checkText(x, `${path}[${i}]`));
        break;
      case "number[]":
        if (!Array.isArray(v) || v.some((x) => typeof x !== "number")) err(path, `\`${name}\` must be a list of numbers.`);
        break;
      case "sections":
        if (!Array.isArray(v)) err(path, `\`${name}\` must be a list of { label, children }.`);
        else v.forEach((t, i) => {
          if (!isObj(t) || t.label == null) err(`${path}[${i}]`, "Each entry needs a `label`.");
          else { checkText(t.label, `${path}[${i}].label`); if (t.children !== undefined && !Array.isArray(t.children)) err(`${path}[${i}].children`, "`children` must be a list."); }
        });
        break;
      case "links":
        if (!Array.isArray(v)) err(path, `\`${name}\` must be a list of { icon, label, go }.`);
        else v.forEach((n, i) => {
          if (!isObj(n) || (n.label == null && n.icon == null)) return err(`${path}[${i}]`, "Each item needs an `icon` or a `label`.");
          if (n.label != null) checkText(n.label, `${path}[${i}].label`);
          if (n.icon != null && !ICON_NAMES.includes(n.icon)) err(`${path}[${i}].icon`, `Unknown icon "${n.icon}".${suggest(String(n.icon), ICON_NAMES)}`);
          if (n.go) links.push([`${path}[${i}].go`, n.go]);
          if (n.open) modalRefs.push([`${path}[${i}].open`, n.open]);
        });
        break;
      case "rows":
        if (!Array.isArray(v)) err(path, "`rows` must be a list.");
        else v.forEach((r, i) => {
          if (!Array.isArray(r) && !(isObj(r) && Array.isArray(r.cells))) err(`${path}[${i}]`, "A row must be a list of cells, or { cells: [...], go: screenId }.");
        });
        break;
    }
  };

  function visit(b, path) {
    if (typeof b === "string") return;
    if (!isObj(b)) return err(path, "A block must be an object with a `type` (or a plain string).");
    if (typeof b.type !== "string") return err(path, `Block is missing \`type\`. Known types: ${blockNames().join(", ")}.`);
    const def = getBlock(b.type);
    if (!def) return err(`${path}.type`, `Unknown block type "${b.type}".${suggest(b.type, blockNames())}`);

    const known = new Set(["type", ...Object.keys(def.props), ...Object.keys(COMMON), ...(def.children ? ["children"] : [])]);
    for (const k of Object.keys(b)) {
      if (known.has(k)) continue;
      // "Search a, b" as a key means an unquoted comma inside { } ended the previous value early
      if (/[^\w-]/.test(k)) warn(`${path}.${k}`, `Unexpected "${k}". A comma inside { ... } ends the value, so wrap text that contains commas in quotes.`);
      else warn(`${path}.${k}`, `"${b.type}" has no property "${k}".${suggest(k, [...known])}`);
    }
    for (const [name, pd] of Object.entries({ ...def.props, ...COMMON })) {
      if (b[name] === undefined) { if (pd.required) err(`${path}.${name}`, `"${b.type}" requires \`${name}\`.`); continue; }
      checkProp(name, pd, b[name], `${path}.${name}`);
    }
    if (b.go !== undefined && typeof b.go === "string") links.push([`${path}.go`, b.go]);
    if (typeof b.open === "string") modalRefs.push([`${path}.open`, b.open]);
    if (b.type === "modal" && typeof b.id === "string") {
      if (modalIds.has(b.id)) err(`${path}.id`, `Duplicate modal id "${b.id}".`);
      modalIds.add(b.id);
    }
    for (const t of def.targets?.(b) ?? []) links.push([path, t]);

    if (b.children !== undefined) {
      if (!def.children) err(`${path}.children`, `"${b.type}" cannot have children.`);
      else if (!Array.isArray(b.children)) err(`${path}.children`, "`children` must be a list.");
      else b.children.forEach((x, i) => visit(x, `${path}.children[${i}]`));
    }
    if (def.nested) for (const [suffix, x] of def.nested(b)) visit(x, path + suffix);
  }
  screens.forEach((s, i) => Array.isArray(s?.blocks) && s.blocks.forEach((b, j) => visit(b, `screens[${i}].blocks[${j}]`)));

  // global modals: same as a `modal` block, listed once and openable from any screen
  if (spec.modals !== undefined) {
    if (!Array.isArray(spec.modals)) err("modals", "`modals` must be a list of modal definitions ({ id, title, children }).");
    else spec.modals.forEach((m, i) => (isObj(m) ? visit({ ...m, type: "modal" }, `modals[${i}]`) : err(`modals[${i}]`, "A modal must be an object with an `id`.")));
  }

  // ---- nav
  const navSets = Array.isArray(spec.nav) ? { default: spec.nav } : isObj(spec.nav) ? spec.nav : {};
  if (spec.nav !== undefined && !Array.isArray(spec.nav) && !isObj(spec.nav)) err("nav", "`nav` must be a list, or an object of named lists.");
  for (const [key, items] of Object.entries(navSets)) {
    if (!Array.isArray(items)) { err(`nav.${key}`, "A nav set must be a list of { label, go }."); continue; }
    items.forEach((n, i) => {
      const p = Array.isArray(spec.nav) ? `nav[${i}]` : `nav.${key}[${i}]`;
      if (!isObj(n) || (n.label == null && n.icon == null)) return err(p, "A nav item needs a `label` or an `icon`.");
      if (n.label != null) checkText(n.label, `${p}.label`);
      if (n.icon != null && !ICON_NAMES.includes(n.icon)) err(`${p}.icon`, `Unknown icon "${n.icon}".${suggest(String(n.icon), ICON_NAMES)}`);
      if (n.go) links.push([`${p}.go`, n.go]);
      if (n.open) modalRefs.push([`${p}.open`, n.open]);
    });
  }
  screens.forEach((s, i) => {
    if (isObj(s) && s.nav && !navSets[s.nav]) err(`screens[${i}].nav`, `Screen uses nav set "${s.nav}" which is not defined under \`nav\`.${suggest(s.nav, Object.keys(navSets))}`);
  });

  // ---- links
  for (const [path, target] of links) {
    if (!ids.has(target)) err(path, `Links to unknown screen "${target}".${suggest(target, [...ids])}`);
  }

  for (const [path, id] of modalRefs) {
    if (!modalIds.has(id)) err(path, `Opens unknown modal "${id}".${suggest(String(id), [...modalIds])} Define it with { type: modal, id: ${id} }.`);
  }

  // ---- reachability (warning only)
  const linked = new Set([screens[0].id, ...links.map(([, target]) => target)]);
  for (const id of ids) if (!linked.has(id)) warn("screens", `Screen "${id}" is not linked from anywhere (no \`go: ${id}\`).`);

  return { errors, warnings };
}
