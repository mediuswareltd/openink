// Publishes the built documentation site (docs/.vitepress/dist) to the gh-pages branch, which
// GitHub Pages serves. Runs from `npm run docs:deploy`, by hand, like npm releases: no GitHub Actions.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "docs/.vitepress/dist");
const git = (cwd, ...args) => execFileSync("git", args, { cwd, encoding: "utf8" }).trim();

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("✗ No built site in docs/.vitepress/dist. Run `npm run docs:build` first.");
  process.exit(1);
}

const remote = git(root, "remote", "get-url", "origin");
const commit = git(root, "rev-parse", "--short", "HEAD");

// A fresh one-commit repository each time: the branch only ever holds the latest site.
fs.rmSync(path.join(dist, ".git"), { recursive: true, force: true });
fs.writeFileSync(path.join(dist, ".nojekyll"), ""); // serve the files as they are
git(dist, "init", "-q", "-b", "gh-pages");
git(dist, "add", "-A");
git(dist, "commit", "-q", "-m", `docs: deploy the documentation website from ${commit}`);
execFileSync("git", ["push", "-f", remote, "gh-pages"], { cwd: dist, stdio: "inherit" });
fs.rmSync(path.join(dist, ".git"), { recursive: true, force: true });

console.log(`✓ Deployed ${commit} to the gh-pages branch: https://mediuswareltd.github.io/openink/`);
