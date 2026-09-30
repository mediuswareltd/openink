import { ACTION } from "./shared.js";

/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "stack",
    group: "Layout",
    summary: "Vertical stack of blocks.",
    children: true,
    props: {},
    render: (b, c) => `<div class="stack">${c.kids(b)}</div>`,
  },
  {
    name: "row",
    group: "Layout",
    summary: "Horizontal row that wraps on small screens.",
    children: true,
    props: {
      between: { type: "boolean", doc: "Push the first and last child to opposite ends." },
      center: { type: "boolean", doc: "Center the children." },
    },
    render: (b, c) => `<div class="row${b.between ? " between" : ""}${b.center ? " center" : ""}">${c.kids(b)}</div>`,
  },
  {
    name: "grid",
    group: "Layout",
    summary: "Equal-width columns. Collapses to one column on phones.",
    children: true,
    props: { cols: { type: "number", doc: "Number of columns (default 2)." } },
    render: (b, c) => `<div class="grid" style="--cols:${+b.cols || 2}">${c.kids(b)}</div>`,
  },
  {
    name: "card",
    group: "Layout",
    summary: "Hand-drawn box around related blocks. Clickable when `go` is set.",
    children: true,
    props: {
      title: { type: "text", doc: "Small heading at the top of the card." },
      dash: { type: "boolean", doc: "No fill (a lighter, secondary card)." },
      elevation: { type: "number", doc: "Shadow layers, 1 to 5 (default 1)." },
      ...ACTION,
    },
    render: (b, c) =>
      `<wired-card elevation="${+b.elevation || 1}"${c.act(b)} class="card${b.go ? " click" : ""}${b.dash ? " dash" : ""}">${
        b.title ? `<h3>${c.tx(b.title)}</h3>` : ""
      }<div class="stack">${c.kids(b)}</div></wired-card>`,
  },
  {
    name: "divider",
    group: "Layout",
    summary: "Hand-drawn horizontal line.",
    props: {},
    render: () => `<wired-divider></wired-divider>`,
  },
  {
    name: "spacer",
    group: "Layout",
    summary: "Empty vertical space.",
    props: { h: { type: "number", doc: "Height in px (default 16)." } },
    render: (b) => `<div style="height:${+b.h || 16}px"></div>`,
  },
];
