---
layout: home
title: Open Ink
titleTemplate: Hand-drawn wireframes from YAML

hero:
  name: Open Ink
  text: Describe screens in YAML. Get a clickable wireframe.
  tagline: Static HTML you can host or open from disk, plus PDF and PNG export. It looks like a sketch, so nobody mistakes it for the final design.
  image:
    src: /hero.png
    alt: A SaaS dashboard wireframe drawn by Open Ink
  actions:
    - theme: brand
      text: Get started
      link: /getting-started
    - theme: alt
      text: See live examples
      link: /examples
    - theme: alt
      text: GitHub
      link: https://github.com/mediuswareltd/openink

features:
  - title: Fast to write and change
    details: A screen is a dozen lines of YAML, not a page of HTML or an hour in a design tool.
  - title: Clickable
    details: Buttons, cards, table rows, tab bars and nav items link between screens. Forms, tabs, accordions, modals and toggles respond.
  - title: Looks like a sketch on purpose
    details: Feedback goes to structure and flow, not fonts and pixels.
  - title: Colour when you want it
    details: Themes for a whole project, a tone for one card, a tinted fill for one panel.
  - title: Safe for AI to write
    details: Generate a spec with an assistant. validate catches typos, dead links and bad icon names with exact locations.
  - title: Easy to share
    details: One static folder, one PDF, or one PNG per screen. Multi-language prototypes are built in.
---

<div class="vp-doc" style="max-width: 1152px; margin: 64px auto 0; padding: 0 24px">

## Write this. Click through that.

The preview is the real output of the YAML next to it. No design tool, no HTML. One line picks the theme, and `tone` colours any part.

<div class="oi-split oi-zoom">
<div class="oi-split-code">

<<< @/snippets/dashboard/spec.yaml

</div>
<div class="oi-split-preview">
  <div class="oi-split-bar"><span></span><span></span><span></span><em>Click <b>Invite</b>, <b>Export</b> or <b>Share</b>.</em><a href="/openink/demos/dashboard/index.html" target="_blank">Open ↗</a></div>
  <div class="oi-frame"><iframe src="/openink/demos/dashboard/index.html" title="Live preview: Dashboard" scrolling="no" @load="fit"></iframe></div>
</div>
</div>

More screens, themes and devices: see the [live examples](/examples).

## Try it

```bash
npx openink init my-wireframes
cd my-wireframes
npx openink dev                 # live preview at http://localhost:3000
```

Requires Node 20+. Read the [getting started guide](/getting-started) next, or click through the [live examples](/examples).

</div>

<script setup>
import { onMounted } from "vue";

// Grow the preview to the height of its page, so there is no scrollbar inside it. It is drawn at
// 160% and scaled down (.oi-zoom), so its box is 0.625 of the page height.
function fit(event) {
  const frame = event.target;
  const doc = frame.contentDocument;
  if (!doc?.body) return;
  const zoom = frame.closest(".oi-zoom") ? 0.625 : 1;
  const resize = () => {
    const height = Math.ceil(doc.body.getBoundingClientRect().height);
    frame.style.height = height + "px";
    frame.parentElement.style.height = Math.ceil(height * zoom) + "px";
  };
  // If the code beside it is taller, fill the rest of the box with the page colour.
  frame.parentElement.style.background = frame.contentWindow.getComputedStyle(doc.body).backgroundColor;
  new frame.contentWindow.ResizeObserver(resize).observe(doc.body);
  resize();
}

// The preview can finish loading before the page is interactive.
onMounted(() => {
  for (const frame of document.querySelectorAll(".oi-frame iframe")) {
    if (frame.contentDocument?.readyState === "complete" && frame.src) fit({ target: frame });
  }
});
</script>

<style>
.oi-split {
  display: grid;
  grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
  align-items: stretch;
  gap: 20px;
  margin: 0 0 24px;
}
.oi-split-code { --vp-code-font-size: 12.5px; }
.oi-split-code div[class*="language-"] { margin: 0 !important; height: 100%; }
.oi-split-preview {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.oi-split-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 13px;
}
.oi-split-bar span { width: 10px; height: 10px; border-radius: 50%; background: var(--vp-c-divider); }
.oi-split-bar em { margin-left: 8px; font-style: normal; color: var(--vp-c-text-2); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.oi-split-bar a { margin-left: auto; white-space: nowrap; }
.oi-frame { flex: 1 0 auto; height: 420px; overflow: hidden; }
.oi-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
/* Draw the page at 160% and scale it down, so grids keep their columns. */
.oi-zoom .oi-frame iframe { width: 160%; transform: scale(0.625); transform-origin: 0 0; }
@media (max-width: 960px) {
  .oi-split { grid-template-columns: minmax(0, 1fr); }
  .oi-split-bar em { display: none; }
}
</style>
