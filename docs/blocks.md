# Block reference

<!-- Generated from src/render/blocks by `npm run generate`. Do not edit by hand. -->

Every entry in a screen's `blocks:` list is `{ type: <name>, ...props }`. Blocks marked **children** also take a `children:` list of blocks.
A `text` value is a string, a number, or a translation object such as `{ en: "Hello", de: "Hallo" }` (needs `languages:` in the spec).

## Props every block accepts

| Prop | Type | Description |
|---|---|---|
| `tone` | `blue` \| `green` \| `yellow` \| `red` \| `purple` \| `pink` \| `orange` \| `teal` \| `gray` | Colour this block and everything inside it: outlines, text and drawn shapes. |
| `fill` | boolean | Give the block a tinted background (uses `tone`, or a neutral tint). |

## Actions

Blocks that list `go`, `toast`, `open` or `close` in their props are clickable (`button`, `card`, `avatar`, `link`, `nextbar`, nav and tab-bar items) and accept:

| Prop | Type | Description |
|---|---|---|
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |
| `open` | string | Id of a `modal` block to open when clicked. |
| `close` | boolean | Close the modal this block is inside when clicked. |

## Icons

Used by `icon`, `button.icon`, nav items and `tabbar`:

`home` · `search` · `heart` · `comment` · `share` · `bookmark` · `plus` · `bell` · `user` · `users` · `mail` · `settings` · `camera` · `image` · `video` · `star` · `menu` · `more` · `close` · `check` · `arrow-right` · `arrow-left` · `chevron-down` · `chevron-right` · `play` · `pin` · `trash` · `edit` · `upload` · `download` · `lock` · `cart` · `chart` · `calendar` · `filter` · `info` · `send`

## Layout

### `stack` · children

Vertical stack of blocks.

| Prop | Type | Description |
|---|---|---|
| `center` | boolean | Center the children horizontally. |

\* required

### `row` · children

Horizontal row that wraps on small screens. Images, videos, maps and charts in a row are 4:3 thumbnails of their height.

| Prop | Type | Description |
|---|---|---|
| `between` | boolean | Push the first and last child to opposite ends. |
| `center` | boolean | Center the children. |

\* required

### `grid` · children

Equal-width columns. Collapses to one column on phones.

| Prop | Type | Description |
|---|---|---|
| `cols` | number | Number of columns (default 2). |

\* required

### `card` · children

Hand-drawn box around related blocks. Clickable when `go` is set.

| Prop | Type | Description |
|---|---|---|
| `title` | text | Small heading at the top of the card. |
| `dash` | boolean | No fill (a lighter, secondary card). |
| `center` | boolean | Center the content horizontally. |
| `elevation` | number | Shadow layers, 1 to 5 (default 1). |
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |
| `open` | string | Id of a `modal` block to open when clicked. |
| `close` | boolean | Close the modal this block is inside when clicked. |

\* required

### `accordion`

Collapsible sections (FAQ, filters, settings groups).

| Prop | Type | Description |
|---|---|---|
| `items` * | list of `{ label, children }` | List of `{ label, children }`. |
| `open` | number | Index of the section open at first (default: all closed). |

\* required

### `device` · children

Wrap screens in a phone, tablet or browser frame. Ideal for mobile-app and responsive sketches.

| Prop | Type | Description |
|---|---|---|
| `kind` | `phone` \| `tablet` \| `browser` | Frame type (default `phone`). |
| `title` | text | Address shown in the browser bar. |

\* required

### `divider`

Hand-drawn horizontal line.

### `spacer`

Empty vertical space.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px (default 16). |

\* required

## Text

### `h1`

Level 1 heading.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Heading text. |

\* required

### `h2`

Level 2 heading.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Heading text. |

\* required

### `h3`

Level 3 heading.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Heading text. |

\* required

### `text`

Paragraph. A bare string in a `children` list is shorthand for this block.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Paragraph text. |
| `muted` | boolean | Grey, smaller text. |
| `bold` | boolean | Bold text. |

\* required

### `list`

Bulleted list.

| Prop | Type | Description |
|---|---|---|
| `items` * | list of text | List items. |

\* required

### `note`

Yellow sticky-note annotation. Use it for behaviour a sketch cannot show.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Note text. |

\* required

### `badge`

Small status pill.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Badge text. |
| `status` | `on` \| `wait` \| `off` | Colour: `on` green, `wait` orange, `off` grey. |

\* required

## Content

### `icon`

Hand-drawn icon.

