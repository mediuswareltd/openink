import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { build, SpecError } from "../src/build.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bin = path.join(root, "bin/openink.js");
const cli = (args, cwd) => spawnSync(process.execPath, [bin, ...args], { cwd, encoding: "utf8", env: { ...process.env, NO_COLOR: "1" } });
const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), "openink-"));

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
  for (const f of ["index.html", "openink.js", "openink.css"]) assert.ok(fs.existsSync(path.join(dir, "dist", f)), f);
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
  assert.match(r.stderr, /No spec\.yaml found.*openink init/);
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

test("--theme overrides the spec, copies the preset stylesheet, and rejects unknown themes", () => {
  const dir = tmp();
  fs.writeFileSync(path.join(dir, "spec.yaml"), "name: x\nscreens:\n  - { id: a, blocks: [] }\n");
  const r = cli(["build", dir, "--theme", "dark"]);
  assert.equal(r.status, 0, r.stderr);
  assert.ok(fs.existsSync(path.join(dir, "dist/theme-dark.css")));
  assert.match(fs.readFileSync(path.join(dir, "dist/index.html"), "utf8"), /theme-dark\.css/);
  const bad = cli(["build", dir, "--theme", "neon"]);
  assert.equal(bad.status, 1);
  assert.match(bad.stderr, /Unknown theme "neon"/);
});

test("every preset theme has a stylesheet", async () => {
  const { THEME_PRESETS } = await import("../src/themes.js");
  for (const t of THEME_PRESETS.filter((x) => x !== "sketch")) assert.ok(fs.existsSync(path.join(root, "src/styles/themes", `${t}.css`)), t);
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

test("dev falls back to the next free port when the requested one is taken", async () => {
  const { dev } = await import("../src/dev.js");
  const http = await import("node:http");
  const dir = path.join(tmp(), "p");
  assert.equal(cli(["init", dir]).status, 0);

  const blocker = http.createServer();
  await new Promise((r) => blocker.listen(0, r));
  const taken = blocker.address().port;
  const logs = [];
  const server = await dev({ dir, port: taken, log: (m) => logs.push(m) });
  try {
    assert.notEqual(server.url, `http://localhost:${taken}`);
    assert.ok(logs.some((m) => m.includes(`Port ${taken} is in use`)), logs.join("\n"));
    const res = await fetch(server.url);
    assert.equal(res.status, 200);
  } finally {
    server.close();
    blocker.close();
  }
});

test("dev passes the warnings of each build to onWarnings", async () => {
  const { dev } = await import("../src/dev.js");
  const dir = tmp();
  fs.writeFileSync(path.join(dir, "spec.yaml"), "name: x\ncolour: red\nscreens:\n  - { id: a, blocks: [] }\n");
  const warnings = [];
  const server = await dev({ dir, port: 0, log: () => {}, onWarnings: (w) => warnings.push(...w) });
  server.close();
  assert.equal(warnings.length, 1);
  assert.equal(warnings[0].path, "colour");
});

test("dev reports a failed build to the browser until the spec builds again", async () => {
  const { dev } = await import("../src/dev.js");
  const dir = tmp();
  const spec = path.join(dir, "spec.yaml");
  fs.writeFileSync(spec, "name: x\nscreens:\n  - { id: a, blocks: [{ type: buton }] }\n");
  const server = await dev({ dir, port: 0, log: () => {} });
  const status = async () => (await fetch(`${server.url}/__version`)).json();
  const until = async (ok) => {
    for (let i = 0; i < 50; i++, await new Promise((r) => setTimeout(r, 100))) {
      const s = await status();
      if (ok(s)) return s;
    }
    assert.fail("the dev server did not rebuild");
  };
  try {
    // no good build yet: the page is only the poller, which shows the error
    const page = await (await fetch(server.url)).text();
    assert.match(page, /__version/);
    const failed = await status();
    assert.match(failed.error, /screens\[0\]\.blocks\[0\]\.type: .*buton/);

    fs.writeFileSync(spec, "name: x\nscreens:\n  - { id: a, blocks: [{ type: button, label: Go }] }\n");
    const fixed = await until((s) => s.error === null);
    assert.notEqual(fixed.version, failed.version);
  } finally {
    server.close();
  }
});

test("problems carry the file, line and column of the spec", () => {
  const dir = tmp();
  fs.writeFileSync(
    path.join(dir, "spec.yaml"),
    [
      "name: x",
      "colour: red",
      "x-card: &card",
      "  type: card",
      "  children: [{ type: txt }]",
      "screens:",
      "  - id: a",
      "    blocks:",
      "      - type: buton",
      "      - *card",
      "  - title: no id",
      "",
    ].join("\n"),
  );
  const { stderr } = cli(["validate"], dir);
  assert.match(stderr, /warn {2}spec\.yaml:2:1 colour: Unknown top-level field/);
  assert.match(stderr, /error spec\.yaml:9:9 screens\[0\]\.blocks\[0\]\.type: Unknown block type "buton"/);
  // through an alias, the location is where the anchored block is defined
  assert.match(stderr, /error spec\.yaml:5:16 screens\[0\]\.blocks\[1\]\.children\[0\]\.type: Unknown block type "txt"/);
  // a missing field points at its parent
  assert.match(stderr, /error spec\.yaml:11:5 screens\[1\]\.id:/);
});
