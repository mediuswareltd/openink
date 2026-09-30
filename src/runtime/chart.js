import rough from "roughjs/bundled/rough.esm.js";

const SAMPLE = { line: [3, 5, 4, 7, 6, 9, 8], area: [3, 5, 4, 7, 6, 9, 8], bar: [5, 8, 3, 9, 6, 7], pie: [40, 30, 20, 10], donut: [40, 30, 20, 10] };

/**
 * <sf-chart kind="line|area|bar|pie|donut" h="200" values="3,5,4" label="Visitors">
 * A hand-drawn chart with made-up data: it shows *where* a chart goes and what kind it is.
 */
class Chart extends HTMLElement {
  connectedCallback() {
    const h = +this.getAttribute("h") || 200;
    const kind = this.getAttribute("kind") || "line";
    const values = (this.getAttribute("values") || "").split(",").map((s) => s.trim()).filter(Boolean).map(Number).filter(Number.isFinite);
    const data = values.length ? values : SAMPLE[kind] || SAMPLE.line;
    this.style.cssText += `display:block;position:relative;height:${h}px`;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
    this.prepend(svg);

    const draw = () => {
      const w = this.clientWidth;
      if (!w) return;
      svg.replaceChildren();
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const css = getComputedStyle(this);
      const ink = css.getPropertyValue("--sf-stroke").trim() || "#8a8a85";
      const tone = css.getPropertyValue("--sf-chart").trim() || css.getPropertyValue("--accent").trim() || "#c2410c";
      const rc = rough.svg(svg);
      const line = { roughness: 1.4, stroke: ink, seed: 5 };
      const max = Math.max(...data, 1);
      const pad = { l: 34, r: 12, t: 14, b: 26 };
      const cw = w - pad.l - pad.r;
      const ch = h - pad.t - pad.b;

      if (kind === "pie" || kind === "donut") {
        const r = Math.min(w, h) / 2 - 8;
        const cx = w / 2, cy = h / 2;
        const total = data.reduce((a, b) => a + b, 0) || 1;
        let a0 = -Math.PI / 2;
        const shades = [tone, ink, "#cfcfc8", "#e7e5dc", "#b8b5a8"];
        data.forEach((v, i) => {
          const span = (Math.max(v, 0) / total) * Math.PI * 2;
          const fill = { ...line, fill: shades[i % shades.length], fillStyle: i === 0 ? "solid" : "hachure", hachureGap: 6, fillWeight: 1 };
          // RoughJS never returns for a zero-length arc, so skip empty slices and draw a whole circle as a circle
          if (span >= Math.PI * 2 - 0.001) svg.appendChild(rc.circle(cx, cy, r * 2, fill));
          else if (span > 0.01) svg.appendChild(rc.arc(cx, cy, r * 2, r * 2, a0, a0 + span, true, fill));
          a0 += span;
        });
        if (kind === "donut") svg.appendChild(rc.circle(cx, cy, r, { ...line, fill: css.getPropertyValue("--paper").trim() || "#fdfcf8", fillStyle: "solid" }));
        return;
      }

      // axes
      svg.appendChild(rc.line(pad.l, pad.t, pad.l, pad.t + ch, line));
      svg.appendChild(rc.line(pad.l, pad.t + ch, pad.l + cw, pad.t + ch, line));
      for (let i = 1; i <= 3; i++) svg.appendChild(rc.line(pad.l, pad.t + (ch * i) / 4, pad.l + cw, pad.t + (ch * i) / 4, { ...line, stroke: "#d8d6cc", roughness: 0.8 }));

      if (kind === "bar") {
        const bw = cw / data.length;
        data.forEach((v, i) => {
          const bh = (v / max) * ch;
          svg.appendChild(rc.rectangle(pad.l + i * bw + bw * 0.18, pad.t + ch - bh, bw * 0.64, bh, { ...line, stroke: tone, fill: tone, fillStyle: "hachure", hachureGap: 5, fillWeight: 1.2 }));
        });
      } else {
        const pts = data.map((v, i) => [pad.l + (i / Math.max(data.length - 1, 1)) * cw, pad.t + ch - (v / max) * ch]);
        if (kind === "area") svg.appendChild(rc.polygon([[pts[0][0], pad.t + ch], ...pts, [pts.at(-1)[0], pad.t + ch]], { roughness: 1, stroke: "none", fill: tone, fillStyle: "hachure", hachureGap: 7, fillWeight: 0.8, seed: 2 }));
        svg.appendChild(rc.linearPath(pts, { ...line, stroke: tone, strokeWidth: 2.2 }));
        pts.forEach(([x, y]) => svg.appendChild(rc.circle(x, y, 6, { ...line, stroke: tone, fill: tone, fillStyle: "solid" })));
      }
    };

    draw();
    new ResizeObserver(draw).observe(this);
    const label = this.getAttribute("label");
    if (label) {
      const span = document.createElement("span");
      span.className = "ph-label ph-corner";
      span.textContent = label;
      this.appendChild(span);
    }
  }
}

if (!customElements.get("sf-chart")) customElements.define("sf-chart", Chart);
