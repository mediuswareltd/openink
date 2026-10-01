# Changelog

All notable changes are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Documentation website at <https://mediuswareltd.github.io/openink/> with search, live clickable demos of every example, and an About page.

## [0.1.1]

### Changed

- `openink dev` uses the next free port (3001, 3002, … up to 10 tries) when the requested one is already in use, instead of failing with `EADDRINUSE`.

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
