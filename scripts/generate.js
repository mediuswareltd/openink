// Regenerates docs/blocks.md and schema/spec.schema.json from the block registry.
// Run after changing anything in src/render/blocks:  npm run generate
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blocksMarkdown } from "../src/spec/docs.js";
import { buildSchema } from "../src/spec/schema.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
fs.writeFileSync(path.join(root, "docs/blocks.md"), blocksMarkdown() + "\n");
fs.writeFileSync(path.join(root, "schema/spec.schema.json"), JSON.stringify(buildSchema(), null, 2) + "\n");
console.log("✓ docs/blocks.md, schema/spec.schema.json");
