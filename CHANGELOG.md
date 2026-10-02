# Changelog

All notable changes are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Claude Code plugin. `/plugin marketplace add mediuswareltd/openink`, then `/plugin install openink@openink`, adds a
  `wireframe` skill that turns a description into a validated, screenshot-checked prototype in any folder.

### Fixed

- The PDF button (and Ctrl+P) no longer prints image, video and map placeholders and charts as empty boxes with only
  their label. Screens that had not been opened were printed before their sketches were drawn.

## [0.1.1] - 2026-10-02

### Added

- Documentation website at <https://mediuswareltd.github.io/openink/> with search, live clickable demos of every example,
  a recipes page of ready-to-paste specs (charts, forms, pricing, tables, modals, mobile) shown beside live previews, and an
  About page.

### Changed

- `openink dev` uses the next free port (3001, 3002, … up to 10 tries) when the requested one is already in use, instead of failing with `EADDRINUSE`.

### Fixed

- A prototype embedded in an `<iframe>` no longer scrolls the surrounding page down to itself when it loads. Opening a
  prototype without a `#screen` in the URL no longer adds one for the start screen.
- A tall screen is no longer split across two PDF pages. Each screen is scaled down to fit one A4 landscape page, so the
  PDF has exactly one page per screen. This applies to `openink pdf`, the prototype's PDF button and the browser's
  own print (Ctrl+P).
- The PDF button now draws the sketched outlines of screens that had never been opened, as `openink pdf` already did.

## [0.1.0]

First release.

- `openink` CLI: `init`, `build`, `dev` (live reload), `validate`, `pdf`, `png`, `blocks`; `--theme` to try a theme.
- YAML spec with 48 block types across layout, text, content, media, forms, actions, navigation, feedback, overlays and data.
- New blocks beyond the basics: `icon` (37 hand-drawn icons, also on buttons, nav and tab-bar items), `avatar`, `hero`, `stat`,
  `rating`, `link`, `video`, `carousel`, `dropzone`, `chart` (line, area, bar, pie, donut), `search`, `alert`, `progress`,
  `breadcrumb`, `pagination`, `steps`, `tabbar`, `accordion`, `device` (phone / tablet / browser frames), `modal`.
- Colour: themes (`sketch`, `color`, `pastel`, `blueprint`, `dark`), `colors:` token overrides, and `tone:` / `fill:` on any block or screen.
- Global `modals:` list, opened from any screen with `open:` and closed with `close:`, the X, Escape or a click outside.
- Hand-drawn look from wired-elements and RoughJS; image, map and generic placeholders.
- Optional multi-language prototypes (`languages:` + `{ en, de }` text values).
- Named header nav sets per screen, sticky-note annotations, custom theme CSS, assets folder, screen widths, YAML anchors via `x-*` keys.
- Spec validation with paths, "did you mean" hints and dead-link detection.
- JSON Schema (`openink/schema.json`) for editor autocomplete, generated from the block registry.
- PDF export (one screen per page) and per-screen PNG export.
