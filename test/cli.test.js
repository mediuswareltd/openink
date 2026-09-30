import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { build, SpecError } from "../src/build.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bin = path.join(root, "bin/sketchframe.js");
const cli = (args, cwd) => spawnSync(process.execPath, [bin, ...args], { cwd, encoding: "utf8", env: { ...process.env, NO_COLOR: "1" } });
const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), "sketchframe-"));

test("--version prints the package version", () => {
  const { version } = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  assert.equal(cli(["--version"]).stdout.trim(), version);
});

test("init creates a project that validates and builds", () => {
  const dir = path.join(tmp(), "my-project");
  const init = cli(["init", dir]);
  assert.equal(init.status, 0, init.stderr);
  for (const f of ["spec.yaml", "AGENTS.md", "README.md", ".gitignore"]) assert.ok(fs.existsSync(path.join(dir, f)), f);
  assert.match(fs.readFileSync(path.join(dir, "spec.yaml"), "utf8"), /name: my-project/);

  assert.equal(cli(["validate", dir]).status, 0);
  const built = cli(["build", dir]);
  assert.equal(built.status, 0, built.stderr);
  for (const f of ["index.html", "sketchframe.js", "sketchframe.css"]) assert.ok(fs.existsSync(path.join(dir, "dist", f)), f);
});

test("init refuses to overwrite an existing spec", () => {
  const dir = tmp();
  fs.writeFileSync(path.join(dir, "spec.yaml"), "name: x\n");
  const r = cli(["init", dir]);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /already exists/);
});

test("validate exits 1 and lists errors with their paths", () => {
  const dir = tmp();
  fs.writeFileSync(path.join(dir, "spec.yaml"), "name: x\nscreens:\n  - id: a\n    blocks:\n      - { type: buton }\n");
  const r = cli(["validate", dir]);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /screens\[0\]\.blocks\[0\]\.type: Unknown block type "buton"\. Did you mean "button"\?/);
});

test("build without a spec explains what to do", () => {
  const r = cli(["build", tmp()]);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /No spec\.yaml found.*sketchframe init/);
});

test("invalid YAML gives a readable error", () => {
  const dir = tmp();
  fs.writeFileSync(path.join(dir, "spec.yaml"), "name: [unclosed\n");
  assert.match(cli(["validate", dir]).stderr, /not valid YAML/);
});

test("unknown command and unknown option fail cleanly", () => {
  assert.match(cli(["frobnicate"]).stderr, /Unknown command "frobnicate"/);
  assert.match(cli(["build", "--nope"]).stderr, /Unknown option --nope/);
});

test("blocks prints the reference", () => {
  const r = cli(["blocks"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /### `button`/);
});

test("build refuses an output directory that would contain the project", () => {
  const dir = tmp();
  fs.writeFileSync(path.join(dir, "spec.yaml"), "name: x\nscreens:\n  - { id: a, blocks: [] }\n");
  return assert.rejects(build({ dir, out: "." }), /would contain the project/);
});

test("build copies theme and assets, and reports a missing theme", async () => {
  const dir = tmp();
  fs.mkdirSync(path.join(dir, "assets"));
  fs.writeFileSync(path.join(dir, "assets/logo.svg"), "<svg/>");
  fs.writeFileSync(path.join(dir, "theme.css"), ":root{--accent:red}");
  fs.writeFileSync(path.join(dir, "spec.yaml"), "name: x\ntheme: theme.css\nscreens:\n  - { id: a, blocks: [] }\n");
  await build({ dir });
  assert.ok(fs.existsSync(path.join(dir, "dist/assets/logo.svg")));
  assert.ok(fs.existsSync(path.join(dir, "dist/theme.css")));

  fs.rmSync(path.join(dir, "theme.css"));
  await assert.rejects(build({ dir }), (e) => e instanceof SpecError && /Theme file "theme.css" not found/.test(e.issues[0].message));
});
