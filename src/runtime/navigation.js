import { $$, config, redraw } from "./dom.js";

/**
 * Show one screen (and the header nav set it asks for).
 * `remember: false` leaves the URL alone: a "#screen" written before the page has loaded makes the
 * browser scroll to it, and inside an iframe that scrolls the embedding page too.
 */
export function go(id, { remember = true } = {}) {
  const el = document.getElementById(id);
  if (!el || !el.classList.contains("screen")) return;
  $$(".screen").forEach((s) => s.classList.remove("on"));
  el.classList.add("on");
  $$("header nav").forEach((n) => (n.hidden = n.dataset.nav !== el.dataset.nav));
  document.title = el.dataset.title + " · " + document.title.split(" · ").pop();
  if (remember) history.replaceState(null, "", "#" + id);
  window.scrollTo({ top: 0 });
  redraw();
}

export function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

export function initNavigation() {
  window.addEventListener("hashchange", () => go(location.hash.slice(1)));
  // The start screen: the URL already says which one, or it is the first screen.
  go(location.hash.slice(1) || config.first, { remember: false });
}
