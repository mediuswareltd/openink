# Changelog

All notable changes are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.1.0]

First release.

- `sketchframe` CLI: `init`, `build`, `dev` (live reload), `validate`, `pdf`, `png`, `blocks`.
- YAML spec with 28 block types across layout, text, media, forms, actions and data.
- Hand-drawn look from wired-elements and RoughJS; image, map and generic placeholders.
- Optional multi-language prototypes (`languages:` + `{ en, de }` text values).
- Named header nav sets per screen, sticky-note annotations, theme override CSS, assets folder.
- Spec validation with paths, "did you mean" hints and dead-link detection.
- JSON Schema (`sketchframe/schema.json`) for editor autocomplete, generated from the block registry.
- PDF export (one screen per page) and per-screen PNG export.
