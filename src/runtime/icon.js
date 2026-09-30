import rough from "roughjs/bundled/rough.esm.js";
import { ICONS } from "../icons.js";

/**
 * <sf-icon name="heart" size="22" filled>
 * Hand-drawn icon (RoughJS). Inherits the surrounding text colour.
 */
class Icon extends HTMLElement {
  connectedCallback() {
    const paths = ICONS[this.getAttribute("name")];
    if (!paths) return;
    const size = +this.getAttribute("size") || 22;
    this.style.cssText += `display:inline-block;vertical-align:middle;width:${size}px;height:${size}px;line-height:0`;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    const rc = rough.svg(svg);
    const filled = this.hasAttribute("filled");
    for (const d of paths) {
      svg.appendChild(rc.path(d, { roughness: 0.9, strokeWidth: 1.6, stroke: "currentColor", seed: 11, ...(filled ? { fill: "currentColor", fillStyle: "solid" } : {}) }));
    }
    this.replaceChildren(svg);
  }
}

if (!customElements.get("sf-icon")) customElements.define("sf-icon", Icon);
