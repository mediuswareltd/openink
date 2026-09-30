# Spec reference

`spec.yaml` (or `spec.yml` / `spec.json`) sits at the root of a project.

## Top-level fields

| Field | Type | Description |
|---|---|---|
| `name` * | string | Shown in the header and browser tab. Also names the PDF. |
| `screens` * | list | The screens. The first one is the start screen. |
| `nav` | list or object | Header buttons. See [Navigation](#navigation). |
| `modals` | list | Dialogs any screen can open. See [Modals](#modals). |
| `languages` | list | Language codes, e.g. `[en, de]`. The first is the default. See [Languages](#languages). |
| `theme` | string | A colour theme (`sketch`, `color`, `pastel`, `blueprint`, `dark`) or the path of your own `.css` file. See [Colour](#colour). |
| `colors` | object | Override single colours of the theme. See [Colour](#colour). |
| `footer` | string | Footer text (default: "Wireframe · not the final design"). |
| `x-*` | anything | Free-form; a place for YAML anchors. See [Reusing blocks](#reusing-blocks-yaml-anchors). |

\* required

## Screens

```yaml
screens:
  - id: dashboard        # required, unique: letters, digits, "-" and "_", starting with a letter
    title: Dashboard     # shown in the tab title and above the page in the PDF
    nav: owner           # which nav set to show (default: "default")
    note: "Only the owner sees this."   # yellow sticky note at the top of the screen
    width: narrow        # narrow (~520px, phone-like) | medium (~760px) | wide (default, full width)
    tone: blue           # optional: tint the whole screen (see Colour)
    blocks: [ ... ]
```

Use `note:` (and the `note` block) for things a sketch cannot show: rules, states, open questions.

## Colour

Colour is optional and works at three levels. Mix them freely: a plain-sketch project with a few coloured parts, or a fully coloured one.

### 1. The whole project: `theme:` and `colors:`

```yaml
theme: color        # sketch (default) | color | pastel | blueprint | dark
colors:             # optional: override single tokens on top of the theme
  accent: "#f97316"
```

| Theme | Look |
|---|---|
| `sketch` | Pencil grey on warm paper with one orange accent. The default. |
| `color` | Indigo and rose on warm white. Filled buttons, coloured charts. |
| `pastel` | Soft pinks and lilacs. Friendly. |
| `blueprint` | White lines on blue graph paper. |
| `dark` | Dark background, light lines, coral accent. |

Try them without editing the spec: `openink dev --theme dark`.

`colors:` accepts `ink` (text and lines), `paper` (page background), `muted` (secondary text and outlines), `line` (dashed dividers), `accent` (pins, sliders, active states, "wait" badges), `note` (sticky notes) and `card` (card and dialog background). Values are any CSS colour.

For full control, point `theme:` at your own file (any value ending in `.css`); it is copied next to the page and loaded after the base styles:

```yaml
theme: brand.css
```

```css
/* brand.css */
:root { --ink: #1e3a8a; --accent: #dc2626; --gap: 1.25rem; }
body { font-family: "Comic Neue", cursive; }
```

Also available: `--wired-toggle-on-color`, `--wired-slider-knob-color`, `--wired-progress-color`, `--card-bg`, `--ok` (green of "on" badges) and the tone palette `--blue`, `--blue-bg`, … (see `src/styles/openink.css`).

### 2. One part: `tone:` and `fill:` on any block

```yaml
- { type: card, tone: pink, title: New, children: [...] }      # pink outline, text and drawings
- { type: button, label: Delete, icon: trash, tone: red }
- { type: text, text: Saved, tone: green, fill: true }         # plus a tinted background
- { type: chart, kind: bar, tone: purple }
```

`tone` is one of `blue`, `green`, `yellow`, `red`, `purple`, `pink`, `orange`, `teal`, `gray`. It recolours the block and everything inside it, including hand-drawn placeholders, charts and icons. `fill: true` adds a tinted background (a neutral tint if there is no tone). Primary buttons inside a tone become solid.

### 3. One screen: `tone:` on a screen

```yaml
- id: promo
  tone: orange
  blocks: [ ... ]
```

The screen gets a tinted background and its blocks take the colour.

## Modals

A modal is a dialog that opens over the screen. Open it with `open: <id>` on any clickable block (`button`, `card`, `avatar`, `link`, nav and tab-bar items). Close it with a `close: true` button, the X, the Escape key, or a click outside.

Define modals once in the top-level `modals:` list so every screen can open them:

```yaml
modals:
  - id: share
    title: Share
    width: narrow            # narrow | medium (default) | wide
    children:
      - { type: search, placeholder: Search people }
      - { type: button, label: Send, primary: true, close: true, toast: Sent }

screens:
  - id: feed
    blocks:
      - { type: button, icon: send, open: share }
```

A `{ type: modal, id: ... }` block inside a screen works too, but only from that screen. `validate` reports `open:` targets that don't exist.

## Reusing blocks (YAML anchors)

Top-level keys starting with `x-` are ignored by openink, so you can define a block once there with an anchor (`&name`) and reuse it anywhere with an alias (`*name`):

```yaml
x-post-actions: &post-actions
  type: row
  children:
    - { type: button, icon: heart }
    - { type: button, icon: send }

screens:
  - id: feed
    blocks:
      - *post-actions
      - *post-actions
```

See `examples/photo-sharing` for a full example.

## Navigation

A single list of header buttons (each with a `label`, an `icon`, or both):

```yaml
nav:
  - { icon: home, label: Home, go: home }
  - { label: Pricing, go: pricing }
```

Or several **named sets**. A screen picks one with `nav:`; screens that don't choose use `default`. This is how you show different headers to different roles (an empty list `[]` hides the header buttons):

```yaml
nav:
  default:
    - { label: Home, go: home }
    - { label: Log in, go: login }
  admin:
    - { label: Dashboard, go: dashboard }
    - { label: Users, go: users }

screens:
  - id: dashboard
    nav: admin
    blocks: [ ... ]
```

For a mobile bottom bar, use the `tabbar` block inside a `device` frame instead.

## Linking

`go: <screen id>` works on `button`, `card`, `avatar`, `link`, `nextbar`, nav and tab-bar items, and table rows (`rows: [{ cells: [...], go: user }]`). `validate` and `build` report links to screens that don't exist and warn about screens nothing links to.

## Languages

```yaml
languages: [en, de]

screens:
  - id: home
    title: { en: Home, de: Startseite }
    blocks:
      - { type: h1, text: { en: Welcome, de: Willkommen } }
      - { type: input, placeholder: { en: Your name, de: Ihr Name } }
```

- Any text value may be a string or a `{ code: text }` object.
- The header gets a language switcher; the choice is remembered in the browser.
- A missing translation falls back to the first language, and `validate` warns about it.
- Language codes are 2 or 3 letters. There is no built-in list, so `pt`, `ja`, `gsw` all work.

## Icons

`icon` blocks, `button.icon`, nav items and tab-bar items use a built-in set of hand-drawn icons (`home`, `search`, `heart`, `comment`, `send`, `bell`, `user`, `camera`, …). The full list is at the end of the [block reference](blocks.md#icons). An unknown name is an error with a "did you mean" hint.

## Quoting text with commas

Inside `{ ... }` a comma ends the value, so YAML reads `{ type: text, text: Hello, world }` as text `Hello` plus a stray key `world`. Wrap such text in quotes: `text: "Hello, world"`. `validate` warns when it sees this.

## Assets

Put images, logos or fonts in `assets/` next to the spec; the folder is copied to `dist/assets/`. Reference them from your theme CSS (`url(assets/logo.svg)`). Wireframes normally use the drawn placeholders instead of real images.

## Output

`openink build` writes:

```
dist/
├── index.html         all screens in one page; navigation is client-side (#screen-id)
├── openink.js     runtime, with wired-elements and RoughJS bundled in
├── openink.css
├── theme-<name>.css   (if `theme:` is a preset other than sketch)
├── <your>.css         (if `theme:` is your own file)
└── assets/            (if the folder exists)
```

Screens are addressable: `dist/index.html#dashboard` opens the dashboard directly, which is handy for links in emails and chat.
