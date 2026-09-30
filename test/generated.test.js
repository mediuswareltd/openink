import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { fileURLToPath } from "node:url";
import { blocksMarkdown } from "../src/spec/docs.js";
import { buildSchema } from "../src/spec/schema.js";
import { validate } from "../src/spec/validate.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

test("docs/blocks.md is up to date (run `npm run generate`)", () => {
  assert.equal(read("docs/blocks.md"), blocksMarkdown() + "\n");
});

test("schema/spec.schema.json is up to date (run `npm run generate`)", () => {
  assert.deepEqual(JSON.parse(read("schema/spec.schema.json")), buildSchema());
});

test("every example validates with no errors and no warnings", () => {
  const examples = fs.readdirSync(path.join(root, "examples"), { withFileTypes: true }).filter((d) => d.isDirectory());
  assert.ok(examples.length >= 2);
  for (const d of examples) {
    const spec = YAML.parse(read(`examples/${d.name}/spec.yaml`));
    const { errors, warnings } = validate(spec);
    assert.deepEqual([...errors, ...warnings], [], d.name);
  }
});

test("the starter template validates", () => {
  const spec = YAML.parse(read("templates/starter/spec.yaml").replaceAll("{{name}}", "demo"));
  const { errors, warnings } = validate(spec);
  assert.deepEqual([...errors, ...warnings], []);
});
