import { $$, config, redraw } from "./dom.js";

const STORAGE_KEY = "sketchframe_lang";

/** Text lives in <span data-l="xx"> (shown by CSS). Attributes live in data-<attr>-<lang> and are swapped here. */
export function setLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode */ }
  $$("[data-lang]").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
  $$("*").forEach((el) => {
    for (const a of el.attributes) {
      const m = a.name.match(/^data-(.+)-([a-z]{2,3})$/i);
      if (m && m[2] === lang && m[1] !== "lang") el.setAttribute(m[1], a.value);
    }
  });
  redraw();
}

export function initI18n() {
  if (!config.languages.length) return;
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* private mode */ }
  setLang(config.languages.includes(saved) ? saved : config.languages[0]);
}
