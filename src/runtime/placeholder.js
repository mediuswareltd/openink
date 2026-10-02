import rough from "roughjs/bundled/rough.esm.js";

/**
 * <oi-placeholder h="160" label="Photo" cross pin round play dots="4" upload>
 * A hand-drawn box (RoughJS) used for images, maps, video, galleries, uploads.
 * Colours come from CSS variables, so a `tone` on a parent block recolours it:
 *   --oi-stroke (outline), --oi-fill (hatch fill), --accent (pin / play button)
 */
class Placeholder extends HTMLElement {
  connectedCallback() {
    const h = +this.getAttribute("h") || 120;
    // A round placeholder (avatar) is square and must have a width of its own to sit in a flex row.
    const width = this.hasAttribute("round") ? `width:${h}px;flex:none;` : "";
    this.style.cssText += `display:block;position:relative;height:${h}px;--oi-w:${Math.round((h * 4) / 3)}px;${width}`;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
    this.prepend(svg);

    const draw = () => {
      const w = this.clientWidth;
      if (!w) return;
      svg.replaceChildren();
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const css = getComputedStyle(this);
      const stroke = css.getPropertyValue("--oi-stroke").trim() || "#8a8a85";
      const fill = css.getPropertyValue("--oi-fill").trim() || "#f3f1ea";
      const accent = css.getPropertyValue("--accent").trim() || "#c2410c";
      const paper = css.getPropertyValue("--paper").trim() || "#fdfcf8";
      const rc = rough.svg(svg);
      const ink = { roughness: 1.6, stroke, seed: 7 };
      const soft = { roughness: 1.6, stroke: css.getPropertyValue("--oi-line").trim() || "#cfcfc8", seed: 3 };
      const solid = { ...ink, stroke: accent, fill: accent, fillStyle: "solid" };

      if (this.hasAttribute("round")) {
        svg.appendChild(rc.circle(w / 2, h / 2, Math.min(w, h) - 6, { ...ink, fill, fillStyle: "solid" }));
      } else {
        const dashed = this.hasAttribute("upload") ? { strokeLineDash: [8, 6] } : {};
        svg.appendChild(rc.rectangle(3, 3, w - 6, h - 6, { ...ink, ...dashed, fill, fillStyle: "hachure", hachureGap: 12, fillWeight: 0.6 }));
        if (this.hasAttribute("cross")) {
          svg.appendChild(rc.line(3, 3, w - 3, h - 3, soft));
          svg.appendChild(rc.line(w - 3, 3, 3, h - 3, soft));
        }
      }
      if (this.hasAttribute("pin")) {
        const y = h * 0.38;
        svg.appendChild(rc.circle(w / 2, y, 22, solid));
        svg.appendChild(rc.line(w / 2, y + 10, w / 2, y + 24, { ...ink, stroke: accent, strokeWidth: 2 }));
      }
      if (this.hasAttribute("play")) {
        const cy = h * 0.42;
        svg.appendChild(rc.circle(w / 2, cy, Math.min(56, h * 0.4), { ...ink, stroke: accent, fill: paper, fillStyle: "solid", strokeWidth: 2 }));
        svg.appendChild(rc.polygon([[w / 2 - 7, cy - 10], [w / 2 - 7, cy + 10], [w / 2 + 11, cy]], solid));
      }
      if (this.hasAttribute("upload")) {
        const cy = h * 0.38;
        svg.appendChild(rc.line(w / 2, cy + 14, w / 2, cy - 14, { ...ink, strokeWidth: 2.2 }));
        svg.appendChild(rc.linearPath([[w / 2 - 11, cy - 3], [w / 2, cy - 15], [w / 2 + 11, cy - 3]], { ...ink, strokeWidth: 2.2 }));
      }
      const dots = +this.getAttribute("dots");
      if (dots > 0) {
        const y = h - 16;
        for (let i = 0; i < dots; i++) {
          const x = w / 2 + (i - (dots - 1) / 2) * 16;
          svg.appendChild(rc.circle(x, y, 7, i === 0 ? { ...ink, stroke: accent, fill: accent, fillStyle: "solid" } : { ...ink, fill: paper, fillStyle: "solid" }));
        }
        for (const dir of [-1, 1]) {
          const x = dir < 0 ? 22 : w - 22;
          svg.appendChild(rc.circle(x, h / 2, 26, { ...ink, fill: paper, fillStyle: "solid" }));
          svg.appendChild(rc.linearPath([[x - dir * 3, h / 2 - 6], [x + dir * 3, h / 2], [x - dir * 3, h / 2 + 6]], { ...ink, strokeWidth: 1.8 }));
        }
      }
    };

    this.draw = draw; // print draws every screen at once, before a ResizeObserver would fire
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

if (!customElements.get("oi-placeholder")) customElements.define("oi-placeholder", Placeholder);
