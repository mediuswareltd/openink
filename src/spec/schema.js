import { blocks } from "../render/blocks/index.js";
import { COMMON, TONES } from "../render/blocks/shared.js";
import { ICON_NAMES } from "../icons.js";
import { THEME_PRESETS, COLOR_KEYS } from "../themes.js";

const TEXT = { anyOf: [{ type: ["string", "number"] }, { type: "object", additionalProperties: { type: ["string", "number"] } }] };
const ref = (name) => ({ $ref: `#/$defs/${name}` });

const propSchema = (p) => {
  const base = {
    text: ref("text"),
    string: p.enum ? { enum: p.enum } : { type: "string" },
    number: { type: "number" },
    boolean: { type: "boolean" },
    "text[]": { type: "array", items: ref("text") },
    "number[]": { type: "array", items: { type: "number" } },
    sections: { type: "array", items: { type: "object", required: ["label"], properties: { label: ref("text"), children: { type: "array", items: ref("block") } }, additionalProperties: false } },
    links: {
      type: "array",
      items: { type: "object", properties: { icon: { enum: ICON_NAMES }, label: ref("text"), go: { type: "string" }, toast: ref("text"), open: { type: "string" } }, additionalProperties: false },
    },
    rows: { type: "array", items: { anyOf: [{ type: "array", items: ref("cell") }, { type: "object", required: ["cells"], properties: { cells: { type: "array", items: ref("cell") }, go: { type: "string" } }, additionalProperties: false }] } },
  }[p.type];
  return { ...base, description: p.doc };
};

/** Properties of a global modal: everything the `modal` block has, minus `type`. */
function modalProps() {
  const modal = blocks.find((b) => b.name === "modal");
  return {
    ...Object.fromEntries(Object.entries({ ...modal.props, ...COMMON }).map(([k, p]) => [k, propSchema(p)])),
    children: { type: "array", items: ref("block") },
  };
}

/** JSON Schema for spec.yaml, generated from the block registry (gives editors autocomplete + validation). */
export function buildSchema() {
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://unpkg.com/@mediusware/openink/schema/spec.schema.json",
    title: "openink spec",
    type: "object",
    required: ["name", "screens"],
    additionalProperties: false,
    patternProperties: { "^x-": { description: "Free-form: define YAML anchors here to reuse blocks." } },
    properties: {
      name: { type: "string", description: "Title shown in the header and browser tab." },
      languages: { type: "array", items: { type: "string", pattern: "^[A-Za-z]{2,3}$" }, description: "Language codes. The first is the default." },
      footer: { type: "string" },
      theme: {
        anyOf: [{ enum: THEME_PRESETS }, { type: "string", pattern: "\\.css$" }],
        description: `Colour theme: a preset (${THEME_PRESETS.join(", ")}) or the path of your own .css file. Default: sketch.`,
      },
      colors: {
        type: "object",
        additionalProperties: false,
        properties: Object.fromEntries(COLOR_KEYS.map((k) => [k, { type: "string", description: `CSS colour for the \`${k}\` design token.` }])),
        description: "Override individual design tokens, on top of the theme.",
      },
      nav: {
        description: "Header buttons: a list, or an object of named lists (screens choose one with `nav:`).",
        anyOf: [{ type: "array", items: ref("navItem") }, { type: "object", additionalProperties: { type: "array", items: ref("navItem") } }],
      },
      modals: {
        type: "array",
        description: "Dialogs that any screen can open with `open: <id>`. Same properties as a `modal` block.",
        items: { type: "object", required: ["id"], additionalProperties: false, properties: modalProps() },
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
            tone: { enum: TONES, description: "Tint the whole screen with a colour." },
            width: { enum: ["narrow", "medium", "wide"], description: "Page width: narrow (~520px, phone-like), medium (~760px) or wide (default, full width)." },
            blocks: { type: "array", items: ref("block") },
          },
        },
      },
    },
    $defs: {
      text: TEXT,
      navItem: { type: "object", properties: { icon: { enum: ICON_NAMES }, label: ref("text"), go: { type: "string" }, toast: ref("text"), open: { type: "string" } }, additionalProperties: false },
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
              ...Object.fromEntries(Object.entries({ ...b.props, ...COMMON }).map(([k, p]) => [k, propSchema(p)])),
              ...(b.children ? { children: { type: "array", items: ref("block") } } : {}),
            },
          })),
        ],
      },
    },
  };
}
