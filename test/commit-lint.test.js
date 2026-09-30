import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { lintCommit, TYPES } from "../scripts/commit-lint.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ok = (msg) => assert.deepEqual(lintCommit(msg).errors, [], `expected valid: ${JSON.stringify(msg)}`);
const bad = (msg, pattern) => {
  const r = lintCommit(msg);
  assert.equal(r.ok, false, `expected invalid: ${JSON.stringify(msg)}`);
  assert.match(r.errors.join("\n"), pattern);
};

test("accepts well-formed messages, with and without a scope", () => {
  ok("feat: add a rating block");
  ok("feat(blocks): add a rating block");
  ok("fix(export): wait for wired-elements before the screenshot");
  ok("docs: explain how to publish a release");
  ok("chore(deps): bump esbuild");
  ok("refactor(render/blocks): split the media blocks into their own file");
});

test("every documented type is accepted", () => {
  for (const type of Object.keys(TYPES)) ok(`${type}: do something`);
});

test("reports the parsed type, scope and breaking flag", () => {
  assert.deepEqual(
    (({ type, scope, breaking }) => ({ type, scope, breaking }))(lintCommit("feat(spec)!: rename nav to menu")),
    { type: "feat", scope: "spec", breaking: true }
  );
  assert.equal(lintCommit("fix: a bug").breaking, false);
  assert.equal(lintCommit("feat: a thing\n\nBREAKING CHANGE: the old flag is gone").breaking, true);
});

test("accepts a body and footers", () => {
  ok("fix(dev): keep serving the last good build\n\nThe dev server threw away the output when a rebuild failed.\n\nCloses #12");
});

test("rejects a message that is not in the type: description shape", () => {
  bad("Update project structure and documentation", /must look like/);
  bad("added a thing", /must look like/);
  bad("feat add a thing", /must look like/);
  bad("feat:add a thing", /must look like/);
  bad("feat(): add a thing", /must look like/);
});

test("rejects unknown types, including inherited object keys", () => {
  bad("feature: add a thing", /Unknown type "feature"/);
  bad("wip: add a thing", /Unknown type "wip"/);
  bad("constructor: add a thing", /Unknown type "constructor"/);
});

test("description rules: not empty, no full stop, lower case (acronyms allowed)", () => {
  bad("feat: ", /empty|must look like/);
  bad("feat: add a thing.", /full stop/);
  bad("feat: Add a thing", /lower case/);
  ok("fix: PDF export waits for the fonts");
  ok("docs: SVG logos are converted to outlines");
});

test("header length is limited to 72 characters", () => {
  ok(`feat: ${"a".repeat(72 - 6)}`);
  bad(`feat: ${"a".repeat(72 - 5)}`, /72 or fewer/);
});

test("a body must be separated from the header by a blank line", () => {
  bad("fix: a bug\nthis is the body", /blank line/);
  ok("fix: a bug\n\nthis is the body");
});

test("long body lines are rejected, except links and indented code", () => {
  bad(`fix: a bug\n\n${"word ".repeat(30)}`, /Body line 3/);
  ok(`fix: a bug\n\nSee https://example.com/${"a".repeat(120)}`);
  ok(`fix: a bug\n\n    ${"x".repeat(120)}`);
});

test("git's own comment lines and trailing whitespace are ignored", () => {
  ok("feat: add a thing\n\n# Please enter the commit message\n# Lines starting with '#' are ignored\n");
  ok("feat: add a thing   \r\n");
});

test("merge, revert, fixup and squash messages are not checked", () => {
  for (const m of ["Merge pull request #2 from x/y", "Merge branch 'main' into feature", 'Revert "feat: add a thing"', "fixup! feat: add a thing", "squash! fix: a bug"]) {
    const r = lintCommit(m);
    assert.equal(r.ok, true, m);
    assert.equal(r.skipped, true, m);
  }
});

test("an empty message is rejected", () => {
  bad("", /empty/);
  bad("\n\n# only comments\n", /empty/);
});

test("the CLI reads a message file (as git passes it to the hook) and sets the exit code", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "commitlint-"));
  const write = (text) => {
    const file = path.join(dir, "MSG");
    fs.writeFileSync(file, text);
    return file;
  };
  const run = (args) => spawnSync(process.execPath, [path.join(root, "scripts/commit-lint.js"), ...args], { encoding: "utf8" });

  assert.equal(run([write("feat: add a thing\n")]).status, 0);
  const rejected = run([write("Added a thing\n")]);
  assert.equal(rejected.status, 1);
  assert.match(rejected.stderr, /does not follow Conventional Commits/);
  assert.match(rejected.stderr, /types:\s+feat, fix, docs/);
  assert.equal(run(["--message", "fix(cli): handle a missing spec"]).status, 0);
  assert.equal(run(["--message", "nope"]).status, 1);
  assert.equal(run([]).status, 2);
});

test("every commit example in the docs passes the checker (so the docs cannot drift from the rules)", () => {
  const messages = [];
  for (const file of ["CONTRIBUTING.md", "AGENTS.md"]) {
    const text = fs.readFileSync(path.join(root, file), "utf8").replace(/\r\n/g, "\n"); // Windows checkouts may use CRLF
    for (const [, block] of text.matchAll(/```text\n([\s\S]*?)```/g)) {
      // a block with blank lines is one multi-line message; otherwise every line is a message of its own
      if (/\n\s*\n/.test(block.trim())) messages.push([file, block.trim()]);
      else for (const line of block.trim().split("\n")) messages.push([file, line]);
    }
  }
  assert.ok(messages.length >= 8, "expected to find the examples in the docs");
  for (const [file, message] of messages) {
    const { ok, errors } = lintCommit(message);
    assert.ok(ok, `${file}: ${JSON.stringify(message.split("\n")[0])} -> ${errors.join(" ")}`);
  }
});
