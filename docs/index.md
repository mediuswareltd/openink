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

## From this…

```yaml
name: Shop
theme: color
nav:
  - { icon: home, label: Home, go: home }
screens:
  - id: home
    title: Home
    blocks:
      - { type: h1, text: Welcome }
      - type: card
        go: product                  # click → opens the product screen
        children:
          - { type: image, h: 120, label: Photo }
          - { type: h3, text: Blue shirt }
          - { type: rating, value: 4, text: (128 reviews) }
  - id: product
    title: Product
    blocks:
      - { type: button, label: Add to cart, icon: cart, primary: true, open: added }
modals:
  - id: added
    title: Added to cart
    children:
      - { type: button, label: Keep shopping, close: true, go: home }
```

## …to this

<p>
  <img src="./img/photo-feed.png" width="32%" alt="Photo-sharing app: feed with stories, carousel and action icons" />
  <img src="./img/photo-mobile.png" width="32%" alt="The same feed inside a phone frame with a tab bar" />
  <img src="./img/saas-overview.png" width="32%" alt="SaaS dashboard in the colour theme with stats and charts" />
</p>

## Try it

```bash
npx openink init my-wireframes
cd my-wireframes
npx openink dev                 # live preview at http://localhost:3000
```

Requires Node 20+. Read the [getting started guide](/getting-started) next, or click through the [live examples](/examples).

</div>
