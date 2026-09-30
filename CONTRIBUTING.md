# Contributing

Thanks for helping. This project is small on purpose: a YAML spec goes in, a hand-drawn clickable prototype comes out.

## Setup

```bash
git clone https://github.com/OWNER/sketchframe && cd sketchframe
npm install
npm test                # unit + CLI tests, no browser needed
npm run dev             # live preview of examples/rental-portal at http://localhost:3000
```

Node 20 or newer. `pdf`, `png` and `npm run screenshots` also need Chrome, Chromium or Edge (set `CHROME_PATH` if it is not found).

## Where things live

| Path | What it is |
|---|---|
| `src/render/blocks/` | Block definitions. **One definition drives rendering, validation, docs and the JSON Schema.** |
| `src/render/` | `context.js` (helpers passed to blocks) and `page.js` (HTML shell) |
| `src/runtime/` | JavaScript that runs in the generated page (navigation, i18n, placeholders) |
| `src/styles/sketchframe.css` | All styling and the design tokens |
| `src/spec/` | Validator, schema generator, docs generator |
| `src/cli.js` `build.js` `dev.js` `export.js` | Command line, build pipeline, dev server, PDF/PNG |
| `examples/` | Example projects; they are validated by the tests and used for README screenshots |
| `templates/starter/` | What `sketchframe init` copies |

## Adding a block

1. Add a definition to the right file in `src/render/blocks/` (see `docs/extending.md`).
2. `npm run generate` to refresh `docs/blocks.md` and `schema/spec.schema.json`.
3. Add a sample to the "every block renders" test in `test/render.test.js`, and a validation test if it has unusual props.
4. Add it to one of the examples if it helps show what it looks like.

`npm test` fails if the generated files are stale.

## Pull requests

- Keep them focused; one change per PR.
- `npm test` must pass. Add tests for behaviour changes.
- User-visible changes go under **Unreleased** in `CHANGELOG.md`.
- If you change how something looks, attach a screenshot (`sketchframe png examples/rental-portal`).
- **Do not upgrade `roughjs`** without testing every form control: wired-elements calls a function newer roughjs versions removed (`fillPolygon`), and the toggle, slider and textarea silently stop drawing.

## Reporting bugs

Open an issue with your `spec.yaml` (or a minimal piece of it), the command you ran, the output, and your Node version and OS.

By contributing you agree that your contributions are licensed under the MIT license.
