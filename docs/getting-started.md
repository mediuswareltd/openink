# Getting started

## 1. Create a project

```bash
npx sketchframe init my-wireframes
cd my-wireframes
npx sketchframe dev
```

Open <http://localhost:3000>. Edit `spec.yaml` and the page reloads on save.

You now have:

```
my-wireframes/
├── spec.yaml     ← the whole prototype
├── AGENTS.md     ← instructions for AI coding assistants (see docs/ai-assistants.md)
├── README.md
└── .gitignore
```

## 2. Describe screens

```yaml
name: Shop

nav:
  - { label: Home, go: home }

screens:
  - id: home
    title: Home
    blocks:
      - { type: h1, text: Welcome }
      - type: grid
        cols: 3
        children:
          - type: card
            go: product              # clicking the card opens the "product" screen
            children:
              - { type: image, h: 120, label: Photo }
              - { type: h3, text: Blue shirt }
              - { type: text, muted: true, text: CHF 39 }

  - id: product
    title: Product page
    blocks:
      - { type: h1, text: Blue shirt }
      - { type: button, label: Add to cart, primary: true, toast: Added }
```

- A **screen** is one page or state. `id` is what `go:` links point to.
- A **block** is `{ type: <name>, ...props }`. Blocks such as `grid`, `card` and `row` hold other blocks in `children:`.
- `go: <screen id>` on a button, card, table row or nav item navigates. `toast: "text"` shows a message.

Every block and its props: [blocks.md](blocks.md), or run `npx sketchframe blocks`.

## 3. Check and share

| Goal | Command |
|---|---|
| Catch mistakes (typos, dead links, unreachable screens) | `npx sketchframe validate` |
| Static site for hosting | `npx sketchframe build` → `dist/` |
| PDF, one screen per page | `npx sketchframe pdf` → `dist/<name>.pdf` |
| One PNG per screen | `npx sketchframe png` → `dist/png/` |

`dist/index.html` works when double-clicked and offline. To host it, upload `dist/` anywhere that serves static files (Netlify, Vercel, GitHub Pages, S3).

PDF and PNG export need Chrome, Chromium or Edge installed. Set `CHROME_PATH` if it is not found.

## Editor autocomplete

The first line of the starter spec points at the JSON Schema:

```yaml
# yaml-language-server: $schema=https://unpkg.com/sketchframe/schema/spec.schema.json
```

With the YAML extension in VS Code (or any editor using yaml-language-server) you get completion for block types and props, hover docs, and inline errors.

## Next

- [Spec reference](spec.md): top-level fields, navigation, languages, theming, assets
- [Block reference](blocks.md)
- [Working with AI assistants](ai-assistants.md)
- [Extending sketchframe](extending.md)
