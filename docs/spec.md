# Spec reference

`spec.yaml` (or `spec.yml` / `spec.json`) sits at the root of a project.

## Top-level fields

| Field | Type | Description |
|---|---|---|
| `name` * | string | Shown in the header and browser tab. Also names the PDF. |
| `screens` * | list | The screens. The first one is the start screen. |
| `nav` | list or object | Header buttons. See [Navigation](#navigation). |
| `languages` | list | Language codes, e.g. `[en, de]`. The first is the default. See [Languages](#languages). |
| `footer` | string | Footer text (default: "Wireframe · not the final design"). |
| `theme` | string | Path of a CSS file that overrides the design tokens. See [Theming](#theming). |

\* required

## Screens

```yaml
screens:
  - id: dashboard        # required, unique: letters, digits, "-" and "_", starting with a letter
    title: Dashboard     # shown in the tab title and above the page in the PDF
    nav: owner           # which nav set to show (default: "default")
    note: "Only the owner sees this."   # yellow sticky note at the top of the screen
    blocks: [ ... ]
```

Use `note:` (and the `note` block) for things a sketch cannot show: rules, states, open questions.

## Navigation

A single list of header buttons:

```yaml
nav:
  - { label: Home, go: home }
  - { label: Pricing, go: pricing }
```

Or several **named sets**. A screen picks one with `nav:`; screens that don't choose use `default`. This is how you show different headers to different roles:

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

## Linking

`go: <screen id>` works on `button`, `card`, `nextbar`, nav items, and table rows (`rows: [{ cells: [...], go: user }]`). `validate` and `build` report links to screens that don't exist and warn about screens nothing links to.

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

## Theming

`sketchframe.css` is driven by CSS variables. Override the ones you want in your own file:

```yaml
theme: theme.css
```

```css
/* theme.css */
:root {
  --ink: #1e3a8a;       /* text and lines */
  --paper: #ffffff;     /* page background */
  --muted: #64748b;     /* secondary text, placeholder borders */
  --line: #cbd5e1;      /* dashed dividers */
  --accent: #dc2626;    /* pins, sliders, "wait" badges */
  --note: #fde68a;      /* sticky notes */
  --gap: 1.25rem;       /* spacing between blocks */
}
body { font-family: "Comic Neue", cursive; }
```

Also available: `--wired-toggle-on-color`, `--wired-toggle-off-color`, `--wired-slider-knob-color`, `--wired-slider-bar-color`, `--wired-radio-icon-color`, `--wired-checkbox-icon-color`. The theme file is copied next to the page and linked after the base styles.

## Assets

Put images, logos or fonts in `assets/` next to the spec; the folder is copied to `dist/assets/`. Reference them from your theme CSS (`url(assets/logo.svg)`). Wireframes normally use the drawn placeholders instead of real images.

## Output

`sketchframe build` writes:

```
dist/
├── index.html         all screens in one page; navigation is client-side (#screen-id)
├── sketchframe.js     runtime, with wired-elements and RoughJS bundled in
├── sketchframe.css
├── theme.css          (if `theme:` is set)
└── assets/            (if the folder exists)
```

Screens are addressable: `dist/index.html#dashboard` opens the dashboard directly, which is handy for links in emails and chat.
