import { createContext, esc } from "./context.js";
import { colorVar, isPreset } from "../themes.js";

const DEV_RELOAD = `<script>(function(){var v;setInterval(function(){fetch("/__version").then(function(r){return r.text()}).then(function(t){if(v&&t!==v)location.reload();v=t}).catch(function(){})},600)})()</script>`;

/**
 * Render a validated spec to a complete HTML document.
 * @param {object} spec
 * @param {{ dev?: boolean }} [opts]  dev = inject the live-reload poller
 */
export function renderPage(spec, { dev = false } = {}) {
  const c = createContext(spec);
  const langs = c.langs;
  const first = spec.screens[0].id;

  const navSets = Array.isArray(spec.nav) ? { default: spec.nav } : spec.nav || { default: [] };
  const nav = Object.entries(navSets)
    .map(([key, items]) => `<nav data-nav="${esc(key)}" hidden>${items.map((n) => `<wired-button${c.act(n)}>${c.inner(n)}</wired-button>`).join("")}</nav>`)
    .join("");

  const screens = spec.screens
    .map(
      (s) => `<section class="screen" id="${esc(s.id)}" data-title="${esc(c.plain(s.title) || s.id)}" data-nav="${esc(s.nav || "default")}"${s.width ? ` data-width="${esc(s.width)}"` : ""}${s.tone ? ` data-tone="${esc(s.tone)}"` : ""}>
<p class="screen-title">${c.tx(s.title || s.id)}</p>
${s.note ? `<div class="note">${c.tx(s.note)}</div>` : ""}
${(s.blocks || []).map((b) => c.block(b)).join("\n")}
</section>`
    )
    .join("\n");

  // global modals live outside the screens, so any screen can open them
  const modals = (spec.modals || []).map((m) => c.block({ ...m, type: "modal" })).join("\n");

  const langBar = langs.length ? `<div class="lang">${langs.map((l) => `<wired-button data-lang="${esc(l)}">${esc(l.toUpperCase())}</wired-button>`).join("")}</div>` : "";
  const langCss = langs.length
    ? `<style>[data-l]{display:none}${langs.map((l) => `html[lang="${esc(l)}"] [data-l="${esc(l)}"]{display:inline}`).join("")}</style>`
    : "";

  // theme: a built-in preset (theme-<name>.css is copied by the build) or the project's own .css file
  const themeLink = spec.theme && spec.theme !== "sketch" ? `<link rel="stylesheet" href="${esc(isPreset(spec.theme) ? `theme-${spec.theme}.css` : spec.theme)}" />` : "";
  const colors = Object.entries(spec.colors || {});
  const colorCss = colors.length ? `<style>:root{${colors.map(([k, v]) => `${colorVar(k)}:${v}`).join(";")}}</style>` : "";

  return `<!DOCTYPE html>
<html lang="${esc(langs[0] || "en")}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(spec.name)} · wireframe</title>
<link rel="stylesheet" href="sketchframe.css" />
${themeLink}
${colorCss}
${langCss}
<script>window.SKETCHFRAME=${JSON.stringify({ languages: langs, first }).replace(/</g, "\\u003c")};</script>
<script src="sketchframe.js" defer></script>
${dev ? DEV_RELOAD : ""}
</head>
<body>
<div class="shell">
<header class="sf-bar">
<a class="brand" data-go="${esc(first)}">${esc(spec.name)}</a>
${nav}
${langBar}
<wired-button class="print-btn" onclick="window.print()">PDF</wired-button>
</header>
<main>
${screens}
</main>
${modals}
<footer class="muted center">${esc(spec.footer || "Wireframe · not the final design")}</footer>
</div>
<div class="toast" id="toast"></div>
</body>
</html>
`;
}
