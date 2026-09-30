import "wired-elements";
import "./placeholder.js";
import "./icon.js";
import "./chart.js";
import { $$, redraw } from "./dom.js";
import { go, toast, initNavigation } from "./navigation.js";
import { setLang, initI18n } from "./i18n.js";

function select(buttons, active) {
  buttons.forEach((b) => {
    b.classList.toggle("on", b === active);
    b.setAttribute("elevation", b === active ? 3 : 1);
  });
}

const closeModals = () => $$(".modal.on").forEach((m) => m.classList.remove("on"));

document.addEventListener("click", (e) => {
  const lang = e.target.closest("[data-lang]");
  if (lang) return setLang(lang.dataset.lang);

  // modals: [data-open="id"] opens <div data-modal="id">; [data-close] (button, X, backdrop) closes
  if (e.target.closest("[data-close]")) closeModals();
  const opener = e.target.closest("[data-open]");
  if (opener) {
    closeModals();
    document.querySelector(`.modal[data-modal="${CSS.escape(opener.dataset.open)}"]`)?.classList.add("on");
    redraw();
  }

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

  const item = e.target.closest(".tabbar .tab-item");
  if (item) select($$(".tab-item", item.parentElement), item);

  const target = e.target.closest("[data-go]");
  if (target) {
    closeModals();
    go(target.dataset.go);
  }
  const message = e.target.closest("[data-toast]");
  if (message) toast(message.dataset.toast);
});

document.addEventListener("keydown", (e) => e.key === "Escape" && closeModals());
// <details> content is hidden until opened, so wired-elements inside it have never been drawn
document.addEventListener("toggle", (e) => e.target.tagName === "DETAILS" && redraw(), true);

window.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initNavigation();
});
