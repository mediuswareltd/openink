const size = { type: "number", doc: "Height in px." };
const label = { type: "text", doc: "Caption centered in the box." };

/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "image",
    group: "Media",
    summary: "Image placeholder: hand-drawn box with a cross. Use `round` for avatars.",
    props: { h: size, label, round: { type: "boolean", doc: "Draw a circle instead of a box." } },
    render: (b, c) =>
      `<sf-placeholder h="${+b.h || 140}" cross${b.label ? ` label="${c.esc(c.plain(b.label))}"` : ""}${b.round ? " round" : ""}></sf-placeholder>`,
  },
  {
    name: "map",
    group: "Media",
    summary: "Map placeholder with a pin.",
    props: { h: size, label },
    render: (b, c) => `<sf-placeholder h="${+b.h || 160}" label="${c.esc(c.plain(b.label) || "Map")}" pin></sf-placeholder>`,
  },
  {
    name: "box",
    group: "Media",
    summary: "Generic hand-drawn box, for charts, video, ads, anything else.",
    props: { h: size, label },
    render: (b, c) => `<sf-placeholder h="${+b.h || 80}" label="${c.esc(c.plain(b.label))}"></sf-placeholder>`,
  },
];
