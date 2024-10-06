import plugin from "tailwindcss/plugin";
import button from "./components/button";
import link from "./components/link";
import { defineComponent } from "./src/define-component.js";
import buttonGroup from "./components/button-group.js";

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents({
        ...defineComponent("button", button(theme, options)),
        ...defineComponent("button-group", buttonGroup(theme, options)),
        ...defineComponent("link", link(theme, options)),
      }),
  (options) => ({
    theme: {
      extend: {
        colors: options.colors,
      },
    },
  }),
);
