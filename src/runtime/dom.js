export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

export const config = window.OPENINK || { languages: [], first: "" };

/**
 * wired-elements only draw when their size changes, and they draw at 0x0 while hidden.
 * Call this after anything becomes visible or is resized so they re-render.
 */
export function redraw() {
  requestAnimationFrame(() =>
    $$("*").forEach((el) => {
      if (typeof el.wiredRender === "function" && el.offsetParent !== null) el.wiredRender();
    })
  );
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(redraw, 150);
});
