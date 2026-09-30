import rough from "roughjs/bundled/rough.esm.js";

/**
 * <sf-placeholder h="160" label="Photo" cross pin round>
 * A hand-drawn box (RoughJS) used for images, maps and anything not worth drawing.
 */
class Placeholder extends HTMLElement {
  connectedCallback() {
    const h = +this.getAttribute("h") || 120;
    // A round placeholder (avatar) is square and must have a width of its own to sit in a flex row.
    const width = this.hasAttribute("round") ? `width:${h}px;flex:none;` : "";
    this.style.cssText += `display:block;position:relative;height:${h}px;${width}`;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
    this.prepend(svg);

    const draw = () => {
      const w = this.clientWidth;
      if (!w) return;
      svg.replaceChildren();
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const rc = rough.svg(svg);
      const ink = { roughness: 1.6, stroke: "#8a8a85", seed: 7 };
      const soft = { roughness: 1.6, stroke: "#cfcfc8", seed: 3 };

      if (this.hasAttribute("round")) {
        svg.appendChild(rc.circle(w / 2, h / 2, Math.min(w, h) - 6, ink));
      } else {
        svg.appendChild(rc.rectangle(3, 3, w - 6, h - 6, { ...ink, fill: "#f3f1ea", fillStyle: "hachure", hachureGap: 12, fillWeight: 0.6 }));
        if (this.hasAttribute("cross")) {
          svg.appendChild(rc.line(3, 3, w - 3, h - 3, soft));
          svg.appendChild(rc.line(w - 3, 3, 3, h - 3, soft));
        }
      }
      if (this.hasAttribute("pin")) {
        const y = h * 0.38;
        svg.appendChild(rc.circle(w / 2, y, 22, { ...ink, stroke: "#c2410c", fill: "#c2410c", fillStyle: "solid" }));
        svg.appendChild(rc.line(w / 2, y + 10, w / 2, y + 24, { ...ink, stroke: "#c2410c", strokeWidth: 2 }));
      }
    };

    draw();
    new ResizeObserver(draw).observe(this);

    const label = this.getAttribute("label");
    if (label) {
      const span = document.createElement("span");
      span.className = "ph-label";
      span.textContent = label;
      this.appendChild(span);
    }
  }
}

if (!customElements.get("sf-placeholder")) customElements.define("sf-placeholder", Placeholder);
