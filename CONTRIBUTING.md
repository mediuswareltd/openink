# Contributing

Thanks for helping. This project is small on purpose: a YAML spec goes in, a hand-drawn clickable prototype comes out.

## Setup

```bash
git clone https://github.com/mediuswareltd/openink && cd openink
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
| `src/styles/openink.css` | All styling and the design tokens |
| `src/spec/` | Validator, schema generator, docs generator |
| `src/cli.js` `build.js` `dev.js` `export.js` | Command line, build pipeline, dev server, PDF/PNG |
| `examples/` | Example projects; they are validated by the tests and used for README screenshots |
| `templates/starter/` | What `openink init` copies |

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
- If you change how something looks, attach a screenshot (`openink png examples/rental-portal`).
- **Do not upgrade `roughjs`** without testing every form control: wired-elements calls a function newer roughjs versions removed (`fillPolygon`), and the toggle, slider and textarea silently stop drawing.

## Releasing (maintainers)

The package is published to npm as `@mediusware/openink`, **by hand, from `main`**. This repository has no CI or publish automation. You need an npm account that belongs to the `@mediusware` organization, with 2FA enabled (npm refuses to publish without it).

A release is only needed when something that ships in the package changes (`bin/`, `src/`, `templates/`, `schema/`, `docs/*.md`, `README.md`, `CHANGELOG.md`). Changes to tests, examples, screenshots or this file do not need one.

1. **In the pull request**, bump `version` in `package.json` (semver) and add a section to `CHANGELOG.md`. Run `npm run generate && npm test`.
2. **Merge the pull request into `main`.**
3. **Publish from an up-to-date `main`:**

   ```bash
   git switch main && git pull
   npm login                       # opens the browser
   npm pack --dry-run              # check the file list: no docs/img, no examples, no node_modules
   npm publish --dry-run           # full rehearsal, publishes nothing
   npm publish                     # runs the tests first (prepublishOnly); add --otp=123456 if asked
   git tag v0.1.0 && git push --tags
   ```

`publishConfig.access` is `public`, so no `--access` flag is needed. To see whether a pull request has been merged: `gh pr view <number> --json state,mergedAt`.

## Reporting bugs

Open an issue with your `spec.yaml` (or a minimal piece of it), the command you ran, the output, and your Node version and OS.

By contributing you agree that your contributions are licensed under the MIT license.
