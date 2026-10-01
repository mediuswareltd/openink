import DefaultTheme from "vitepress/theme";
import Example from "./Example.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Example", Example);
  },
};
