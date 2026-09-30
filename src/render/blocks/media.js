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
      `<oi-placeholder h="${+b.h || 140}" cross${b.label ? ` label="${c.esc(c.plain(b.label))}"` : ""}${b.round ? " round" : ""}></oi-placeholder>`,
  },
  {
    name: "map",
    group: "Media",
    summary: "Map placeholder with a pin.",
    props: { h: size, label },
    render: (b, c) => `<oi-placeholder h="${+b.h || 160}" label="${c.esc(c.plain(b.label) || "Map")}" pin></oi-placeholder>`,
  },
  {
    name: "box",
    group: "Media",
    summary: "Generic hand-drawn box, for ads, embeds, anything else.",
    props: { h: size, label },
    render: (b, c) => `<oi-placeholder h="${+b.h || 80}" label="${c.esc(c.plain(b.label))}"></oi-placeholder>`,
  },
  {
    name: "video",
    group: "Media",
    summary: "Video placeholder with a play button.",
    props: { h: size, label },
    render: (b, c) => `<oi-placeholder h="${+b.h || 220}" play${b.label ? ` label="${c.esc(c.plain(b.label))}"` : ""}></oi-placeholder>`,
  },
  {
    name: "carousel",
    group: "Media",
    summary: "Swipeable gallery: image placeholder with arrows and page dots.",
    props: { h: size, label, count: { type: "number", doc: "Number of slides shown as dots (default 4)." } },
    render: (b, c) =>
      `<oi-placeholder h="${+b.h || 260}" cross dots="${+b.count || 4}"${b.label ? ` label="${c.esc(c.plain(b.label))}"` : ""}></oi-placeholder>`,
  },
  {
    name: "dropzone",
    group: "Media",
    summary: "Dashed upload area with an arrow.",
    props: { h: size, label },
    render: (b, c) => `<oi-placeholder h="${+b.h || 140}" upload label="${c.esc(c.plain(b.label) || "Drop files here")}"></oi-placeholder>`,
  },
  {
    name: "chart",
    group: "Media",
    summary: "Hand-drawn chart with sample data. It shows where a chart goes and what kind it is.",
    props: {
      kind: { type: "string", enum: ["line", "area", "bar", "pie", "donut"], doc: "Chart type (default `line`)." },
      h: size,
      values: { type: "number[]", doc: "Your own data points. Leave out for sample data." },
      label: { type: "text", doc: "Caption in the corner." },
    },
    render: (b, c) =>
      `<oi-chart kind="${c.esc(b.kind || "line")}" h="${+b.h || 200}"${b.values ? ` values="${c.esc(b.values.join(","))}"` : ""}${
        b.label ? ` label="${c.esc(c.plain(b.label))}"` : ""
      }></oi-chart>`,
  },
];
