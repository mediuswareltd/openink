// Regenerates the README screenshots in docs/img from the example projects:  npm run screenshots
// Needs Chrome, Chromium or Edge installed.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { exportFiles } from "../src/export.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shots = [
  ["rental-portal", "search", "rental-search"],
  ["rental-portal", "detail", "rental-detail"],
  ["saas-admin", "overview", "saas-overview"],
  ["saas-admin", "users", "saas-users"],
];

fs.mkdirSync(path.join(root, "docs/img"), { recursive: true });
for (const example of new Set(shots.map((s) => s[0]))) {
  await exportFiles({ dir: path.join(root, "examples", example), png: true });
}
for (const [example, screen, name] of shots) {
  fs.copyFileSync(path.join(root, "examples", example, "dist/png", `${screen}.png`), path.join(root, "docs/img", `${name}.png`));
}
console.log(`✓ ${shots.length} screenshots in docs/img`);
