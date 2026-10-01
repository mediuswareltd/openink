// Builds the examples into docs/public/demos and copies the logos into docs/public,
// so the documentation site (VitePress) can serve live, clickable prototypes.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "../src/index.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "docs/public");

const demos = [
  { name: "photo-sharing", dir: "examples/photo-sharing" },
  { name: "saas-admin", dir: "examples/saas-admin" },
  { name: "rental-portal", dir: "examples/rental-portal" },
  { name: "gallery", dir: "examples/gallery" },
  { name: "gallery-dark", dir: "examples/gallery", theme: "dark" },
];

// Every docs snippet (the side-by-side examples on the home and recipes pages) gets a live demo.
for (const d of fs.readdirSync(path.join(root, "docs/snippets"), { withFileTypes: true })) {
  if (d.isDirectory()) demos.push({ name: d.name, dir: `docs/snippets/${d.name}` });
}

fs.mkdirSync(pub, { recursive: true });
for (const logo of ["logo-black.svg", "logo-white.svg", "mark-black.svg", "mark-white.svg"]) {
  fs.copyFileSync(path.join(root, "assets", logo), path.join(pub, logo));
}
fs.copyFileSync(path.join(root, "docs/img/saas-overview.png"), path.join(pub, "hero.png"));

for (const demo of demos) {
  const out = path.join(pub, "demos", demo.name);
  const { spec } = await build({ dir: path.join(root, demo.dir), out, theme: demo.theme });
  console.log(`✓ ${demo.name}: ${spec.screens.length} screens`);
}
