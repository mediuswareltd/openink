import { $$, redraw } from "./dom.js";

// Printable height of the @page in openink.css (A4 landscape less 10mm margins), in CSS pixels.
const PAGE_HEIGHT = (190 * 96) / 25.4;

/**
 * Lay the page out for print (every screen, one per page), shrink each screen that is taller than
 * one printed page so it is not split across two, and draw the wired-elements that have never been
 * visible. Runs on `beforeprint` (the PDF button, Ctrl+P) and from `openink export`.
 */
export function preparePrint() {
  document.documentElement.classList.add("oi-print");
  const screens = $$(".screen");
  screens.forEach(unzoom);

  // The header shares the first screen's page and the footer the last one's, so their height comes
  // off that page's budget.
  const docBottom = document.documentElement.scrollHeight;
  const zooms = screens.map((s, i) => {
    const r = s.getBoundingClientRect();
    const top = r.top + scrollY;
    const fixed = (i === 0 ? top : 0) + (i === screens.length - 1 ? docBottom - (top + r.height) : 0);
    const room = (PAGE_HEIGHT - fixed) * 0.97; // a little slack for rounding and collapsed margins
    return { zoom: r.height > room ? Math.max(room / r.height, 0.3) : 1, width: r.width };
  });

  // Draw everything now: the browser prints straight after this returns, before a ResizeObserver
  // would draw the placeholders and charts on screens that were hidden.
  // Draw before zooming: wired-elements size their sketch from the zoomed box, and the zoom then
  // shrinks the sketch a second time. Keep the screen's unzoomed width so its layout (and so the
  // sketches) only scales, and record the zoomed box as the size last drawn, so a resize
  // (wired-card watches its own) does not redraw at that size.
  $$("*").forEach((el) => (el.wiredRender ? el.wiredRender(true) : el.draw?.()));
  screens.forEach((s, i) => {
    const { zoom, width } = zooms[i];
    if (zoom === 1) return;
    Object.assign(s.style, { zoom: String(zoom), width: `${width}px`, marginInline: "auto" });
    $$("*", s).forEach((el) => el.canvasSize && el.lastSize && (el.lastSize = el.canvasSize()));
  });
}

/** Undo preparePrint and redraw the screen that is showing. */
export function endPrint() {
  document.documentElement.classList.remove("oi-print");
  $$(".screen").forEach(unzoom);
  redraw();
}

const unzoom = (s) => Object.assign(s.style, { zoom: "", width: "", marginInline: "" });

export function initPrint() {
  window.addEventListener("beforeprint", preparePrint);
  window.addEventListener("afterprint", endPrint);
  window.openink = { ...window.openink, preparePrint, endPrint };
}
