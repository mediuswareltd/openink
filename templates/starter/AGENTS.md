# Wireframe project: instructions for AI assistants

This folder is a [sketchframe](https://github.com/OWNER/sketchframe) project. The whole prototype is described in `spec.yaml`. Never write HTML by hand.

When the user describes a product or a change:

1. Run `npx sketchframe blocks` to see every block type and its props (or read the JSON Schema at `node_modules/sketchframe/schema/spec.schema.json`).
2. Edit `spec.yaml`. One entry in `screens:` per real page or state. Give each a `title`, and use `note:` for behaviour a sketch cannot show.
3. Run `npx sketchframe validate`. Fix every error; read the warnings (they catch typos and unreachable screens).
4. Run `npx sketchframe png` and look at `dist/png/*.png` to check the layout. `npx sketchframe dev` gives a live preview.
5. Tell the user where the result is: `dist/index.html` (and `npx sketchframe pdf` for a PDF).

Rules:
- It is a wireframe: hand-drawn look, image and map placeholders, no real content, no colour beyond the theme.
- Every screen must be reachable through `go:` links; end a flow with a `nextbar`.
- For several languages set `languages: [en, de]` and give every visible string as `{ en: …, de: … }`.
- Do not edit `dist/`; it is regenerated.
