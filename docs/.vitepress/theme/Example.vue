<script setup>
// A spec beside a live, clickable preview of it. The spec goes in the default slot
// (`<<< @/snippets/<id>/spec.yaml`); the preview is that snippet built by `npm run docs:demos`.
import { onMounted, ref } from "vue";
import { withBase } from "vitepress";

const props = defineProps({
  id: { type: String, required: true },
  hint: String,
  // Draw the page at 160% and scale it down, so desktop grids keep their columns.
  zoom: Boolean,
});

const src = withBase(`/demos/${props.id}/index.html`);
const frame = ref(null);
const SCALE = 0.625;

// Grow the preview to the height of its page, so there is no scrollbar inside it.
function fit() {
  const el = frame.value;
  const doc = el?.contentDocument;
  if (!doc?.body || el.contentWindow.location.href === "about:blank") return;
  const resize = () => {
    const height = Math.ceil(doc.body.getBoundingClientRect().height);
    el.style.height = height + "px";
    el.parentElement.style.height = Math.ceil(height * (props.zoom ? SCALE : 1)) + "px";
  };
  // If the code beside it is taller, fill the rest of the box with the page colour.
  el.parentElement.style.background = el.contentWindow.getComputedStyle(doc.body).backgroundColor;
  new el.contentWindow.ResizeObserver(resize).observe(doc.body);
  resize();
}

// The preview can finish loading before the page is interactive.
onMounted(() => {
  if (frame.value?.contentDocument?.readyState === "complete") fit();
});
</script>

<template>
  <div class="oi-example" :class="{ 'oi-zoom': zoom }">
    <div class="oi-example-code"><slot /></div>
    <div class="oi-example-preview">
      <div class="oi-example-bar">
        <span /><span /><span />
        <em v-if="hint" v-html="hint" />
        <a :href="src" target="_blank">Open ↗</a>
      </div>
      <div class="oi-example-frame">
        <iframe ref="frame" :src="src" :title="`Live preview: ${id}`" scrolling="no" loading="lazy" @load="fit" />
      </div>
    </div>
  </div>
</template>

<style>
.oi-example {
  display: grid;
  grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
  align-items: stretch;
  gap: 20px;
  margin: 16px 0 32px;
}
.oi-example-code { --vp-code-font-size: 12px; }
.oi-example-code div[class*="language-"] { margin: 0 !important; height: 100%; }
.oi-example-preview {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.oi-example-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 13px;
  line-height: 20px;
}
.oi-example-bar span { width: 10px; height: 10px; border-radius: 50%; background: var(--vp-c-divider); }
.oi-example-bar em { margin-left: 8px; font-style: normal; color: var(--vp-c-text-2); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.oi-example-bar a { margin-left: auto; white-space: nowrap; }
.oi-example-frame { flex: 1 0 auto; height: 320px; overflow: hidden; }
.oi-example-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
.oi-zoom .oi-example-frame iframe { width: 160%; transform: scale(0.625); transform-origin: 0 0; }
@media (max-width: 960px) {
  .oi-example { grid-template-columns: minmax(0, 1fr); }
  .oi-example-bar em { display: none; }
}
</style>
