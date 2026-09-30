import { ACTION } from "./shared.js";

/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "stack",
    group: "Layout",
    summary: "Vertical stack of blocks.",
    children: true,
    props: { center: { type: "boolean", doc: "Center the children horizontally." } },
    render: (b, c) => `<div class="stack${b.center ? " center-items" : ""}">${c.kids(b)}</div>`,
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
      center: { type: "boolean", doc: "Center the content horizontally." },
      elevation: { type: "number", doc: "Shadow layers, 1 to 5 (default 1)." },
      ...ACTION,
    },
    render: (b, c) =>
      `<wired-card elevation="${+b.elevation || 1}"${c.act(b)} class="card${b.go ? " click" : ""}${b.dash ? " dash" : ""}">${
        b.title ? `<h3>${c.tx(b.title)}</h3>` : ""
      }<div class="stack${b.center ? " center-items" : ""}">${c.kids(b)}</div></wired-card>`,
  },
  {
    name: "accordion",
    group: "Layout",
    summary: "Collapsible sections (FAQ, filters, settings groups).",
    props: {
      items: { type: "sections", doc: "List of `{ label, children }`.", required: true },
      open: { type: "number", doc: "Index of the section open at first (default: all closed)." },
    },
    nested: (b) => (b.items || []).flatMap((t, i) => (t?.children || []).map((x, j) => [`.items[${i}].children[${j}]`, x])),
    render: (b, c) =>
      `<div class="accordion">${(b.items || [])
        .map(
          (s, i) =>
            `<details${b.open === i ? " open" : ""}><summary>${c.tx(s.label)}<sf-icon name="chevron-down" size="18"></sf-icon></summary><div class="stack">${(s.children || [])
              .map((x) => c.block(x))
              .join("")}</div></details>`
        )
        .join("")}</div>`,
  },
  {
    name: "device",
    group: "Layout",
    summary: "Wrap screens in a phone, tablet or browser frame. Ideal for mobile-app and responsive sketches.",
    children: true,
    props: {
      kind: { type: "string", enum: ["phone", "tablet", "browser"], doc: "Frame type (default `phone`)." },
      title: { type: "text", doc: "Address shown in the browser bar." },
    },
    render: (b, c) => {
      const kind = b.kind || "phone";
      const bar =
        kind === "browser"
          ? `<div class="device-bar"><i></i><i></i><i></i><span>${c.tx(b.title || "example.com")}</span></div>`
          : kind === "phone"
            ? `<div class="device-notch"></div>`
            : "";
      return `<div class="device device-${kind}"><wired-card elevation="2" class="device-frame">${bar}<div class="stack device-body">${c.kids(b)}</div></wired-card></div>`;
    },
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
