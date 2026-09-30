import test from "node:test";
import assert from "node:assert/strict";
import { renderPage } from "../src/render/page.js";
import { createContext } from "../src/render/context.js";
import { blocks } from "../src/render/blocks/index.js";

const page = (spec, opts) => renderPage({ name: "T", ...spec }, opts);
const one = (block, extra = {}) => page({ screens: [{ id: "a", blocks: [block] }], ...extra });

test("all user text is HTML-escaped", () => {
  const html = one({ type: "h1", text: `<script>alert("x")</script>` });
  assert.ok(!html.includes("<script>alert"));
  assert.match(html, /&lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/);
});

test("attributes are escaped too", () => {
  const html = one({ type: "input", placeholder: `"><img src=x onerror=1>` });
  assert.ok(!html.includes(`"><img`));
});

test("translations render one span per language and swap attributes", () => {
  const html = one({ type: "input", placeholder: { en: "Name", de: "Name (de)" } }, { languages: ["en", "de"] });
  assert.match(html, /placeholder="Name"/);
  assert.match(html, /data-placeholder-de="Name \(de\)"/);
  const h = one({ type: "h1", text: { en: "Hi", de: "Hallo" } }, { languages: ["en", "de"] });
  assert.match(h, /<span data-l="en">Hi<\/span><span data-l="de">Hallo<\/span>/);
  assert.match(h, /html\[lang="de"\] \[data-l="de"\]/);
});

test("translation object without languages falls back to the first value", () => {
  assert.match(one({ type: "h1", text: { en: "Hi", de: "Hallo" } }), /<h1>Hi<\/h1>/);
});

test("nav sets: each set is rendered and hidden until its screen is shown", () => {
  const html = page({ nav: { default: [{ label: "A", go: "a" }], admin: [{ label: "B", go: "a" }] }, screens: [{ id: "a", nav: "admin", blocks: [] }] });
  assert.match(html, /<nav data-nav="default" hidden>/);
  assert.match(html, /<nav data-nav="admin" hidden>/);
  assert.match(html, /<section class="screen" id="a"[^>]*data-nav="admin"/);
});

test("a plain nav list becomes the default set", () => {
  assert.match(page({ nav: [{ label: "A", go: "a" }], screens: [{ id: "a", blocks: [] }] }), /<nav data-nav="default" hidden>/);
});

test("dev mode injects the reload poller, production does not", () => {
  assert.match(page({ screens: [{ id: "a", blocks: [] }] }, { dev: true }), /__version/);
  assert.ok(!page({ screens: [{ id: "a", blocks: [] }] }).includes("__version"));
});

test("theme adds a stylesheet link after the base styles", () => {
  const html = page({ theme: "theme.css", screens: [{ id: "a", blocks: [] }] });
  assert.ok(html.indexOf("sketchframe.css") < html.indexOf("theme.css"));
});

test("screen width and centered containers reach the markup", () => {
  const html = page({ screens: [{ id: "a", width: "narrow", blocks: [{ type: "card", center: true, children: [] }, { type: "stack", center: true, children: [] }] }] });
  assert.match(html, /<section class="screen" id="a"[^>]*data-width="narrow"/);
  assert.equal((html.match(/center-items/g) || []).length, 2);
});

test("tone and fill wrap any block; without them there is no wrapper", () => {
  assert.match(one({ type: "text", text: "x", tone: "blue" }), /<div class="tone" data-tone="blue"><p/);
  assert.match(one({ type: "text", text: "x", fill: true }), /<div class="tone" data-fill><p/);
  assert.match(one({ type: "text", text: "x", tone: "red", fill: true }), /<div class="tone" data-tone="red" data-fill>/);
  assert.ok(!one({ type: "text", text: "x" }).includes('class="tone"'));
});

test("a screen tone is set on the section", () => {
  assert.match(page({ screens: [{ id: "a", tone: "green", blocks: [] }] }), /<section class="screen" id="a"[^>]*data-tone="green"/);
});

