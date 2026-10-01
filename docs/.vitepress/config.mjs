import { defineConfig } from "vitepress";

const repo = "https://github.com/mediuswareltd/openink";

export default defineConfig({
  title: "Open Ink",
  description: "Describe screens in YAML, get a clickable hand-drawn wireframe prototype.",
  base: "/openink/",
  cleanUrls: true,
  lastUpdated: true,
  // The live demos in public/demos are plain HTML built by `npm run docs:demos`, not VitePress pages;
  // localhost links point at the reader's own dev server.
  ignoreDeadLinks: [/^\/demos\//, /^https?:\/\/localhost/],
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/openink/mark-black.svg" }]],
  themeConfig: {
    logo: { light: "/logo-black.svg", dark: "/logo-white.svg", alt: "Open Ink" },
    siteTitle: false,
    nav: [
      { text: "Guide", link: "/getting-started", activeMatch: "^/(getting-started|spec|ai-assistants|extending|architecture)" },
      { text: "Blocks", link: "/blocks" },
      { text: "Recipes", link: "/recipes" },
      { text: "Examples", link: "/examples" },
      { text: "About", link: "/about" },
      { text: "Changelog", link: `${repo}/blob/main/CHANGELOG.md` },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting started", link: "/getting-started" },
          { text: "Spec reference", link: "/spec" },
          { text: "Block reference", link: "/blocks" },
          { text: "Recipes", link: "/recipes" },
          { text: "Working with AI assistants", link: "/ai-assistants" },
        ],
      },
      {
        text: "Going further",
        items: [
          { text: "Extending", link: "/extending" },
          { text: "Architecture", link: "/architecture" },
        ],
      },
      {
        text: "Project",
        items: [
          { text: "Live examples", link: "/examples" },
          { text: "About", link: "/about" },
          { text: "Contributing", link: `${repo}/blob/main/CONTRIBUTING.md` },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: repo },
      { icon: "npm", link: "https://www.npmjs.com/package/openink" },
    ],
    editLink: { pattern: `${repo}/edit/main/docs/:path`, text: "Edit this page on GitHub" },
    search: { provider: "local" },
    outline: [2, 3],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © Mediusware",
    },
  },
});
