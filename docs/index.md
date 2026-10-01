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

## Open Ink in 35 seconds

<video controls preload="metadata" playsinline poster="../assets/openink-explainer-poster.jpg" style="width: 100%; border-radius: 12px; border: 1px solid var(--vp-c-divider)">
  <source src="../assets/openink-explainer.mp4" type="video/mp4" />
</video>

## Write this. Click through that.

The preview is the real output of the YAML next to it. No design tool, no HTML. One line picks the theme, and `tone` colours any part.

<Example id="dashboard" zoom hint="Try the nav, the date chips and <b>Invite</b>.">

<<< @/snippets/dashboard/spec.yaml

</Example>

Want a bar chart, a login form or pricing cards? Copy one from the **[recipes](/recipes)**, or click through the [full examples](/examples).

## Try it

```bash
npx openink init my-wireframes
cd my-wireframes
npx openink dev                 # live preview at http://localhost:3000
```

Requires Node 20+. Read the [getting started guide](/getting-started) next, or click through the [live examples](/examples).

</div>
