import plugin from "tailwindcss/plugin";
import button from "./components/button";
import link from "./components/link";
import { defineComponent } from "./src/define-component.js";
import buttonGroup from "./components/button-group.js";
import checkbox from "./components/checkbox.js";
import radio from "./components/radio.js";
import label from "./components/label.js";
import paragraph from "./components/paragraph.js";

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents({
        ...defineComponent("button", button(theme, options)),
        ...defineComponent("button-group", buttonGroup(theme, options)),
        ...defineComponent("link", link(theme, options)),
        ...defineComponent("checkbox", checkbox(theme, options)),
        ...defineComponent("radio", radio(theme, options)),
        ...defineComponent("label", label(theme, options)),
        ...defineComponent("paragraph", paragraph(theme, options)),
      }),
  (options) => ({
    theme: {
      extend: {
        colors: options.colors,
      },
    },
  }),
);
