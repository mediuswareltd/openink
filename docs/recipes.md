---
sidebar: false
aside: false
pageClass: oi-wide
---

# Recipes

Ready-to-paste specs for the things people build most. Each one is a complete `spec.yaml`: copy it (the button is in the top-right corner of the code), paste it into your project, and run `npx openink dev`. The preview next to it is the real output, so click around.

To combine recipes, copy the blocks under `blocks:` into a screen of your own. Every block and prop is listed in the [block reference](/blocks).

## Charts

### Bar chart

Pass your own numbers in `values`, or leave it out for sample data.

<Example id="bar-chart">

<<< @/snippets/bar-chart/spec.yaml

</Example>

### Line or area chart

<Example id="line-chart">

<<< @/snippets/line-chart/spec.yaml

</Example>

### Pie and donut charts

<Example id="pie-chart">

<<< @/snippets/pie-chart/spec.yaml

</Example>

### KPI cards

`trend` colours the change: `up` green (the default), `down` orange, `flat` grey.

<Example id="stats" zoom>

<<< @/snippets/stats/spec.yaml

</Example>

For a whole dashboard with charts and a modal, see the one on the [home page](/).

## Forms

### Login

`go` on the button opens another screen.

<Example id="login" hint="Press <b>Log in</b>.">

<<< @/snippets/login/spec.yaml

</Example>

### Settings

<Example id="settings" hint="Toggles, the slider and the radio buttons all respond.">

<<< @/snippets/settings/spec.yaml

</Example>

### Multi-step form

One screen per step, linked with `go`.

<Example id="multi-step" hint="Press <b>Next</b>, then <b>Finish</b>.">

<<< @/snippets/multi-step/spec.yaml

</Example>

## Pages

### Pricing cards

`tone` and `fill` on one card make it stand out.

<Example id="pricing" zoom>

<<< @/snippets/pricing/spec.yaml

</Example>

### Landing page

<Example id="landing" zoom hint="Press <b>Get started</b>.">

<<< @/snippets/landing/spec.yaml

</Example>

### Table with status badges

A cell can be text or any block, such as a `badge` or a `button`.

<Example id="table">

<<< @/snippets/table/spec.yaml

</Example>

## Interaction

### Navigation between screens

`nav` adds header buttons to every screen. `go` works on buttons, cards, links, table rows and tab-bar items.

<Example id="navigation" hint="Click the card, then the header buttons.">

<<< @/snippets/navigation/spec.yaml

</Example>

### Confirm dialog

`open` shows a modal; `close: true` on a button inside it closes it again.

<Example id="confirm-modal" hint="Press <b>Delete</b>.">

<<< @/snippets/confirm-modal/spec.yaml

</Example>

### Tabs

<Example id="tabs" hint="Switch between the tabs.">

<<< @/snippets/tabs/spec.yaml

</Example>

### FAQ

<Example id="faq" hint="Open and close the questions.">

<<< @/snippets/faq/spec.yaml

</Example>

## Mobile

### App in a phone frame

`device` draws a phone (or `kind: tablet`, `kind: browser`). A `tabbar` at the bottom links the screens.

<Example id="mobile-app" hint="Tap a note, then <b>Save</b>.">

<<< @/snippets/mobile-app/spec.yaml

</Example>
