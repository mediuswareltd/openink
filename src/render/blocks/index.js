import layout from "./layout.js";
import text from "./text.js";
import media from "./media.js";
import forms from "./forms.js";
import actions from "./actions.js";
import data from "./data.js";

/**
 * A block is one entry in a screen's `blocks` list. Everything the framework knows about it
 * (validation, docs, JSON Schema, rendering) comes from this one definition.
 *
 * @typedef {object} PropDef
 * @property {"text"|"string"|"number"|"boolean"|"text[]"|"tabs"|"rows"} type
 *   `text` = string, number, or a `{ lang: string }` translation object.
 * @property {string} doc            Shown in the generated docs and in editor tooltips.
 * @property {boolean} [required]
 * @property {string[]} [enum]       Allowed values (for `type: "string"`).
 *
 * @typedef {object} BlockDef
 * @property {string} name           The `type:` value used in a spec.
 * @property {string} group          Section heading in the generated docs.
 * @property {string} summary        One-line description.
 * @property {boolean} [children]    Accepts a `children` list of blocks.
 * @property {Record<string, PropDef>} props
 * @property {(b: object) => Array<[string, any]>} [nested]   Extra nested blocks as [path suffix, block] pairs.
 * @property {(b: object) => string[]} [targets]              Extra screen ids this block links to.
 * @property {(b: object, ctx: import("../context.js").Context) => string} render
 */

/** @type {BlockDef[]} */
export const blocks = [...layout, ...text, ...media, ...forms, ...actions, ...data];

const byName = new Map(blocks.map((b) => [b.name, b]));
if (byName.size !== blocks.length) throw new Error("Duplicate block name in src/render/blocks");

export const getBlock = (name) => byName.get(name);
export const blockNames = () => [...byName.keys()];
