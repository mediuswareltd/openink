const label = { type: "text", doc: "Label shown above the control." };
const placeholder = { type: "text", doc: "Placeholder text." };

/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "input",
    group: "Forms",
    summary: "Single-line text field.",
    props: {
      label,
      placeholder,
      value: { type: "text", doc: "Pre-filled value." },
      inputType: { type: "string", doc: "HTML input type: `text`, `email`, `password`, `number`…" },
      disabled: { type: "boolean", doc: "Grey out the field." },
    },
    render: (b, c) =>
      `<div class="field">${c.label(b)}<wired-input type="${c.esc(b.inputType || "text")}"${c.attr("placeholder", b.placeholder)}${
        b.value != null ? ` value="${c.esc(c.plain(b.value))}"` : ""
      }${b.disabled ? " disabled" : ""}></wired-input></div>`,
  },
  {
    name: "textarea",
    group: "Forms",
    summary: "Multi-line text field.",
    props: { label, placeholder, rows: { type: "number", doc: "Visible rows (default 3)." } },
    render: (b, c) =>
      `<div class="field">${c.label(b)}<wired-textarea rows="${+b.rows || 3}"${c.attr("placeholder", b.placeholder)}></wired-textarea></div>`,
  },
  {
    name: "select",
    group: "Forms",
    summary: "Dropdown.",
    props: {
      label,
      options: { type: "text[]", doc: "Choices.", required: true },
      selected: { type: "number", doc: "Index of the pre-selected option (default 0)." },
    },
    render: (b, c) =>
      `<div class="field">${c.label(b)}<wired-combo selected="${+b.selected || 0}">${(b.options || [])
        .map((o, i) => `<wired-item value="${i}">${c.tx(o)}</wired-item>`)
        .join("")}</wired-combo></div>`,
  },
  {
    name: "checkbox",
    group: "Forms",
    summary: "Checkbox with a label.",
    props: { label: { ...label, required: true }, checked: { type: "boolean", doc: "Start ticked." } },
    render: (b, c) => `<wired-checkbox${b.checked ? " checked" : ""}>${c.tx(b.label)}</wired-checkbox>`,
  },
  {
    name: "toggle",
    group: "Forms",
    summary: "On/off switch with a label.",
    props: { label: { ...label, required: true }, checked: { type: "boolean", doc: "Start switched on." } },
    render: (b, c) => `<div class="row">${c.tx(b.label)}<wired-toggle${b.checked ? " checked" : ""}></wired-toggle></div>`,
  },
  {
    name: "radio",
    group: "Forms",
    summary: "Radio group.",
    props: {
      label,
      options: { type: "text[]", doc: "Choices.", required: true },
      selected: { type: "number", doc: "Index of the pre-selected option (default 0)." },
    },
    render: (b, c) =>
      `<div class="field">${c.label(b)}<wired-radio-group selected="${+b.selected || 0}">${(b.options || [])
        .map((o, i) => `<wired-radio name="${i}">${c.tx(o)}</wired-radio>`)
        .join("")}</wired-radio-group></div>`,
  },
  {
    name: "slider",
    group: "Forms",
    summary: "Range slider.",
    props: { label, value: { type: "number", doc: "Start position, 0 to 100 (default 30)." } },
    render: (b, c) => `<div class="field">${c.label(b)}<wired-slider value="${+b.value || 30}"></wired-slider></div>`,
  },
];
