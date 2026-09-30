import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build, loadSpec, SpecError } from "./build.js";
import { validate } from "./spec/validate.js";
import { blocksMarkdown } from "./spec/docs.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { version } = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

const HELP = `openink ${version}: sketchy, clickable wireframes from a YAML spec

Usage: openink <command> [dir] [options]

Commands:
  init [dir]       Create a new project (spec.yaml + AI-assistant instructions)
  build [dir]      Build static files into <dir>/dist
  dev [dir]        Build, serve and live-reload while you edit the spec
  validate [dir]   Check the spec without building
  pdf [dir]        Build and export a PDF (one screen per page)
  png [dir]        Build and export one PNG per screen
  blocks           Print the reference for every block type

Options:
  --out <dir>      Output directory, relative to the project (default: dist)
  --port <n>       Dev server port (default: 3000; the next free port if taken)
  --theme <name>   Try a colour theme without editing the spec: sketch, color, pastel, blueprint, dark
  -v, --version    Print the version
  -h, --help       Show this help

[dir] defaults to the current directory. PDF/PNG export needs Chrome, Chromium or Edge.`;

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const paint = (code) => (s) => (useColor ? `\x1b[${code}m${s}\x1b[0m` : s);
const red = paint(31), yellow = paint(33), green = paint(32), dim = paint(2);

function parse(argv) {
  const opts = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "-h" || a === "--help") opts.help = true;
    else if (a === "-v" || a === "--version") opts.version = true;
    else if (a === "--out" || a === "--port" || a === "--theme") {
      if (argv[i + 1] === undefined) throw new Error(`${a} needs a value`);
      opts[a.slice(2)] = argv[++i];
    } else if (a.startsWith("-")) throw new Error(`Unknown option ${a}. Try --help.`);
    else opts._.push(a);
  }
  return opts;
}

const printIssues = (list, color, label) =>
  list.forEach((i) => console.error(`  ${color(label)} ${dim(i.path || "spec")}: ${i.message}`));

function init(dir = ".") {
  const target = path.resolve(dir);
  if (fs.existsSync(path.join(target, "spec.yaml"))) throw new Error(`${path.join(target, "spec.yaml")} already exists.`);
  fs.mkdirSync(target, { recursive: true });
  const name = path.basename(target);
  for (const file of fs.readdirSync(path.join(root, "templates/starter"))) {
    const text = fs.readFileSync(path.join(root, "templates/starter", file), "utf8").replaceAll("{{name}}", name);
    fs.writeFileSync(path.join(target, file === "gitignore" ? ".gitignore" : file), text);
  }
  const rel = path.relative(process.cwd(), target);
  console.log(green("✓") + ` Created ${rel || "."}/spec.yaml\n\nNext:\n  ${rel ? `cd ${rel} && ` : ""}npx openink dev`);
}

/** @param {string[]} argv */
export async function run(argv) {
  const opts = parse(argv);
  const [cmd, dir] = opts._;
  if (opts.version) return console.log(version);
  if (!cmd || opts.help || cmd === "help") return console.log(HELP);

  const out = opts.out ?? "dist";
  switch (cmd) {
    case "init":
      return init(dir);

    case "blocks":
      return console.log(blocksMarkdown());

    case "validate": {
      const { spec } = loadSpec(dir);
      const { errors, warnings } = validate(spec);
      printIssues(warnings, yellow, "warn ");
      printIssues(errors, red, "error");
      if (errors.length) throw new SpecError(`${errors.length} error${errors.length > 1 ? "s" : ""}`);
      return console.log(green("✓") + ` Spec is valid${warnings.length ? ` (${warnings.length} warning${warnings.length > 1 ? "s" : ""})` : ""}`);
    }

    case "build": {
      const { outDir, spec, warnings } = await build({ dir, out, theme: opts.theme });
      printIssues(warnings, yellow, "warn ");
      return console.log(green("✓") + ` ${spec.screens.length} screens → ${path.relative(process.cwd(), path.join(outDir, "index.html")) || "index.html"}`);
    }

    case "pdf":
    case "png": {
      const { exportFiles } = await import("./export.js");
      const { files } = await exportFiles({ dir, out, png: cmd === "png", theme: opts.theme });
      return console.log(green("✓") + ` ${files.length === 1 ? path.relative(process.cwd(), files[0]) : `${files.length} PNGs in ${path.relative(process.cwd(), path.dirname(files[0]))}`}`);
    }

    case "dev": {
      const { dev } = await import("./dev.js");
      const server = await dev({
        dir,
        port: opts.port ? +opts.port : 3000,
        theme: opts.theme,
        onIssues: (e) => { console.error(red("✗ " + e.message)); printIssues(e.issues, red, "error"); },
      });
      console.log(green("✓") + ` Serving ${server.url}  ${dim("(Ctrl+C to stop)")}`);
      process.on("SIGINT", () => { server.close(); process.exit(0); });
      return new Promise(() => {}); // keep running
    }

    default:
      throw new Error(`Unknown command "${cmd}". Try \`openink --help\`.`);
  }
}

export async function main(argv = process.argv.slice(2)) {
  try {
    await run(argv);
  } catch (e) {
    if (e instanceof SpecError) {
      console.error(red("✗ " + e.message));
      printIssues(e.issues, red, "error");
    } else console.error(red("✗ " + e.message));
    process.exitCode = 1;
  }
}
