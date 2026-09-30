// Regenerates the README screenshots in docs/img from the example projects:  npm run screenshots
// Needs Chrome, Chromium or Edge installed. Takes a few minutes (one headless browser run per export).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { exportFiles } from "../src/export.js";
import { THEME_PRESETS } from "../src/themes.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const img = path.join(root, "docs/img");
fs.rmSync(img, { recursive: true, force: true });
fs.mkdirSync(img, { recursive: true });

// [example, screen, output name]
const shots = [
  ["photo-sharing", "feed", "photo-feed"],
  ["photo-sharing", "mobile", "photo-mobile"],
  ["saas-admin", "overview", "saas-overview"],
  ["gallery", "media", "gallery-media"],
  ["gallery", "colours", "gallery-colours"],
];
for (const example of new Set(shots.map((s) => s[0]))) {
  await exportFiles({ dir: path.join(root, "examples", example), png: true });
}
for (const [example, screen, name] of shots) {
  fs.copyFileSync(path.join(root, "examples", example, "dist/png", `${screen}.png`), path.join(img, `${name}.png`));
}

// the same screen in every theme
for (const theme of THEME_PRESETS) {
  await exportFiles({ dir: path.join(root, "examples/gallery"), out: `dist-${theme}`, png: true, theme });
  fs.copyFileSync(path.join(root, "examples/gallery", `dist-${theme}/png/content.png`), path.join(img, `theme-${theme}.png`));
  fs.rmSync(path.join(root, "examples/gallery", `dist-${theme}`), { recursive: true, force: true });
}
console.log(`✓ ${fs.readdirSync(img).length} screenshots in docs/img`);
