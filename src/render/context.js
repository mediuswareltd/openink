import { getBlock, blockNames } from "./blocks/index.js";

export const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Helpers handed to every block's `render(b, ctx)`.
 * @typedef {ReturnType<typeof createContext>} Context
 */
export function createContext(spec) {
  const langs = spec.languages ?? [];
  const def = langs[0];
  const isTranslation = (v) => v && typeof v === "object" && !Array.isArray(v);

  /** Plain string for a text value: first language, or the only value. */
  const plain = (v) => (isTranslation(v) ? v[def] ?? Object.values(v)[0] ?? "" : v ?? "");

  const ctx = {
    langs,
    esc,
    plain,

    /** Text node content. Translations become one <span data-l="xx"> per language. */
    tx(v) {
      if (v == null) return "";
      if (isTranslation(v) && langs.length) return langs.map((l) => `<span data-l="${l}">${esc(v[l] ?? v[def] ?? "")}</span>`).join("");
      return esc(plain(v));
    },

    /** Attribute. Translations add data-<name>-<lang> attributes that the runtime swaps in. */
    attr(name, v) {
      if (v == null) return "";
      let s = ` ${name}="${esc(plain(v))}"`;
      if (isTranslation(v) && langs.length) for (const l of langs) if (v[l] != null) s += ` data-${name}-${l}="${esc(v[l])}"`;
      return s;
    },

    /** data-go / data-toast / data-open / data-close attributes for clickable blocks. */
    act: (b) =>
      `${b.go ? ` data-go="${esc(b.go)}"` : ""}${b.toast ? ctx.attr("data-toast", b.toast) : ""}${b.open ? ` data-open="${esc(b.open)}"` : ""}${b.close ? " data-close" : ""}`,

    /** A hand-drawn icon. */
    icon: (name, size = 18, filled = false) => `<oi-icon name="${esc(name)}" size="${size}"${filled ? " filled" : ""}></oi-icon>`,

    /** Icon + label, for buttons and nav items. Either may be missing. */
    inner: (b) => `${b.icon ? ctx.icon(b.icon) : ""}${b.label != null ? `<span class="btn-label">${ctx.tx(b.label)}</span>` : ""}`,

    label: (b) => (b.label ? `<label class="fl">${ctx.tx(b.label)}</label>` : ""),

    block(b) {
      if (typeof b === "string") return getBlock("text").render({ text: b }, ctx);
      const def = getBlock(b?.type);
      if (!def) throw new Error(`Unknown block type "${b?.type}". Known types: ${blockNames().join(", ")}`);
      const html = def.render(b, ctx);
      // `tone` / `fill` work on any block: wrap it in an element that sets the colour variables
      if (!b.tone && !b.fill) return html;
      return `<div class="tone"${b.tone ? ` data-tone="${esc(b.tone)}"` : ""}${b.fill ? " data-fill" : ""}>${html}</div>`;
    },

    kids: (b) => (b.children || []).map((x) => ctx.block(x)).join(""),
  };
  return ctx;
}
