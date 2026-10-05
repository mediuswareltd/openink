import { blocks } from "../render/blocks/index.js";
import { COMMON, ACTION } from "../render/blocks/shared.js";
import { ICON_NAMES } from "../icons.js";

const TYPE_LABEL = {
  text: "text",
  string: "string",
  number: "number",
  boolean: "boolean",
  "text[]": "list of text",
  "number[]": "list of numbers",
  sections: "list of `{ label, children }`",
  links: "list of `{ icon, label, go, toast, open }`",
  rows: "list of rows",
};

/** Markdown reference for every block, generated from the registry (also printed by `openink blocks`). */
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
    "## Props every block accepts",
    "",
    "| Prop | Type | Description |",
    "|---|---|---|",
    ...Object.entries(COMMON).map(([k, p]) => `| \`${k}\` | ${p.enum ? p.enum.map((e) => `\`${e}\``).join(" \\| ") : p.type} | ${p.doc} |`),
    "",
    "## Actions",
    "",
    "Blocks that list `go`, `toast`, `open` or `close` in their props are clickable (`button`, `card`, `avatar`, `link`, `nextbar`, nav and tab-bar items) and accept:",
    "",
    "| Prop | Type | Description |",
    "|---|---|---|",
    ...Object.entries(ACTION).map(([k, p]) => `| \`${k}\` | ${p.type} | ${p.doc} |`),
    "",
    `## Icons`,
    "",
    "Used by `icon`, `button.icon`, nav items and `tabbar`:",
    "",
    ICON_NAMES.map((n) => `\`${n}\``).join(" · "),
    "",
    "Brand names and logos are trademarks of their owners. Open Ink's brand icons are simplified sketches for wireframes only and do not imply endorsement. Use each brand's official assets in production.",
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
