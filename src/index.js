/**
 * Programmatic API.
 *
 *   import { build } from "@mediusware/openink";
 *   await build({ dir: "./my-project", out: "dist" });
 */
export { build, loadSpec, SpecError } from "./build.js";
export { exportFiles } from "./export.js";
export { dev } from "./dev.js";
export { validate } from "./spec/validate.js";
export { buildSchema } from "./spec/schema.js";
export { blocksMarkdown } from "./spec/docs.js";
export { blocks } from "./render/blocks/index.js";
export { renderPage } from "./render/page.js";
