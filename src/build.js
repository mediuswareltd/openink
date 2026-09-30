import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import * as esbuild from "esbuild";
import { validate } from "./spec/validate.js";
import { renderPage } from "./render/page.js";

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

/** Find and parse the spec in a project directory. */
export function loadSpec(dir = ".") {
  const file = SPEC_FILES.map((f) => path.join(dir, f)).find(fs.existsSync);
  if (!file) throw new SpecError(`No spec.yaml found in ${path.resolve(dir)}. Run \`sketchframe init\` to create one.`);
  let spec;
  try {
    spec = YAML.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    throw new SpecError(`${path.basename(file)} is not valid YAML: ${e.message}`);
  }
  return { spec, file };
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
 * @param {{ dir?: string, out?: string, dev?: boolean }} [opts]
 * @returns {Promise<{ outDir: string, spec: object, warnings: {path:string,message:string}[] }>}
 */
export async function build({ dir = ".", out = "dist", dev = false } = {}) {
  const projectDir = path.resolve(dir);
  const outDir = path.resolve(projectDir, out);
  if (projectDir === outDir || projectDir.startsWith(outDir + path.sep)) {
    throw new Error(`Output directory ${outDir} would contain the project itself. Choose a different --out.`);
  }

  const { spec } = loadSpec(projectDir);
  const { errors, warnings } = validate(spec);
  if (spec && typeof spec.theme === "string" && !fs.existsSync(path.join(projectDir, spec.theme))) {
    errors.push({ path: "theme", message: `Theme file "${spec.theme}" not found next to the spec.` });
  }
  if (errors.length) throw new SpecError(`${errors.length} problem${errors.length > 1 ? "s" : ""} in the spec`, errors);

  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), renderPage(spec, { dev }));
  fs.writeFileSync(path.join(outDir, "sketchframe.js"), await bundleRuntime());
  fs.copyFileSync(path.join(here, "styles/sketchframe.css"), path.join(outDir, "sketchframe.css"));
  if (spec.theme) fs.copyFileSync(path.join(projectDir, spec.theme), path.join(outDir, spec.theme));

  // Optional real images / logos: put them in <project>/assets and reference them as assets/…
  const assets = path.join(projectDir, "assets");
  if (fs.existsSync(assets)) fs.cpSync(assets, path.join(outDir, "assets"), { recursive: true });

  return { outDir, spec, warnings };
}
