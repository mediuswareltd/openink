const heading = (level) => ({
  name: `h${level}`,
  group: "Text",
  summary: `Level ${level} heading.`,
  props: { text: { type: "text", doc: "Heading text.", required: true } },
  render: (b, c) => `<h${level}>${c.tx(b.text)}</h${level}>`,
});

/** @type {import("./index.js").BlockDef[]} */
export default [
  heading(1),
  heading(2),
  heading(3),
  {
    name: "text",
    group: "Text",
    summary: "Paragraph. A bare string in a `children` list is shorthand for this block.",
    props: {
      text: { type: "text", doc: "Paragraph text.", required: true },
      muted: { type: "boolean", doc: "Grey, smaller text." },
      bold: { type: "boolean", doc: "Bold text." },
    },
    render: (b, c) => `<p class="${b.muted ? "muted" : ""}${b.bold ? " bold" : ""}">${c.tx(b.text)}</p>`,
  },
  {
    name: "list",
    group: "Text",
    summary: "Bulleted list.",
    props: { items: { type: "text[]", doc: "List items.", required: true } },
    render: (b, c) => `<ul class="sf-list">${(b.items || []).map((i) => `<li>${c.tx(i)}</li>`).join("")}</ul>`,
  },
  {
    name: "note",
    group: "Text",
    summary: "Yellow sticky-note annotation. Use it for behaviour a sketch cannot show.",
    props: { text: { type: "text", doc: "Note text.", required: true } },
    render: (b, c) => `<div class="note">${c.tx(b.text)}</div>`,
  },
  {
    name: "badge",
    group: "Text",
    summary: "Small status pill.",
    props: {
      text: { type: "text", doc: "Badge text.", required: true },
      status: { type: "string", enum: ["on", "wait", "off"], doc: "Colour: `on` green, `wait` orange, `off` grey." },
    },
    render: (b, c) => `<span class="badge ${c.esc(b.status || "")}">${c.tx(b.text)}</span>`,
  },
];
