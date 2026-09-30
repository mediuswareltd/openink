/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "breadcrumb",
    group: "Navigation",
    summary: "Path to the current page. The last item is the current one.",
    props: { items: { type: "text[]", doc: "Path segments.", required: true } },
    render: (b, c) => {
      const items = b.items || [];
      return `<nav class="crumbs">${items
        .map((x, i) => `<span${i === items.length - 1 ? ' class="current"' : ""}>${c.tx(x)}</span>`)
        .join('<span class="sep">/</span>')}</nav>`;
    },
  },
  {
    name: "pagination",
    group: "Navigation",
    summary: "Previous / page numbers / next.",
    props: {
      pages: { type: "number", doc: "Number of pages (default 5)." },
      active: { type: "number", doc: "Current page, starting at 1 (default 1)." },
    },
    render: (b, c) => {
      const pages = +b.pages || 5;
      const active = +b.active || 1;
      return `<div class="row pagination"><wired-button data-toast="Previous page">${c.icon("arrow-left")}</wired-button><div class="row" data-chips>${Array.from(
        { length: pages },
        (_, i) => `<wired-button class="chip${i + 1 === active ? " on" : ""}" elevation="${i + 1 === active ? 3 : 1}">${i + 1}</wired-button>`
      ).join("")}</div><wired-button data-toast="Next page">${c.icon("arrow-right")}</wired-button></div>`;
    },
  },
  {
    name: "steps",
    group: "Navigation",
    summary: "Numbered progress through a multi-step flow (checkout, onboarding).",
    props: {
      items: { type: "text[]", doc: "Step names.", required: true },
      active: { type: "number", doc: "Index of the current step, starting at 0 (default 0)." },
    },
    render: (b, c) => {
      const active = +b.active || 0;
      return `<ol class="steps">${(b.items || [])
        .map((x, i) => `<li class="${i < active ? "done" : i === active ? "on" : ""}"><span class="dot">${i < active ? c.icon("check", 14) : i + 1}</span>${c.tx(x)}</li>`)
        .join("")}</ol>`;
    },
  },
  {
    name: "tabbar",
    group: "Navigation",
    summary: "Bottom tab bar of a mobile app: icons with small labels.",
    props: {
      items: { type: "links", doc: "List of `{ icon, label, go, toast, open }`.", required: true },
      active: { type: "number", doc: "Index of the highlighted item (default 0)." },
    },
    render: (b, c) => {
      const active = +b.active || 0;
      return `<div class="tabbar">${(b.items || [])
        .map(
          (i, n) =>
            `<wired-button class="tab-item${n === active ? " on" : ""}" elevation="${n === active ? 3 : 1}"${c.act(i)}>${
              i.icon ? c.icon(i.icon, 22, n === active) : ""
            }${i.label != null ? `<span class="tab-label">${c.tx(i.label)}</span>` : ""}</wired-button>`
        )
        .join("")}</div>`;
    },
  },
];
