import "wired-elements";
import "./placeholder.js";
import { $$, redraw } from "./dom.js";
import { go, toast, initNavigation } from "./navigation.js";
import { setLang, initI18n } from "./i18n.js";

function select(buttons, active) {
  buttons.forEach((b) => {
    b.classList.toggle("on", b === active);
    b.setAttribute("elevation", b === active ? 3 : 1);
  });
}

document.addEventListener("click", (e) => {
  const lang = e.target.closest("[data-lang]");
  if (lang) return setLang(lang.dataset.lang);

  const chip = e.target.closest("[data-chips] .chip");
  if (chip) {
    select($$(".chip", chip.parentElement), chip);
    toast("Results updated");
  }

  const tab = e.target.closest("[data-tabs] .tab");
  if (tab) {
    const root = tab.closest("[data-tabs]");
    select($$(".tab", root), tab);
    $$(".tab-panel", root).forEach((p) => p.classList.toggle("on", p.dataset.panel === tab.dataset.tab));
    redraw();
  }

  const target = e.target.closest("[data-go]");
  if (target) go(target.dataset.go);
  const message = e.target.closest("[data-toast]");
  if (message) toast(message.dataset.toast);
});

window.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initNavigation();
});
