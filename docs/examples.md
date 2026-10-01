# Live examples

Each example below is the real output of `openink build`, made from the spec in the repository's [`examples/`](https://github.com/mediuswareltd/openink/tree/main/examples) folder. Click around: buttons, cards, tabs and modals all work.

| Example | Shows | Spec |
|---|---|---|
| <a href="/openink/demos/photo-sharing/" target="_blank">Photo sharing</a> | 17 screens: feed, stories, reels, explore, messages, profile, a phone-frame mobile view, global modals, and colour on only a few parts | [spec.yaml](https://github.com/mediuswareltd/openink/blob/main/examples/photo-sharing/spec.yaml) |
| <a href="/openink/demos/saas-admin/" target="_blank">SaaS admin</a> | The `color` theme: stat cards, area/bar/donut charts, tables, an invite modal | [spec.yaml](https://github.com/mediuswareltd/openink/blob/main/examples/saas-admin/spec.yaml) |
| <a href="/openink/demos/rental-portal/" target="_blank">Rental portal</a> | Two languages and two header nav sets (public vs owner) | [spec.yaml](https://github.com/mediuswareltd/openink/blob/main/examples/rental-portal/spec.yaml) |
| <a href="/openink/demos/gallery/" target="_blank">Gallery</a> | Every block on one screen per family | [spec.yaml](https://github.com/mediuswareltd/openink/blob/main/examples/gallery/spec.yaml) |
| <a href="/openink/demos/gallery-dark/" target="_blank">Gallery, dark theme</a> | The same gallery built with `--theme dark` | [spec.yaml](https://github.com/mediuswareltd/openink/blob/main/examples/gallery/spec.yaml) |

## Run one locally

```bash
git clone https://github.com/mediuswareltd/openink.git
cd openink
npm install
npx openink dev examples/photo-sharing
```

## Themes

<table>
  <tr>
    <td><img src="./img/theme-sketch.png" alt="sketch theme" /><br /><sub><code>sketch</code> (default)</sub></td>
    <td><img src="./img/theme-color.png" alt="color theme" /><br /><sub><code>color</code></sub></td>
    <td><img src="./img/theme-pastel.png" alt="pastel theme" /><br /><sub><code>pastel</code></sub></td>
  </tr>
  <tr>
    <td><img src="./img/theme-blueprint.png" alt="blueprint theme" /><br /><sub><code>blueprint</code></sub></td>
    <td><img src="./img/theme-dark.png" alt="dark theme" /><br /><sub><code>dark</code></sub></td>
    <td></td>
  </tr>
</table>
