import { ACTION } from "./shared.js";

/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "button",
    group: "Actions",
    summary: "Button. Navigates with `go`, shows a message with `toast`, or both.",
    props: {
      label: { type: "text", doc: "Button text.", required: true },
      primary: { type: "boolean", doc: "Heavier border: the main action on the screen." },
      disabled: { type: "boolean", doc: "Grey out the button." },
      ...ACTION,
    },
    render: (b, c) =>
      `<wired-button elevation="${b.primary ? 3 : 1}"${c.act(b)}${b.disabled ? " disabled" : ""}>${c.tx(b.label)}</wired-button>`,
  },
  {
    name: "chips",
    group: "Actions",
    summary: "Filter pills. Clicking one selects it and shows a “Results updated” toast.",
    props: {
      options: { type: "text[]", doc: "Pill labels.", required: true },
      active: { type: "number", doc: "Index of the selected pill (default 0)." },
    },
    render: (b, c) => {
      const active = +b.active || 0;
      return `<div class="row chips" data-chips>${(b.options || [])
        .map((o, i) => `<wired-button class="chip${i === active ? " on" : ""}" elevation="${i === active ? 3 : 1}">${c.tx(o)}</wired-button>`)
        .join("")}</div>`;
    },
  },
  {
    name: "tabs",
    group: "Actions",
    summary: "Tab strip. Each tab has its own list of blocks.",
    props: { tabs: { type: "tabs", doc: "List of `{ label, children }`.", required: true } },
    nested: (b) => (b.tabs || []).flatMap((t, i) => (t?.children || []).map((x, j) => [`.tabs[${i}].children[${j}]`, x])),
    render: (b, c) => {
      const tabs = b.tabs || [];
      return `<div class="tabs" data-tabs><div class="row">${tabs
        .map((t, i) => `<wired-button class="tab${i === 0 ? " on" : ""}" data-tab="${i}" elevation="${i === 0 ? 3 : 1}">${c.tx(t.label)}</wired-button>`)
        .join("")}</div>${tabs
        .map((t, i) => `<div class="tab-panel${i === 0 ? " on" : ""}" data-panel="${i}"><div class="stack">${(t.children || []).map(c.block).join("")}</div></div>`)
        .join("")}</div>`;
    },
  },
  {
    name: "nextbar",
    group: "Actions",
    summary: "“Next →” strip at the bottom of a screen. Hidden in the PDF.",
    props: {
      label: { type: "text", doc: "Bold lead-in (default “Next →”)." },
      text: { type: "text", doc: "What happens next." },
      button: { type: "text", doc: "Button text (default “Continue →”)." },
      ...ACTION,
    },
    render: (b, c) =>
      `<div class="nextbar"><span><strong>${c.tx(b.label || "Next →")}</strong> ${c.tx(b.text)}</span><wired-button elevation="2"${c.act(b)}>${c.tx(
        b.button || "Continue →"
      )}</wired-button></div>`,
  },
];
