#!/usr/bin/env node
// Checks a commit message against Conventional Commits 1.0.0 (https://www.conventionalcommits.org).
// No dependencies. Used by .githooks/commit-msg, and directly:
//   node scripts/commit-lint.js .git/COMMIT_EDITMSG
//   node scripts/commit-lint.js --message "feat(cli): add a --theme option"
import fs from "node:fs";
import { pathToFileURL } from "node:url";

export const TYPES = {
  feat: "a new feature (bumps the minor version)",
  fix: "a bug fix (bumps the patch version)",
  docs: "documentation only",
  style: "formatting; no change to behaviour",
  refactor: "code change that neither fixes a bug nor adds a feature",
  perf: "a performance improvement",
  test: "adding or fixing tests",
  build: "build system, dependencies or package.json",
  ci: "continuous-integration configuration",
  chore: "anything else that does not change src/ or tests",
  revert: "reverts an earlier commit",
};

const HEADER = /^(?<type>[a-z]+)(?:\((?<scope>[a-z0-9][a-z0-9-]*(?:[/,][a-z0-9][a-z0-9-]*)*)\))?(?<breaking>!)?: (?<description>.*)$/;
// messages that git or GitHub write themselves are not checked
const GENERATED = /^(Merge |Revert "|fixup! |squash! |amend! )/;
const HEADER_MAX = 72;
const BODY_MAX = 100;

/**
 * @param {string} message the raw commit message
 * @returns {{ ok: boolean, errors: string[], type?: string, scope?: string, breaking?: boolean, skipped?: boolean }}
 */
export function lintCommit(message) {
  // git strips lines that start with "#" (the template it shows in the editor)
  const lines = message
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => !line.startsWith("#"))
    .map((line) => line.replace(/\s+$/, ""));
  while (lines.length && lines[lines.length - 1] === "") lines.pop();

  if (!lines.length || lines.every((l) => l === "")) return { ok: false, errors: ["The commit message is empty."] };
  const header = lines[0];
  if (GENERATED.test(header)) return { ok: true, errors: [], skipped: true };

  const errors = [];
  let result;
  const match = HEADER.exec(header);
  if (!match) {
    errors.push(`The first line must look like "type(scope): description" (scope is optional), but it is:\n    ${header}`);
  } else {
    const { type, scope, breaking, description } = match.groups;
    if (!Object.hasOwn(TYPES, type)) errors.push(`Unknown type "${type}". Use one of: ${Object.keys(TYPES).join(", ")}.`);
    if (!description.trim()) errors.push("The description after the colon is empty.");
    if (/\.$/.test(description)) errors.push("Do not end the description with a full stop.");
    // lower case, unless the first word is an acronym such as "PDF" or "SVG"
    if (/^[A-Z]/.test(description) && !/^[A-Z][A-Z0-9]+\b/.test(description)) {
      errors.push('Start the description in lower case (for example "add a --theme option", not "Add a --theme option").');
    }
    if (errors.length === 0) {
      result = { type, scope, breaking: Boolean(breaking) || lines.some((l) => /^BREAKING[ -]CHANGE: \S/.test(l)) };
    }
  }
  if (header.length > HEADER_MAX) errors.push(`The first line is ${header.length} characters; keep it to ${HEADER_MAX} or fewer.`);

  if (lines.length > 1 && lines[1] !== "") errors.push("Leave a blank line between the first line and the body.");
  lines.slice(2).forEach((line, i) => {
    const isLink = /https?:\/\//.test(line);
    const isCode = /^(\t| {4})/.test(line);
    if (line.length > BODY_MAX && !isLink && !isCode) errors.push(`Body line ${i + 3} is ${line.length} characters; wrap it at ${BODY_MAX} or fewer.`);
  });

  return errors.length ? { ok: false, errors } : { ok: true, errors: [], ...result };
}

const HELP = `
Conventional Commits, the short version:

    <type>(<scope>): <description>          scope is optional
    <blank line>
    <body: why, not what>                   optional
    <blank line>
    <footers: Closes #12, BREAKING CHANGE: ...>

  types:  ${Object.keys(TYPES).join(", ")}
  Add "!" before the colon for a breaking change:  feat(spec)!: rename "nav" to "menu"
  Examples:
      feat(blocks): add a rating block
      fix(export): wait for wired-elements before taking the screenshot
      docs: explain how to publish a release

  Full rules: CONTRIBUTING.md > "Commit messages"
`;

function main(argv) {
  const at = argv.indexOf("--message");
  const message = at >= 0 ? argv[at + 1] ?? "" : argv[0] ? fs.readFileSync(argv[0], "utf8") : "";
  if (at < 0 && !argv[0]) {
    console.error("usage: commit-lint.js <message-file> | --message <text>");
    return 2;
  }
  const { ok, errors } = lintCommit(message);
  if (ok) return 0;
  console.error("\n✗ This commit message does not follow Conventional Commits:\n");
  for (const e of errors) console.error(`  - ${e}`);
  console.error(HELP);
  return 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) process.exitCode = main(process.argv.slice(2));
