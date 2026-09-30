import test from "node:test";
import assert from "node:assert/strict";
import { validate } from "../src/spec/validate.js";

const spec = (over = {}) => ({
  name: "T",
  screens: [{ id: "a", blocks: [{ type: "button", label: "Go", go: "b" }] }, { id: "b", blocks: [] }],
  ...over,
});
const messages = (r) => [...r.errors, ...r.warnings].map((i) => `${i.path}: ${i.message}`).join("\n");

test("a correct spec has no errors or warnings", () => {
  const r = validate(spec());
  assert.deepEqual(r, { errors: [], warnings: [] });
});

test("name and screens are required", () => {
  const r = validate({});
  assert.match(messages(r), /`name` is required/);
  assert.match(messages(r), /`screens` must be a non-empty list/);
});

test("unknown block type errors with a suggestion", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "buton", label: "x" }] }] }));
  assert.equal(r.errors.length, 1);
  assert.match(r.errors[0].message, /Unknown block type "buton"\. Did you mean "button"\?/);
  assert.equal(r.errors[0].path, "screens[0].blocks[0].type");
});

test("misspelt property is a warning with a suggestion", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "button", lable: "x", label: "y" }] }] }));
  assert.equal(r.errors.length, 0);
  assert.match(r.warnings[0].message, /no property "lable"\. Did you mean "label"\?/);
});

test("an unquoted comma inside { } gets an explanation instead of a confusing property warning", () => {
  // YAML: { type: input, placeholder: Search a, b and c }  ->  key "b and c" with null value
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "input", placeholder: "Search a", "b and c": null }] }] }));
  assert.match(r.warnings[0].message, /A comma inside \{ \.\.\. \} ends the value.*quotes/);
});

test("x- top-level keys are allowed (for YAML anchors) but other unknown keys warn", () => {
  const r = validate(spec({ "x-post": { type: "text", text: "x" }, extra: 1 }));
  assert.equal(r.warnings.length, 1);
  assert.match(r.warnings[0].message, /Unknown top-level field "extra"/);
});

test("screen width must be narrow, medium or wide", () => {
  assert.deepEqual(validate(spec({ screens: [{ id: "a", width: "narrow", blocks: [] }] })).errors, []);
  const r = validate(spec({ screens: [{ id: "a", width: "tiny", blocks: [] }] }));
  assert.match(r.errors[0].message, /`width` must be one of: narrow, medium, wide/);
});

test("tone and fill are accepted on any block and checked", () => {
  assert.deepEqual(validate(spec({ screens: [{ id: "a", tone: "pink", blocks: [{ type: "text", text: "x", tone: "blue", fill: true }] }] })).errors, []);
  const r = validate(spec({ screens: [{ id: "a", tone: "mauve", blocks: [{ type: "text", text: "x", tone: "brown", fill: "yes" }] }] }));
  assert.equal(r.errors.length, 3);
  assert.match(messages(r), /`tone` must be one of: blue, green/);
});

test("icons are checked, with a suggestion", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "button", icon: "hart" }] }] }));
  assert.match(r.errors[0].message, /Unknown icon "hart"\. Did you mean "heart"\?/);
  assert.deepEqual(validate(spec({ screens: [{ id: "a", blocks: [{ type: "button", icon: "heart" }, { type: "icon", name: "star", filled: true }] }] })).errors, []);
});

test("modals: open must point at a defined modal (in a screen or in the global list); ids are unique", () => {
  const ok = validate(spec({ modals: [{ id: "m1", children: [] }], screens: [{ id: "a", blocks: [{ type: "button", label: "x", open: "m1" }, { type: "modal", id: "m2" }, { type: "button", label: "y", open: "m2" }] }] }));
  assert.deepEqual(ok.errors, []);
  const bad = validate(spec({ modals: [{ id: "m1" }], screens: [{ id: "a", blocks: [{ type: "button", label: "x", open: "mm" }, { type: "modal", id: "m1" }] }] }));
  assert.match(messages(bad), /Opens unknown modal "mm"/);
  assert.match(messages(bad), /Duplicate modal id "m1"/);
});

test("theme and colors are validated", () => {
  assert.deepEqual(validate(spec({ theme: "dark", colors: { accent: "#e11d48", card: "white" } })).errors, []);
  assert.deepEqual(validate(spec({ theme: "brand.css" })).errors, []);
  assert.match(messages(validate(spec({ theme: "darkk" }))), /Unknown theme "darkk".*Did you mean "dark"\?/);
  assert.match(messages(validate(spec({ colors: { acent: "red" } }))), /Unknown colour "acent".*Did you mean "accent"\?/);
  assert.match(messages(validate(spec({ colors: { accent: "red; background: url(x)" } }))), /must be a CSS colour/);
});