| Prop | Type | Description |
|---|---|---|
| `name` * | `home` \| `search` \| `heart` \| `comment` \| `share` \| `bookmark` \| `plus` \| `bell` \| `user` \| `users` \| `mail` \| `settings` \| `camera` \| `image` \| `video` \| `star` \| `menu` \| `more` \| `close` \| `check` \| `arrow-right` \| `arrow-left` \| `chevron-down` \| `chevron-right` \| `play` \| `pin` \| `trash` \| `edit` \| `upload` \| `download` \| `lock` \| `cart` \| `chart` \| `calendar` \| `filter` \| `info` \| `send` | Icon name. |
| `size` | number | Size in px (default 22). |
| `filled` | boolean | Solid instead of outline (heart, star, bookmark…). |

\* required

### `avatar`

Round profile picture with an optional name and sub-line. Clickable.

| Prop | Type | Description |
|---|---|---|
| `name` | text | Bold name next to the picture. |
| `sub` | text | Smaller line under the name. |
| `size` | number | Picture size in px (default 44). |
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |
| `open` | string | Id of a `modal` block to open when clicked. |
| `close` | boolean | Close the modal this block is inside when clicked. |

\* required

### `hero` · children

Big headline block for landing pages. Put call-to-action buttons (or an image) in `children`.

| Prop | Type | Description |
|---|---|---|
| `title` * | text | Headline. |
| `text` | text | Supporting sentence. |
| `align` | `left` \| `center` | Text alignment (default `center`). |

\* required

### `stat`

Number card for dashboards: label, big value and a change indicator.

| Prop | Type | Description |
|---|---|---|
| `label` * | text | What is measured. |
| `value` * | text | The number. |
| `delta` | text | Change, e.g. `+8%`. |
| `trend` | `up` \| `down` \| `flat` | Colours the change: `up` green, `down` orange, `flat` grey (default `up`). |

\* required

### `rating`

Star rating.

| Prop | Type | Description |
|---|---|---|
| `value` | number | Filled stars (default 4). |
| `max` | number | Total stars (default 5). |
| `text` | text | Text after the stars, e.g. `(128 reviews)`. |

\* required

### `link`

Underlined text link.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Link text. |
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |
| `open` | string | Id of a `modal` block to open when clicked. |
| `close` | boolean | Close the modal this block is inside when clicked. |

\* required

## Media

### `image`

Image placeholder: hand-drawn box with a cross. Use `round` for avatars.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px. |
| `label` | text | Caption centered in the box. |
| `round` | boolean | Draw a circle instead of a box. |

\* required

### `map`

Map placeholder with a pin.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px. |
| `label` | text | Caption centered in the box. |

\* required

### `box`

Generic hand-drawn box, for ads, embeds, anything else.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px. |
| `label` | text | Caption centered in the box. |

\* required

### `video`

Video placeholder with a play button.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px. |
| `label` | text | Caption centered in the box. |

\* required

### `carousel`

Swipeable gallery: image placeholder with arrows and page dots.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px. |
| `label` | text | Caption centered in the box. |
| `count` | number | Number of slides shown as dots (default 4). |

\* required

### `dropzone`

Dashed upload area with an arrow.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px. |
| `label` | text | Caption centered in the box. |

\* required

### `chart`

Hand-drawn chart with sample data. It shows where a chart goes and what kind it is.

| Prop | Type | Description |
|---|---|---|
| `kind` | `line` \| `area` \| `bar` \| `pie` \| `donut` | Chart type (default `line`). |
| `h` | number | Height in px. |
| `values` | list of numbers | Your own data points. Leave out for sample data. |
| `label` | text | Caption in the corner. |

\* required

## Forms

### `input`

Single-line text field.

| Prop | Type | Description |
|---|---|---|
| `label` | text | Label shown above the control. |
| `placeholder` | text | Placeholder text. |
| `value` | text | Pre-filled value. |
| `inputType` | string | HTML input type: `text`, `email`, `password`, `number`… |
| `disabled` | boolean | Grey out the field. |

\* required

### `search`

Search field with a magnifier.

| Prop | Type | Description |
|---|---|---|
| `placeholder` | text | Placeholder text. |

\* required

### `textarea`

Multi-line text field.

| Prop | Type | Description |
|---|---|---|
| `label` | text | Label shown above the control. |
| `placeholder` | text | Placeholder text. |
| `rows` | number | Visible rows (default 3). |

\* required

### `select`

Dropdown.

| Prop | Type | Description |
|---|---|---|
| `label` | text | Label shown above the control. |
| `options` * | list of text | Choices. |
| `selected` | number | Index of the pre-selected option (default 0). |

\* required

### `checkbox`

Checkbox with a label.

| Prop | Type | Description |
|---|---|---|
| `label` * | text | Label shown above the control. |
| `checked` | boolean | Start ticked. |

\* required

### `toggle`

On/off switch with a label.

| Prop | Type | Description |
|---|---|---|
| `label` * | text | Label shown above the control. |
| `checked` | boolean | Start switched on. |

