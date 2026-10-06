# Changelog

All notable changes are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.4.0] - 2026-10-06

### Added

- `openink dev --open` opens the prototype in the default browser once the server is running (#25).
- Spec errors and warnings start with the file, line and column (`spec.yaml:42:7`), in `validate`, `build`, `dev` and
  the browser overlay. Most terminals and editors open that spot with a click (#24).
- `openink dev` shows spec errors over the prototype in the browser, and hides them as soon as the spec builds again.
  Before, a failed rebuild only showed in the terminal, and the browser kept the last good build (#23).

### Fixed

- `openink dev` prints each warning with its path and message, not only how many there are (#22).

## [0.3.0] - 2026-10-05

### Added

- 73 more icons, 110 in all: arrows, status, files, shopping, weather and 20 brand logos (Google, Apple, GitHub,
  Facebook, X, Instagram, LinkedIn, YouTube, TikTok, WhatsApp and more) for sign-in buttons, share bars and footers.
  The gallery has a new Icons screen that shows every icon with its name (#20).

## [0.2.0] - 2026-10-02

### Added

- A `wireframe` skill for AI coding agents that turns a description into a validated, screenshot-checked prototype in
  any folder. Claude Code: `claude plugin marketplace add mediuswareltd/openink`, then
  `claude plugin install openink@openink`. Cursor, Codex, Gemini CLI, GitHub Copilot and others:
  `npx skills add mediuswareltd/openink`.

### Fixed

- An image, video, map, dropzone or chart placed directly in a `row` is drawn as a 4:3 thumbnail of its height. It
  used to collapse to the width of its label and showed no box (#17).
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
