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

Every preview below is the real, clickable output of the YAML next to it. No design tool, no HTML, and one line picks the theme.

<div class="oi-tabs" role="tablist">
  <button role="tab" :class="{ active: tab === 'travel' }" :aria-selected="tab === 'travel'" @click="show('travel')">Mobile app <small>sketch</small></button>
  <button role="tab" :class="{ active: tab === 'dashboard' }" :aria-selected="tab === 'dashboard'" @click="show('dashboard')">Dashboard <small>color</small></button>
  <button role="tab" :class="{ active: tab === 'checkout' }" :aria-selected="tab === 'checkout'" @click="show('checkout')">Checkout flow <small>blueprint</small></button>
</div>

<div class="oi-split" v-show="tab === 'travel'">
<div class="oi-split-code">

<<< @/snippets/travel/spec.yaml

</div>
<div class="oi-split-preview">
  <div class="oi-split-bar"><span></span><span></span><span></span><em>Tap the card to book the stay.</em><a href="/openink/demos/travel/index.html" target="_blank">Open ↗</a></div>
  <iframe :src="seen.has('travel') ? '/openink/demos/travel/index.html' : undefined" title="Live preview: Mobile app"></iframe>
</div>
</div>

<div class="oi-split oi-zoom" v-show="tab === 'dashboard'">
<div class="oi-split-code">

<<< @/snippets/dashboard/spec.yaml

</div>
<div class="oi-split-preview">
  <div class="oi-split-bar"><span></span><span></span><span></span><em>Stats and hand-drawn charts in one short spec.</em><a href="/openink/demos/dashboard/index.html" target="_blank">Open ↗</a></div>
  <iframe :src="seen.has('dashboard') ? '/openink/demos/dashboard/index.html' : undefined" title="Live preview: Dashboard"></iframe>
</div>
</div>

<div class="oi-split" v-show="tab === 'checkout'">
<div class="oi-split-code">

<<< @/snippets/checkout/spec.yaml

</div>
<div class="oi-split-preview">
  <div class="oi-split-bar"><span></span><span></span><span></span><em>Fill in the card and press <b>Pay</b>.</em><a href="/openink/demos/checkout/index.html" target="_blank">Open ↗</a></div>
  <iframe :src="seen.has('checkout') ? '/openink/demos/checkout/index.html' : undefined" title="Live preview: Checkout flow"></iframe>
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
import { reactive, ref } from "vue";

// Hidden iframes would draw their sketches at zero size, so each preview loads the first time
// its tab is shown.
const tab = ref("travel");
const seen = reactive(new Set(["travel"]));
function show(id) {
  tab.value = id;
  seen.add(id);
}
</script>

<style>
.oi-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 12px; }
.oi-tabs button {
  padding: 6px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}
.oi-tabs button small { margin-left: 4px; font-size: 12px; opacity: 0.7; font-family: var(--vp-font-family-mono); }
.oi-tabs button:hover { color: var(--vp-c-text-1); border-color: var(--vp-c-brand-1); }
.oi-tabs button.active { color: var(--vp-c-white); background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); }
.oi-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  height: 500px;
  margin: 0 0 24px;
}
.oi-split-code { min-height: 0; }
.oi-split-code div[class*="language-"] { margin: 0 !important; height: 100%; overflow: auto; }
.oi-split-code { --vp-code-font-size: 12.5px; }
.oi-split-preview {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.oi-split-bar {
  flex-shrink: 0;
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
.oi-split-preview iframe { flex: 1; width: 100%; border: 0; background: #fff; }
/* Desktop layouts: draw the page at 160% and scale it down, so grids keep their columns. */
.oi-zoom .oi-split-preview { position: relative; }
.oi-zoom .oi-split-preview iframe { flex: none; position: absolute; top: 37px; left: 0; width: 160%; height: calc((100% - 37px) * 1.6); transform: scale(0.625); transform-origin: 0 0; }
@media (max-width: 960px) {
  .oi-split { grid-template-columns: minmax(0, 1fr); height: auto; }
  .oi-split-code div[class*="language-"] { max-height: 420px; }
  .oi-split-preview { height: 600px; }
  .oi-split-bar em { display: none; }
}
</style>