test("buttons render icons and stay usable without a label", () => {
  const withBoth = one({ type: "button", icon: "heart", label: "Like" });
  assert.match(withBoth, /<sf-icon name="heart"[^>]*><\/sf-icon><span class="btn-label">Like<\/span>/);
  const iconOnly = one({ type: "button", icon: "heart" });
  assert.ok(!iconOnly.includes("btn-label"));
});

test("open and close actions become data attributes", () => {
  assert.match(one({ type: "button", label: "x", open: "share" }), /data-open="share"/);
  assert.match(one({ type: "button", label: "x", close: true }), /data-close/);
});

test("global modals are rendered outside the screens", () => {
  const html = page({ modals: [{ id: "share", title: "Share", children: [{ type: "text", text: "hi" }] }], screens: [{ id: "a", blocks: [] }] });
  const modalAt = html.indexOf('data-modal="share"');
  assert.ok(modalAt > html.indexOf("</main>"), "modal must come after </main>");
});

test("themes and colors: preset stylesheet, custom file, and :root overrides", () => {
  assert.match(page({ theme: "dark", screens: [{ id: "a", blocks: [] }] }), /href="theme-dark\.css"/);
  assert.ok(!page({ theme: "sketch", screens: [{ id: "a", blocks: [] }] }).includes("theme-sketch"));
  assert.match(page({ theme: "my.css", screens: [{ id: "a", blocks: [] }] }), /href="my\.css"/);
  const colored = page({ colors: { accent: "#f00", card: "#eee" }, screens: [{ id: "a", blocks: [] }] });
  assert.match(colored, /<style>:root\{--accent:#f00;--card-bg:#eee\}<\/style>/);
});

test("chart values reach the element, accordion opens the requested section", () => {
  assert.match(one({ type: "chart", kind: "bar", values: [1, 2, 3] }), /<sf-chart kind="bar" h="200" values="1,2,3">/);
  const acc = one({ type: "accordion", open: 1, items: [{ label: "a", children: [] }, { label: "b", children: [] }] });
  assert.equal((acc.match(/<details open>/g) || []).length, 1);
});

test("unknown block type throws with the list of known types", () => {
  assert.throws(() => one({ type: "nope" }), /Unknown block type "nope"\. Known types: .*button/);
});

test("clickable blocks carry data-go and data-toast", () => {
  const html = one({ type: "button", label: "x", go: "a", toast: "Done" });
  assert.match(html, /data-go="a" data-toast="Done"/);
});

test("every block renders from its own minimal props without throwing", () => {
  const ctx = createContext({ name: "T", screens: [] });
  const samples = {
    text: { text: "x" }, h1: { text: "x" }, h2: { text: "x" }, h3: { text: "x" }, list: { items: ["a"] }, note: { text: "x" }, badge: { text: "x" },
    button: { label: "x" }, chips: { options: ["a"] }, tabs: { tabs: [{ label: "t", children: [] }] }, nextbar: {},
    select: { options: ["a"] }, radio: { options: ["a"] }, checkbox: { label: "x" }, toggle: { label: "x" },
    table: { columns: ["c"], rows: [["x"]] },
    icon: { name: "home" }, hero: { title: "x" }, stat: { label: "x", value: "1" }, link: { text: "x" },
    alert: { text: "x" }, progress: { value: 50 }, breadcrumb: { items: ["a", "b"] }, steps: { items: ["a", "b"] },
    tabbar: { items: [{ icon: "home", go: "a" }] }, modal: { id: "m" }, accordion: { items: [{ label: "a", children: [] }] },
    chart: { kind: "donut", values: [1, 2] },
  };
  for (const def of blocks) {
    const html = def.render({ type: def.name, ...(samples[def.name] ?? {}) }, ctx);
    assert.equal(typeof html, "string", def.name);
    assert.ok(html.length > 0, def.name);
  }
});
