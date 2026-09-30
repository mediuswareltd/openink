/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "alert",
    group: "Feedback",
    summary: "Banner for information, success, warnings and errors.",
    props: {
      text: { type: "text", doc: "Message.", required: true },
      title: { type: "text", doc: "Bold first line." },
      kind: { type: "string", enum: ["info", "success", "warning", "error"], doc: "Type and colour (default `info`)." },
    },
    render: (b, c) => {
      const kind = b.kind || "info";
      const icon = { info: "info", success: "check", warning: "bell", error: "close" }[kind];
      return `<div class="alert alert-${kind}">${c.icon(icon, 22)}<div>${b.title ? `<strong>${c.tx(b.title)}</strong> ` : ""}${c.tx(b.text)}</div></div>`;
    },
  },
  {
    name: "progress",
    group: "Feedback",
    summary: "Progress bar.",
    props: {
      value: { type: "number", doc: "Percent complete, 0 to 100.", required: true },
      label: { type: "text", doc: "Caption above the bar." },
    },
    render: (b, c) =>
      `<div class="field">${c.label(b)}<wired-progress value="${Math.min(100, Math.max(0, +b.value || 0))}" percentage></wired-progress></div>`,
  },
];
