import { ACTION } from "./shared.js";
import { ICON_NAMES } from "../../icons.js";

/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "icon",
    group: "Content",
    summary: "Hand-drawn icon.",
    props: {
      name: { type: "string", enum: ICON_NAMES, doc: "Icon name.", required: true },
      size: { type: "number", doc: "Size in px (default 22)." },
      filled: { type: "boolean", doc: "Solid instead of outline (heart, star, bookmark…)." },
    },
    render: (b, c) => c.icon(b.name, +b.size || 22, b.filled),
  },
  {
    name: "avatar",
    group: "Content",
    summary: "Round profile picture with an optional name and sub-line. Clickable.",
    props: {
      name: { type: "text", doc: "Bold name next to the picture." },
      sub: { type: "text", doc: "Smaller line under the name." },
      size: { type: "number", doc: "Picture size in px (default 44)." },
      ...ACTION,
    },
    render: (b, c) =>
      `<div class="avatar${b.go || b.open ? " click" : ""}"${c.act(b)}><oi-placeholder h="${+b.size || 44}" round></oi-placeholder>${
        b.name || b.sub ? `<div class="avatar-text">${b.name ? `<strong>${c.tx(b.name)}</strong>` : ""}${b.sub ? `<span class="muted">${c.tx(b.sub)}</span>` : ""}</div>` : ""
      }</div>`,
  },
  {
    name: "hero",
    group: "Content",
    summary: "Big headline block for landing pages. Put call-to-action buttons (or an image) in `children`.",
    children: true,
    props: {
      title: { type: "text", doc: "Headline.", required: true },
      text: { type: "text", doc: "Supporting sentence." },
      align: { type: "string", enum: ["left", "center"], doc: "Text alignment (default `center`)." },
    },
    render: (b, c) =>
      `<section class="hero${b.align === "left" ? " left" : ""}"><h1>${c.tx(b.title)}</h1>${b.text ? `<p class="lead">${c.tx(b.text)}</p>` : ""}${
        b.children?.length ? `<div class="stack hero-body">${c.kids(b)}</div>` : ""
      }</section>`,
  },
  {
    name: "stat",
    group: "Content",
    summary: "Number card for dashboards: label, big value and a change indicator.",
    props: {
      label: { type: "text", doc: "What is measured.", required: true },
      value: { type: "text", doc: "The number.", required: true },
      delta: { type: "text", doc: "Change, e.g. `+8%`." },
      trend: { type: "string", enum: ["up", "down", "flat"], doc: "Colours the change: `up` green, `down` orange, `flat` grey (default `up`)." },
    },
    render: (b, c) =>
      `<wired-card elevation="1" class="card stat"><div class="stack tight"><span class="muted">${c.tx(b.label)}</span><div class="stat-value">${c.tx(b.value)}</div>${
        b.delta ? `<span class="badge ${{ up: "on", down: "wait", flat: "off" }[b.trend || "up"]}">${c.tx(b.delta)}</span>` : ""
      }</div></wired-card>`,
  },
  {
    name: "rating",
    group: "Content",
    summary: "Star rating.",
    props: {
      value: { type: "number", doc: "Filled stars (default 4)." },
      max: { type: "number", doc: "Total stars (default 5)." },
      text: { type: "text", doc: "Text after the stars, e.g. `(128 reviews)`." },
    },
    render: (b, c) => {
      const max = +b.max || 5;
      const value = b.value ?? 4;
      return `<div class="row rating">${Array.from({ length: max }, (_, i) => c.icon("star", 18, i < value)).join("")}${
        b.text ? `<span class="muted">${c.tx(b.text)}</span>` : ""
      }</div>`;
    },
  },
  {
    name: "link",
    group: "Content",
    summary: "Underlined text link.",
    props: { text: { type: "text", doc: "Link text.", required: true }, ...ACTION },
    render: (b, c) => `<a class="oi-link"${c.act(b)}>${c.tx(b.text)}</a>`,
  },
];
