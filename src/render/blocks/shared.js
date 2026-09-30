import { ICON_NAMES } from "../../icons.js";

/** Named colours a block or screen can be tinted with (`tone:`). Defined as CSS variables in sketchframe.css. */
export const TONES = ["blue", "green", "yellow", "red", "purple", "pink", "orange", "teal", "gray"];

/** Props every block accepts, whatever its type. Handled by the renderer, not by individual blocks. */
export const COMMON = {
  tone: { type: "string", enum: TONES, doc: "Colour this block and everything inside it: outlines, text and drawn shapes." },
  fill: { type: "boolean", doc: "Give the block a tinted background (uses `tone`, or a neutral tint)." },
};

/** Props shared by every clickable block. */
export const ACTION = {
  go: { type: "string", doc: "Id of the screen to open when clicked." },
  toast: { type: "text", doc: "Message shown in a toast when clicked." },
  open: { type: "string", doc: "Id of a `modal` block to open when clicked." },
  close: { type: "boolean", doc: "Close the modal this block is inside when clicked." },
};

export const ICON = { type: "string", enum: ICON_NAMES, doc: "Hand-drawn icon name." };
