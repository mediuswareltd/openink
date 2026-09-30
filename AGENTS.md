# Instructions for AI coding assistants

Open Ink turns a YAML spec into a clickable, hand-drawn wireframe prototype (static HTML, PDF, PNG). [CONTRIBUTING.md](CONTRIBUTING.md) is the full guide; this file is what an assistant needs before changing anything.

## Commit messages: Conventional Commits (required)

Every commit message **and every pull request title** follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). A git hook (`.githooks/commit-msg`) rejects anything else, so write it correctly the first time.

```
<type>(<scope>): <description>

<body: why the change was made, not what it does>

<footers: Closes #12, BREAKING CHANGE: ...>
```

- **Types:** `feat` (new feature), `fix` (bug fix), `perf`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`, `revert`.
- **Scopes** (optional): `cli`, `build`, `dev`, `export`, `blocks`, `render`, `runtime`, `spec`, `styles`, `themes`, `examples`, `templates`, `assets`, `deps`.
- **Description:** imperative present tense ("add", not "added"), starts in lower case (acronyms like `PDF` are fine), no full stop.
- **First line:** 72 characters or fewer. Blank line before the body. Wrap body lines at 100.
- **Breaking change:** put `!` before the colon (`feat(spec)!: rename nav to menu`) and/or a `BREAKING CHANGE:` footer.
- **Choose the type by what the change does, not by which files it touches.** `feat` and `fix` change behaviour or output. A change that only edits docs is `docs`. A change that only edits tests is `test`. Dependency and packaging changes are `build`.
- **One logical change per commit.** If a diff mixes a feature and unrelated docs or refactoring, split it into separate commits.
- **Never bypass the hook** with `--no-verify`. If a commit is rejected, read the message it prints, fix the commit message, and commit again.
- Merge, `revert`, `fixup!` and `squash!` messages made by git or GitHub are exempt.

Good:

```text
feat(blocks): add a rating block
fix(export): wait for wired-elements to draw before the screenshot
docs: explain how to publish a release
chore(deps): bump esbuild to 0.28.2
```

Bad (all rejected): `Update the docs` (no type), `Feat: Add a block.` (upper case, full stop), `added tests` (no type, past tense), `wip` (not a type).

When asked to write or suggest a commit message, reply with only the message, in this format. Check one without committing: `npm run lint:commit -- --message "feat: add a thing"`.

## Working in this repository

- Node 20+, ES modules, no build step for `src/`. `npm test` must pass before you commit.
- **Block definitions in `src/render/blocks/` are the single source of truth** for rendering, validation, docs and the JSON Schema. After changing them run `npm run generate`. Never edit `docs/blocks.md` or `schema/spec.schema.json` by hand; the tests fail if they are stale.
- **Do not upgrade `roughjs`** (pinned to 4.3.1): newer versions break wired-elements' toggle, slider and textarea.
- Do not commit `dist/`, `.openink-dev/` or `node_modules/`. README screenshots in `docs/img/` are produced by `npm run screenshots`.
- User-visible changes go under **Unreleased** in `CHANGELOG.md`.
- Releases are published to npm by hand from `main` (see "Releasing" in CONTRIBUTING.md). Do not publish or push tags unless asked.
