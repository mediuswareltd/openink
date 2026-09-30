# Extending openink

## Add a block

A block is one object in `src/render/blocks/*.js`. That single definition is used for rendering, validation, the generated docs and the JSON Schema, so there is nothing else to register.

```js
// src/render/blocks/text.js
{
  name: "quote",                       // the `type:` value in a spec
  group: "Text",                       // section in docs/blocks.md
  summary: "Pull quote with an author.",
  props: {
    text:   { type: "text", doc: "The quote.", required: true },
    author: { type: "text", doc: "Who said it." },
  },
  render: (b, c) =>
    `<blockquote class="quote">${c.tx(b.text)}<cite>${c.tx(b.author)}</cite></blockquote>`,
}
```

Then:

```bash
npm run generate     # refreshes docs/blocks.md and schema/spec.schema.json
npm test
```

### Prop types

| `type` | Accepts |
|---|---|
| `text` | string, number, or `{ lang: text }` (translatable) |
| `string` | string; add `enum: [...]` to restrict values |
| `number`, `boolean` | as named |
| `text[]` | list of `text` |
| `number[]` | list of numbers |
| `sections`, `links`, `rows` | structured props: `[{ label, children }]` (tabs, accordion), `[{ icon, label, go, … }]` (tab bar), table rows |

Set `required: true` on a prop to make the validator insist on it. Spread `...ACTION` (from `shared.js`) into `props` to make a block clickable (`go`, `toast`, `open`, `close`), and use `c.act(b)` in `render`. Every block also accepts `tone` and `fill` automatically.

### Containers

Set `children: true` and render the children with `c.kids(b)`:

```js
{ name: "sidebar-layout", group: "Layout", summary: "...", children: true, props: {},
  render: (b, c) => `<div class="sidebar-layout">${c.kids(b)}</div>` }
```

If a block hides other blocks somewhere other than `children` (like `tabs` and `table` do), add `nested(b)` returning `[pathSuffix, block]` pairs so the validator can look inside, and `targets(b)` for extra `go` links.

### Render helpers (`c`)

| Helper | Use |
|---|---|
| `c.tx(v)` | Text content. Escapes HTML and expands translations. |
| `c.attr(name, v)` | An attribute whose value may be translated. |
| `c.plain(v)` | Plain string of a text value (first language). |
| `c.esc(s)` | Escape a raw string. **Always escape anything you interpolate.** |
| `c.act(b)` | `data-go` / `data-toast` / `data-open` / `data-close` attributes for clickable blocks. |
| `c.icon(name, size, filled)` | A hand-drawn icon. |
| `c.inner(b)` | Icon + label markup for buttons. |
| `c.label(b)` | A form label from `b.label`. |
| `c.block(x)` / `c.kids(b)` | Render one nested block / all `children`. |

## Change the look

Everything visual is in `src/styles/openink.css`, driven by CSS variables at the top. Add new component styles there. Projects can also override tokens with their own `theme:` file, without touching the framework.

## Add runtime behaviour

Code that runs in the generated page lives in `src/runtime/` and is bundled into `openink.js` by esbuild. Interactive blocks mark their markup with `data-*` attributes (`data-chips`, `data-tabs`, …) and `src/runtime/index.js` handles the clicks by delegation.

Remember that wired-elements only draw when their size changes and draw at 0×0 while hidden. Call `redraw()` from `src/runtime/dom.js` after you show something that was hidden.

## Use it from code

```js
import { build, validate, exportFiles } from "@mediusware/openink";

await build({ dir: "./my-project", out: "dist" });
await exportFiles({ dir: "./my-project", png: true });
```

See `src/index.js` for the full API.
