import plugin from "tailwindcss/plugin";
import { defineComponent } from "./src/define-component.js";
import buttonGroup from "./src/components/button-group.js";
import checkbox from "./src/components/checkbox.js";
import button from "./src/components/button.js";
import link from "./src/components/link.js";
import radio from "./src/components/radio.js";
import divider from "./src/components/divider.js";
import textInput from "./src/components/text-input.js";
import paragraph from "./src/components/paragraph.js";
import label from "./src/components/label.js";

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents({
        ...defineComponent(`button`, button(theme), options),
        ...defineComponent(`button-group`, buttonGroup(theme), options),
        ...defineComponent(`link`, link(theme), options),
        ...defineComponent(`checkbox`, checkbox(theme), options),
        ...defineComponent(`radio`, radio(theme), options),
        ...defineComponent(`label`, label(theme), options),
        ...defineComponent(`paragraph`, paragraph(theme), options),
        ...defineComponent(`divider`, divider(theme), options),
        ...defineComponent(`text-input`, textInput(theme), options),
      }),
  (options) => ({
    theme: {
      extend: {
        colors: options.colors,
      },
    },
  }),
);
