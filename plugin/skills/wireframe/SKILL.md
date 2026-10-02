---
name: wireframe
description: Turn a product description into a hand-drawn, clickable wireframe prototype with the openink CLI (static HTML, plus PDF and PNG). Use whenever the user asks for a wireframe, mockup, low-fidelity prototype, clickable prototype, screen flow or UX sketch, or wants to change one, or when the folder has an openink spec.yaml. Never hand-write HTML for a wireframe.
---

# Wireframes with Open Ink

[Open Ink](https://github.com/mediuswareltd/openink) builds a sketchy, clickable prototype from one YAML file, `spec.yaml`. You write the spec; the CLI validates it and renders it. Never write HTML, CSS or JavaScript for the prototype, and never edit `dist/`: it is regenerated on every build.

Run the CLI with `npx openink <command> [dir]` (Node 20+). Use `npx -y openink` the first time, so npx does not stop to ask before downloading it.

## 1. Find or create the project

- If the user names a folder, or the current folder has a `spec.yaml`, work there.
- Otherwise create a project with `npx -y openink init <dir>`. `init` overwrites `README.md`, `AGENTS.md` and `.gitignore` in `<dir>`, so use `.` only when the current folder is empty. Otherwise pick a new subfolder named after the product, such as `wireframe` or `bike-marketplace`.

## 2. Learn the blocks

Run `npx openink blocks` and read the output before writing the spec. It is the reference for every block type and prop in the installed version, and it changes between versions, so do not write blocks from memory. The JSON Schema is at `node_modules/openink/schema/spec.schema.json` if the project has openink installed.

## 3. Write `spec.yaml`

- One entry in `screens:` per real page or state (empty, error, success, paid, unpaid). Give each an `id` and a `title`.
- Use `note:` for behaviour a sketch cannot show, such as "results update live, there is no search button".
- Every screen must be reachable through `go:` links (buttons, nav, cards). End each flow with a `nextbar`.
- Use `icon:` on buttons, and `avatar`, `stat`, `chart`, `modal` (opened with `open: <id>`) and `device` (for mobile screens) where they fit.
- It is a wireframe: image and map placeholders, short realistic labels, no real photos, no colour beyond the theme. `theme: color` colours the whole project; `tone: blue` colours one block.
- For several languages set `languages: [en, de]` and give every visible string as `{ en: …, de: … }`.

When changing an existing prototype, edit only what the user asked for and keep the rest of the spec as it is.

## 4. Validate until clean

Run `npx openink validate <dir>`. Fix every error, then run it again. Each problem gives its exact path in the spec and often a "did you mean" hint. Read the warnings too: they catch typos and unreachable screens.

## 5. Look at the result

Run `npx openink png <dir>` and open the images in `<dir>/dist/png/` to check the layout of every screen you added or changed. Fix overlaps, empty screens and anything that does not match the request, then validate and check again.

`png` and `pdf` need Chrome, Chromium or Edge. If none is found, set `CHROME_PATH` to one, or skip this step, build with `npx openink build <dir>` and tell the user to open the HTML.

## 6. Hand over

Tell the user:

- where the prototype is: `<dir>/dist/index.html`, which opens in any browser and works offline;
- `npx openink dev <dir>` for a live preview that reloads when the spec changes;
- `npx openink pdf <dir>` for a PDF with one screen per page, if they want one.

Summarise the screens and the flows between them in a few lines. Do not paste the spec.
