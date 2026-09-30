import { blocks } from "../render/blocks/index.js";

const TYPE_LABEL = {
  text: "text",
  string: "string",
  number: "number",
  boolean: "boolean",
  "text[]": "list of text",
  tabs: "list of `{ label, children }`",
  rows: "list of rows",
};

/** Markdown reference for every block, generated from the registry (also printed by `sketchframe blocks`). */
export function blocksMarkdown() {
  const groups = [...new Set(blocks.map((b) => b.group))];
  const out = [
    "# Block reference",
    "",
    "<!-- Generated from src/render/blocks by `npm run generate`. Do not edit by hand. -->",
    "",
    "Every entry in a screen's `blocks:` list is `{ type: <name>, ...props }`. Blocks marked **children** also take a `children:` list of blocks.",
    "A `text` value is a string, a number, or a translation object such as `{ en: \"Hello\", de: \"Hallo\" }` (needs `languages:` in the spec).",
    "",
  ];
  for (const g of groups) {
    out.push(`## ${g}`, "");
    for (const b of blocks.filter((x) => x.group === g)) {
      out.push(`### \`${b.name}\`${b.children ? " · children" : ""}`, "", b.summary, "");
      const props = Object.entries(b.props);
      if (props.length) {
        out.push("| Prop | Type | Description |", "|---|---|---|");
        for (const [k, p] of props) {
          const type = p.enum ? p.enum.map((e) => `\`${e}\``).join(" \\| ") : TYPE_LABEL[p.type];
          out.push(`| \`${k}\`${p.required ? " *" : ""} | ${type} | ${p.doc} |`);
        }
        out.push("", "\\* required", "");
      }
    }
  }
  return out.join("\n");
}
