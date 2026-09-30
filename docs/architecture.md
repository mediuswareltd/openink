# Architecture

```
spec.yaml ──► load + parse ──► validate ──► render ──► write dist/
                (yaml)        (spec/validate)  (render/)     │
                                                              ├─ index.html        (render/page.js)
                                                              ├─ openink.js    (runtime/ bundled by esbuild)
                                                              └─ openink.css  (styles/)

dist/ ──► puppeteer-core + Chrome/Edge ──► PDF / PNG          (export.js)
dist/ ──► http server + fs.watch + reload poller              (dev.js)
```

## Design decisions

**Spec in, static files out.** The prototype is a single HTML page holding every screen; JavaScript only shows one at a time. That makes the output trivially hostable, printable and shareable by link (`#screen-id`), and it works from `file://`.

**One definition per block.** `src/render/blocks/` is the single source of truth. The validator, the JSON Schema, `docs/blocks.md` and `openink blocks` are all generated from it, and tests fail when the generated files are stale. Adding a block is one object.

**Validate everything, early.** Assistants and humans both make typos. The validator never throws; it returns `{ errors, warnings }` with a path into the spec and a suggestion, and `build` refuses to write output if there are errors.

**Bundled runtime.** wired-elements and RoughJS are bundled into `openink.js` at build time, so a prototype has no CDN dependency (except the Google Fonts stylesheet, which falls back to a system cursive font offline).

**No framework in the output.** The runtime is about a hundred lines of plain JavaScript plus the web components from wired-elements.

## Layout

```
bin/openink.js      CLI entry
src/
  cli.js                argument parsing, commands, output formatting
  build.js              load spec → validate → write dist
  dev.js                dev server with live reload
  export.js             PDF / PNG via headless Chrome
  index.js              public API
  spec/                 validate.js, schema.js, docs.js
  render/               context.js, page.js, blocks/*
  runtime/              browser code (navigation, i18n, placeholder, redraw)
  styles/               openink.css
templates/starter/      copied by `openink init`
examples/               example projects (also test fixtures and README screenshots)
test/                   node:test suites
scripts/                generate.js (docs + schema), screenshots.js
```

## Known limitations

- wired-elements 3.0 is a release candidate and has not been updated for some time. Its dependency on `roughjs` is pinned to 4.3.1 for that reason (see CONTRIBUTING.md).
- Form controls are visual only; nothing is validated or submitted.
- One page per project: very large specs (hundreds of screens) load everything up front.