test("tabbar items and nav items may use icons and are link-checked", () => {
  const r = validate(spec({
    nav: [{ icon: "home", go: "a" }],
    screens: [{ id: "a", blocks: [{ type: "tabbar", items: [{ icon: "home", go: "a" }, { icon: "user", go: "nowhere" }] }] }],
  }));
  assert.match(messages(r), /unknown screen "nowhere"/);
  assert.equal(r.errors.length, 1);
});

test("new structured props are checked: accordion items, chart values", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "accordion", items: [{ children: [] }] }, { type: "chart", values: [1, "x"] }] }] }));
  assert.match(messages(r), /Each entry needs a `label`/);
  assert.match(messages(r), /`values` must be a list of numbers/);
});

test("missing required prop is an error", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "h1" }] }] }));
  assert.match(messages(r), /"h1" requires `text`/);
});

test("wrong prop types are errors", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "grid", cols: "3", children: [] }, { type: "badge", text: "x", status: "red" }, { type: "button", label: "x", primary: "yes" }] }] }));
  assert.equal(r.errors.length, 3);
  assert.match(messages(r), /`cols` must be a number/);
  assert.match(messages(r), /must be one of: on, wait, off/);
  assert.match(messages(r), /`primary` must be true or false/);
});

test("dead links are errors (blocks, nav and table rows)", () => {
  const r = validate(
    spec({
      nav: [{ label: "x", go: "nope" }],
      screens: [
        { id: "a", blocks: [{ type: "button", label: "x", go: "missing" }, { type: "table", columns: ["c"], rows: [{ cells: ["x"], go: "gone" }] }] },
      ],
    })
  );
  const text = messages(r);
  assert.match(text, /unknown screen "nope"/);
  assert.match(text, /unknown screen "missing"/);
  assert.match(text, /unknown screen "gone"/);
});

test("duplicate and malformed screen ids are errors", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [] }, { id: "a", blocks: [] }, { id: "1x", blocks: [] }] }));
  assert.match(messages(r), /Duplicate screen id "a"/);
  assert.match(messages(r), /must start with a letter/);
});

test("children are only allowed on container blocks", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "h1", text: "x", children: [] }] }] }));
  assert.match(messages(r), /"h1" cannot have children/);
});

test("nested blocks are validated (children, tabs, table cells)", () => {
  const r = validate(
    spec({
      screens: [
        {
          id: "a",
          blocks: [
            { type: "card", children: [{ type: "nope" }] },
            { type: "tabs", tabs: [{ label: "t", children: [{ type: "nope2" }] }] },
            { type: "table", columns: ["c"], rows: [[{ type: "nope3" }]] },
          ],
        },
      ],
    })
  );
  const text = messages(r);
  assert.match(text, /screens\[0\]\.blocks\[0\]\.children\[0\]\.type: Unknown block type "nope"/);
  assert.match(text, /screens\[0\]\.blocks\[1\]\.tabs\[0\]\.children\[0\]\.type: Unknown block type "nope2"/);
  assert.match(text, /screens\[0\]\.blocks\[2\]\.rows\[0\]\[0\]\.type: Unknown block type "nope3"/);
});

test("translations: missing language warns, unknown language warns, no languages warns", () => {
  const withLangs = validate(spec({ languages: ["en", "de"], screens: [{ id: "a", blocks: [{ type: "h1", text: { en: "Hi" } }, { type: "h2", text: { en: "x", fr: "y", de: "z" } }] }] }));
  assert.match(messages(withLangs), /Missing translation: de/);
  assert.match(messages(withLangs), /Language "fr" is not listed/);
  const noLangs = validate(spec({ screens: [{ id: "a", blocks: [{ type: "h1", text: { en: "Hi" } }] }] }));
  assert.match(messages(noLangs), /no `languages`/);
});

test("screen using an undefined nav set is an error", () => {
  const r = validate(spec({ nav: { default: [{ label: "x", go: "a" }] }, screens: [{ id: "a", nav: "admn", blocks: [] }] }));
  assert.match(messages(r), /nav set "admn" which is not defined/);
});

test("screens that nothing links to produce a warning", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [] }, { id: "orphan", blocks: [] }] }));
  assert.equal(r.errors.length, 0);
  assert.match(messages(r), /Screen "orphan" is not linked from anywhere/);
});

test("bare strings are accepted as text shorthand", () => {
  const r = validate(spec({ screens: [{ id: "a", blocks: [{ type: "row", children: ["hello"] }] }] }));
  assert.deepEqual(r.errors, []);
});
