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

`npm install` also switches on the repository's git hook (`.githooks/commit-msg`), which checks every commit message against [Conventional Commits](#commit-messages).

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

## Commit messages

Every commit message follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). The history then reads as a changelog, and the next version number can be worked out from the commits.

```
<type>(<scope>): <description>

<body: why the change was made, not what it does>

<footers: Closes #12, BREAKING CHANGE: ...>
```

The scope, body and footers are optional.

**Types**

| Type | Use it for | Version bump |
|---|---|---|
| `feat` | a new feature or block | minor |
| `fix` | a bug fix | patch |
| `perf` | a performance improvement | patch |
| `docs` | documentation only (README, `docs/`, comments) | none |
| `style` | formatting only, no change in behaviour | none |
| `refactor` | a change that neither fixes a bug nor adds a feature | none |
| `test` | adding or fixing tests | none |
| `build` | `package.json`, dependencies, packaging | none |
| `ci` | continuous-integration configuration | none |
| `chore` | anything else that does not change `src/` or the tests | none |
| `revert` | reverting an earlier commit | as the reverted commit |

A **breaking change** (of the spec format, a CLI option or the public API) adds `!` before the colon and/or a `BREAKING CHANGE:` footer. It bumps the major version (while the version is `0.x`, the minor).

**Scopes** name the part of the project. They are optional, and these are the ones in use:

| Scope | Where |
|---|---|
| `cli` | `src/cli.js`, `bin/` |
| `build`, `dev`, `export` | `src/build.js`, `src/dev.js`, `src/export.js` |
| `blocks` | `src/render/blocks/` (a new or changed block) |
| `render` | `src/render/` (context, page shell) |
| `runtime` | `src/runtime/` (code that runs in the generated page) |
| `spec` | `src/spec/` (validator, JSON Schema, docs generator) |
| `styles`, `themes` | `src/styles/`, `src/styles/themes/` |
| `examples`, `templates` | `examples/`, `templates/starter/` |
| `assets` | `assets/` (logos) |
| `deps` | dependency updates |

**Rules**

- Write the description in the imperative present tense ("add", not "added" or "adds"), start it in lower case, and do not end it with a full stop. Acronyms such as `PDF` or `SVG` may stay in capitals.
- Keep the first line to 72 characters or fewer. Wrap body lines at 100.
- Leave a blank line between the first line, the body and the footers.
- One logical change per commit.
- Reference issues in a footer: `Closes #12` or `Refs #7`.

**Examples**

```text
feat(blocks): add a rating block
fix(export): wait for wired-elements to draw before the screenshot
docs: explain how to publish a release
feat(spec)!: rename `nav` to `menu`
chore(deps): bump esbuild to 0.28.2
```

```text
fix(dev): keep serving the last good build when a rebuild fails

The dev server threw the output away as soon as the spec had an error, so
the browser showed a blank page until the error was fixed.

Closes #12
```

Not accepted: `Update the docs` (no type), `Feat: Add a block.` (upper case, full stop), `added tests` (no type, past tense), `wip` (not a type).

**Enforcement.** `npm install` sets `core.hooksPath` to `.githooks`, and `.githooks/commit-msg` rejects a message that breaks these rules, with an explanation of what to change. Check a message without committing using `npm run lint:commit -- --message "feat: add a thing"`. Merge, revert, `fixup!` and `squash!` messages are not checked. Please do not bypass the hook with `--no-verify`. Commits made before this rule are not rewritten.

**Pull request titles** use the same format, because the title becomes the merge commit's description.

**AI assistants.** `AGENTS.md` (which `CLAUDE.md` imports) and `.github/copilot-instructions.md` give assistants these rules, and the hook makes sure a message that ignores them is rejected.

## Pull requests

- Keep them focused; one change per PR. Give the PR a [Conventional Commits](#commit-messages) title.
- `npm test` must pass. Add tests for behaviour changes.
- User-visible changes go under **Unreleased** in `CHANGELOG.md`.
- If you change how something looks, attach a screenshot (`openink png examples/rental-portal`).
- **Do not upgrade `roughjs`** without testing every form control: wired-elements calls a function newer roughjs versions removed (`fillPolygon`), and the toggle, slider and textarea silently stop drawing.

## Releasing (maintainers)

The package is published to npm as `openink`, **by hand, from `main`**. This repository has no CI or publish automation. You need an npm account listed as a maintainer of `openink` (`npm owner ls openink`), with 2FA enabled (npm refuses to publish without it).

A release is only needed when something that ships in the package changes (`bin/`, `src/`, `templates/`, `schema/`, `docs/*.md`, `README.md`, `CHANGELOG.md`). Changes to tests, examples, screenshots or this file do not need one.

1. **In the pull request**, bump `version` in `package.json` (semver) and add a section to `CHANGELOG.md`. Choose the bump from the commits since the last release (`git log v0.1.0..HEAD --oneline`): any breaking change is a major bump (minor while `0.x`), any `feat` a minor bump, otherwise a patch. Run `npm run generate && npm test`.
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
