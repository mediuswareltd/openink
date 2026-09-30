import { blocks } from "../render/blocks/index.js";

const TEXT = { anyOf: [{ type: ["string", "number"] }, { type: "object", additionalProperties: { type: ["string", "number"] } }] };
const ref = (name) => ({ $ref: `#/$defs/${name}` });

const propSchema = (p) => {
  const base = {
    text: ref("text"),
    string: p.enum ? { enum: p.enum } : { type: "string" },
    number: { type: "number" },
    boolean: { type: "boolean" },
    "text[]": { type: "array", items: ref("text") },
    tabs: { type: "array", items: { type: "object", required: ["label"], properties: { label: ref("text"), children: { type: "array", items: ref("block") } }, additionalProperties: false } },
    rows: { type: "array", items: { anyOf: [{ type: "array", items: ref("cell") }, { type: "object", required: ["cells"], properties: { cells: { type: "array", items: ref("cell") }, go: { type: "string" } }, additionalProperties: false }] } },
  }[p.type];
  return { ...base, description: p.doc };
};

/** JSON Schema for spec.yaml, generated from the block registry (gives editors autocomplete + validation). */
export function buildSchema() {
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://unpkg.com/sketchframe/schema/spec.schema.json",
    title: "sketchframe spec",
    type: "object",
    required: ["name", "screens"],
    additionalProperties: false,
    properties: {
      name: { type: "string", description: "Title shown in the header and browser tab." },
      languages: { type: "array", items: { type: "string", pattern: "^[A-Za-z]{2,3}$" }, description: "Language codes. The first is the default." },
      footer: { type: "string" },
      theme: { type: "string", description: "Path (relative to the spec) of a CSS file that overrides the design tokens." },
      nav: {
        description: "Header buttons: a list, or an object of named lists (screens choose one with `nav:`).",
        anyOf: [{ type: "array", items: ref("navItem") }, { type: "object", additionalProperties: { type: "array", items: ref("navItem") } }],
      },
      screens: {
        type: "array",
        minItems: 1,
        items: {
          type: "object",
          required: ["id", "blocks"],
          additionalProperties: false,
          properties: {
            id: { type: "string", pattern: "^[A-Za-z][\\w-]*$", description: "Unique id, used by `go:` links." },
            title: ref("text"),
            nav: { type: "string", description: "Name of the nav set to show on this screen." },
            note: { ...ref("text"), description: "Sticky-note annotation shown at the top of the screen." },
            blocks: { type: "array", items: ref("block") },
          },
        },
      },
    },
    $defs: {
      text: TEXT,
      navItem: { type: "object", required: ["label"], properties: { label: ref("text"), go: { type: "string" }, toast: ref("text") }, additionalProperties: false },
      cell: { anyOf: [{ type: ["string", "number"] }, { type: "object", additionalProperties: { type: ["string", "number"] } }, ref("block")] },
      block: {
        anyOf: [
          { type: "string", description: "Shorthand for a `text` block." },
          ...blocks.map((b) => ({
            type: "object",
            description: b.summary,
            required: ["type", ...Object.entries(b.props).filter(([, p]) => p.required).map(([k]) => k)],
            additionalProperties: false,
            properties: {
              type: { const: b.name },
              ...Object.fromEntries(Object.entries(b.props).map(([k, p]) => [k, propSchema(p)])),
              ...(b.children ? { children: { type: "array", items: ref("block") } } : {}),
            },
          })),
        ],
      },
    },
  };
}
