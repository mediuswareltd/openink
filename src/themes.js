/** Built-in colour themes. `sketch` is the default (pencil grey with one orange accent). */
export const THEME_PRESETS = ["sketch", "color", "pastel", "blueprint", "dark"];

/** Design tokens a spec can override with `colors:`. */
export const COLOR_KEYS = ["ink", "paper", "muted", "line", "accent", "note", "card"];

/** Map a `colors:` key to the CSS variable it sets. */
export const colorVar = (key) => (key === "card" ? "--card-bg" : `--${key}`);

export const isPreset = (theme) => THEME_PRESETS.includes(theme);