\* required

### `radio`

Radio group.

| Prop | Type | Description |
|---|---|---|
| `label` | text | Label shown above the control. |
| `options` * | list of text | Choices. |
| `selected` | number | Index of the pre-selected option (default 0). |

\* required

### `slider`

Range slider.

| Prop | Type | Description |
|---|---|---|
| `label` | text | Label shown above the control. |
| `value` | number | Start position, 0 to 100 (default 30). |

\* required

## Actions

### `button`

Button, optionally with an icon. Navigates with `go`, opens a `modal` with `open`, shows a message with `toast`.

| Prop | Type | Description |
|---|---|---|
| `label` | text | Button text. Leave out for an icon-only button. |
| `icon` | `home` \| `search` \| `heart` \| `comment` \| `share` \| `bookmark` \| `plus` \| `bell` \| `user` \| `users` \| `mail` \| `settings` \| `camera` \| `image` \| `video` \| `star` \| `menu` \| `more` \| `close` \| `check` \| `arrow-right` \| `arrow-left` \| `chevron-down` \| `chevron-right` \| `play` \| `pin` \| `trash` \| `edit` \| `upload` \| `download` \| `lock` \| `cart` \| `chart` \| `calendar` \| `filter` \| `info` \| `send` | Icon shown before the label. |
| `primary` | boolean | Heavier border: the main action on the screen. |
| `disabled` | boolean | Grey out the button. |
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |
| `open` | string | Id of a `modal` block to open when clicked. |
| `close` | boolean | Close the modal this block is inside when clicked. |

\* required

### `chips`

Filter pills. Clicking one selects it and shows a “Results updated” toast.

| Prop | Type | Description |
|---|---|---|
| `options` * | list of text | Pill labels. |
| `active` | number | Index of the selected pill (default 0). |

\* required

### `tabs`

Tab strip. Each tab has its own list of blocks.

| Prop | Type | Description |
|---|---|---|
| `tabs` * | list of `{ label, children }` | List of `{ label, children }`. |

\* required

### `nextbar`

“Next →” strip at the bottom of a screen. Hidden in the PDF.

| Prop | Type | Description |
|---|---|---|
| `label` | text | Bold lead-in (default “Next →”). |
| `text` | text | What happens next. |
| `button` | text | Button text (default “Continue →”). |
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |
| `open` | string | Id of a `modal` block to open when clicked. |
| `close` | boolean | Close the modal this block is inside when clicked. |

\* required

## Navigation

### `breadcrumb`

Path to the current page. The last item is the current one.

| Prop | Type | Description |
|---|---|---|
| `items` * | list of text | Path segments. |

\* required

### `pagination`

Previous / page numbers / next.

| Prop | Type | Description |
|---|---|---|
| `pages` | number | Number of pages (default 5). |
| `active` | number | Current page, starting at 1 (default 1). |

\* required

### `steps`

Numbered progress through a multi-step flow (checkout, onboarding).

| Prop | Type | Description |
|---|---|---|
| `items` * | list of text | Step names. |
| `active` | number | Index of the current step, starting at 0 (default 0). |

\* required

### `tabbar`

Bottom tab bar of a mobile app: icons with small labels.

| Prop | Type | Description |
|---|---|---|
| `items` * | list of `{ icon, label, go, toast, open }` | List of `{ icon, label, go, toast, open }`. |
| `active` | number | Index of the highlighted item (default 0). |

\* required

## Feedback

### `alert`

Banner for information, success, warnings and errors.

| Prop | Type | Description |
|---|---|---|
| `text` * | text | Message. |
| `title` | text | Bold first line. |
| `kind` | `info` \| `success` \| `warning` \| `error` | Type and colour (default `info`). |

\* required

### `progress`

Progress bar.

| Prop | Type | Description |
|---|---|---|
| `value` * | number | Percent complete, 0 to 100. |
| `label` | text | Caption above the bar. |

\* required

## Overlays

### `modal` · children

Dialog that opens over the screen when a button, card or link has `open: <id>`. Close with a `close: true` button, the X, or a click outside.

| Prop | Type | Description |
|---|---|---|
| `id` * | string | Unique id; other blocks use it in `open:`. |
| `title` | text | Heading of the dialog. |
| `width` | `narrow` \| `medium` \| `wide` | Dialog width (default `medium`). |

\* required

## Data

### `table`

Table. A cell is text or a block (e.g. `badge`, `button`). A row can be `{ cells, go }` to make it clickable.

| Prop | Type | Description |
|---|---|---|
| `columns` * | list of text | Column headings. |
| `rows` * | list of rows | List of rows: `[cell, cell]` or `{ cells: [...], go: screenId }`. |

\* required

