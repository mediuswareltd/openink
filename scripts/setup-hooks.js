// Turns on the repository's git hooks (.githooks/) for this clone. Runs from the `prepare` npm script,
// i.e. after `npm install` in a checkout. Does nothing outside a git checkout (e.g. when installed from a tarball).
import { execFileSync } from "node:child_process";
import fs from "node:fs";

try {
  if (fs.existsSync(".githooks")) {
    execFileSync("git", ["rev-parse", "--is-inside-work-tree"], { stdio: "ignore" });
    execFileSync("git", ["config", "core.hooksPath", ".githooks"]);
    console.log("✓ git hooks enabled: commit messages are checked against Conventional Commits");
  }
} catch {
  // not a git checkout, or git is not installed: nothing to enable
}
