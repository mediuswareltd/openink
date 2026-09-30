# Block reference

<!-- Generated from src/render/blocks by `npm run generate`. Do not edit by hand. -->

Every entry in a screen's `blocks:` list is `{ type: <name>, ...props }`. Blocks marked **children** also take a `children:` list of blocks.
A `text` value is a string, a number, or a translation object such as `{ en: "Hello", de: "Hallo" }` (needs `languages:` in the spec).

## Layout

### `stack` · children

Vertical stack of blocks.

### `row` · children

Horizontal row that wraps on small screens.

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
| `elevation` | number | Shadow layers, 1 to 5 (default 1). |
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |

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

Generic hand-drawn box, for charts, video, ads, anything else.

| Prop | Type | Description |
|---|---|---|
| `h` | number | Height in px. |
| `label` | text | Caption centered in the box. |

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

Button. Navigates with `go`, shows a message with `toast`, or both.

| Prop | Type | Description |
|---|---|---|
| `label` * | text | Button text. |
| `primary` | boolean | Heavier border: the main action on the screen. |
| `disabled` | boolean | Grey out the button. |
| `go` | string | Id of the screen to open when clicked. |
| `toast` | text | Message shown in a toast when clicked. |

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

\* required

## Data

### `table`

Table. A cell is text or a block (e.g. `badge`, `button`). A row can be `{ cells, go }` to make it clickable.

| Prop | Type | Description |
|---|---|---|
| `columns` * | list of text | Column headings. |
| `rows` * | list of rows | List of rows: `[cell, cell]` or `{ cells: [...], go: screenId }`. |

\* required

