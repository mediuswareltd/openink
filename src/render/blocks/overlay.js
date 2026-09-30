/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "modal",
    group: "Overlays",
    summary: "Dialog that opens over the screen when a button, card or link has `open: <id>`. Close with a `close: true` button, the X, or a click outside.",
    children: true,
    props: {
      id: { type: "string", doc: "Unique id; other blocks use it in `open:`.", required: true },
      title: { type: "text", doc: "Heading of the dialog." },
      width: { type: "string", enum: ["narrow", "medium", "wide"], doc: "Dialog width (default `medium`)." },
    },
    render: (b, c) =>
      `<div class="modal" data-modal="${c.esc(b.id)}" data-width="${c.esc(b.width || "medium")}"><div class="modal-backdrop" data-close></div><wired-card elevation="3" class="modal-card"><div class="row between"><h3>${
        b.title ? c.tx(b.title) : ""
      }</h3><wired-button data-close>${c.icon("close")}</wired-button></div><div class="stack">${c.kids(b)}</div></wired-card></div>`,
  },
];
