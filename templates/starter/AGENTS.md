# Wireframe project: instructions for AI assistants

This folder is a [openink](https://github.com/mediuswareltd/openink) project. The whole prototype is described in `spec.yaml`. Never write HTML by hand.

When the user describes a product or a change:

1. Run `npx openink blocks` to see every block type and its props (or read the JSON Schema at `node_modules/openink/schema/spec.schema.json`).
2. Edit `spec.yaml`. One entry in `screens:` per real page or state. Give each a `title`, and use `note:` for behaviour a sketch cannot show.
3. Run `npx openink validate`. Fix every error; read the warnings (they catch typos and unreachable screens).
4. Run `npx openink png` and look at `dist/png/*.png` to check the layout. `npx openink dev` gives a live preview.
5. Tell the user where the result is: `dist/index.html` (and `npx openink pdf` for a PDF).

Rules:
- It is a wireframe: hand-drawn look, image and map placeholders, no real content, no colour beyond the theme.
- Every screen must be reachable through `go:` links; end a flow with a `nextbar`.
- Use `icon:` on buttons, `avatar`, `stat`, `chart`, `modal` (open with `open: <id>`) and `device` for mobile screens where they fit. `theme: color` colours the whole project; `tone: blue` colours a single block.
- For several languages set `languages: [en, de]` and give every visible string as `{ en: …, de: … }`.
- Do not edit `dist/`; it is regenerated.
