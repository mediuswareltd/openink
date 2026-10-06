import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import * as esbuild from "esbuild";
import { validate } from "./spec/validate.js";
import { renderPage } from "./render/page.js";
import { isPreset } from "./themes.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const SPEC_FILES = ["spec.yaml", "spec.yml", "spec.json"];

/** A spec that failed validation. `issues` is the list from validate(). */
export class SpecError extends Error {
  constructor(message, issues = []) {
    super(message);
    this.name = "SpecError";
    this.issues = issues;
  }
}

/** The source range of a validator path such as `screens[3].blocks[2].type`, or of its nearest existing parent. */
function rangeAt(doc, issuePath) {
  const keys = (issuePath.match(/[^.[\]]+/g) || []).map((k) => (/^\d+$/.test(k) ? Number(k) : k));
  let node = doc.contents;
  let range = node?.range;
  for (const key of keys) {
    if (YAML.isAlias(node)) node = node.resolve(doc);
    if (YAML.isMap(node)) {
      // point at the key (`type:`), which is where an editor should put the cursor
      const pair = node.items.find((p) => String(YAML.isScalar(p.key) ? p.key.value : p.key) === String(key));
      if (!pair) break;
      range = pair.key?.range ?? range;
      node = pair.value;
    } else if (YAML.isSeq(node) && typeof key === "number" && node.items[key]) {
      node = node.items[key];
      range = node.range ?? range;
    } else break;
  }
  return range;
}

/**
 * Find and parse the spec in a project directory.
 * `locate(issue)` returns the issue with `loc` set to `file:line:col` (relative to the working directory).
 */
export function loadSpec(dir = ".") {
  const file = SPEC_FILES.map((f) => path.join(dir, f)).find(fs.existsSync);
  if (!file) throw new SpecError(`No spec.yaml found in ${path.resolve(dir)}. Run \`openink init\` to create one.`);
  const lineCounter = new YAML.LineCounter();
  const doc = YAML.parseDocument(fs.readFileSync(file, "utf8"), { lineCounter });
  if (doc.errors.length) throw new SpecError(`${path.basename(file)} is not valid YAML: ${doc.errors[0].message}`);
  const spec = doc.toJS();
  const name = path.relative(process.cwd(), file) || path.basename(file);
  const locate = (issue) => {
    const range = rangeAt(doc, issue.path || "");
    if (!range) return issue;
    const { line, col } = lineCounter.linePos(range[0]);
    return { ...issue, loc: `${name}:${line}:${col}` };
  };
  return { spec, file, locate };
}

let runtimeCache;
/** Bundle the browser runtime (wired-elements + roughjs inlined, so output works offline and from file://). */
async function bundleRuntime() {
  runtimeCache ??= esbuild
    .build({ entryPoints: [path.join(here, "runtime/index.js")], bundle: true, minify: true, format: "iife", write: false, logLevel: "silent" })
    .then((r) => r.outputFiles[0].text);
  return runtimeCache;
}

/**
 * Build a project into static files.
 * @param {{ dir?: string, out?: string, dev?: boolean, theme?: string }} [opts]  `theme` overrides the spec's theme
 * @returns {Promise<{ outDir: string, spec: object, warnings: {path:string,message:string,loc?:string}[] }>}
 */
export async function build({ dir = ".", out = "dist", dev = false, theme } = {}) {
  const projectDir = path.resolve(dir);
  const outDir = path.resolve(projectDir, out);
  if (projectDir === outDir || projectDir.startsWith(outDir + path.sep)) {
    throw new Error(`Output directory ${outDir} would contain the project itself. Choose a different --out.`);
  }

  const { spec, locate } = loadSpec(projectDir);
  if (theme) spec.theme = theme;
  const result = validate(spec);
  const errors = result.errors;
  const customTheme = typeof spec?.theme === "string" && !isPreset(spec.theme) && spec.theme.endsWith(".css");
  if (customTheme && !fs.existsSync(path.join(projectDir, spec.theme))) {
    errors.push({ path: "theme", message: `Theme file "${spec.theme}" not found next to the spec.` });
  }
  if (errors.length) throw new SpecError(`${errors.length} problem${errors.length > 1 ? "s" : ""} in the spec`, errors.map(locate));
  const warnings = result.warnings.map(locate);

  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), renderPage(spec, { dev }));
  fs.writeFileSync(path.join(outDir, "openink.js"), await bundleRuntime());
  fs.copyFileSync(path.join(here, "styles/openink.css"), path.join(outDir, "openink.css"));
  if (customTheme) {
    fs.mkdirSync(path.dirname(path.join(outDir, spec.theme)), { recursive: true });
    fs.copyFileSync(path.join(projectDir, spec.theme), path.join(outDir, spec.theme));
  } else if (spec.theme && spec.theme !== "sketch") {
    fs.copyFileSync(path.join(here, "styles/themes", `${spec.theme}.css`), path.join(outDir, `theme-${spec.theme}.css`));
  }

  // Optional real images / logos: put them in <project>/assets and reference them as assets/…
  const assets = path.join(projectDir, "assets");
  if (fs.existsSync(assets)) fs.cpSync(assets, path.join(outDir, "assets"), { recursive: true });

  return { outDir, spec, warnings };
}
