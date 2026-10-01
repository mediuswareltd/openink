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

## From this… to this

Write the YAML on the left; get the prototype on the right. The preview is the real output of this exact spec, so try it: click the card, then **Add to cart**.

<div class="oi-split">
<div class="oi-split-code">

<<< @/snippets/shop/spec.yaml

</div>
<div class="oi-split-preview">
  <div class="oi-split-bar"><span></span><span></span><span></span><a href="/openink/demos/shop/index.html" target="_blank">Open in a new tab ↗</a></div>
  <iframe src="/openink/demos/shop/index.html" title="Live preview of the Shop spec" loading="lazy"></iframe>
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

<style>
.oi-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  align-items: stretch;
  margin: 16px 0 24px;
}
.oi-split-code div[class*="language-"] { margin: 0 !important; height: 100%; }
.oi-split-code pre code { font-size: 13px; }
.oi-split-preview {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  min-height: 480px;
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
.oi-split-bar a { margin-left: auto; }
.oi-split-preview iframe { flex: 1; width: 100%; border: 0; background: #fff; }
@media (max-width: 960px) {
  .oi-split { grid-template-columns: minmax(0, 1fr); }
  .oi-split-preview { min-height: 520px; }
}
</style>
