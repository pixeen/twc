import plugin from "tailwindcss/plugin";
import button from "./components/button";
import link from "./components/link";
import { defineComponent } from "./src/define-component.js";
import buttonGroup from "./components/button-group.js";
import checkbox from "./components/checkbox.js";
import radio from "./components/radio.js";
import label from "./components/label.js";
import paragraph from "./components/paragraph.js";
import divider from "./components/divider.js";
import textInput from "./components/text-input.js";

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents({
        ...defineComponent(`${options.prefix}button`, button(theme, options)),
        ...defineComponent(
          `${options.prefix}button-group`,
          buttonGroup(theme, options),
        ),
        ...defineComponent(`${options.prefix}link`, link(theme, options)),
        ...defineComponent(
          `${options.prefix}checkbox`,
          checkbox(theme, options),
        ),
        ...defineComponent(`${options.prefix}radio`, radio(theme, options)),
        ...defineComponent(`${options.prefix}label`, label(theme, options)),
        ...defineComponent(
          `${options.prefix}paragraph`,
          paragraph(theme, options),
        ),
        ...defineComponent(`${options.prefix}divider`, divider(theme, options)),
        ...defineComponent(
          `${options.prefix}text-input`,
          textInput(theme, options),
        ),
      }),
  (options) => ({
    theme: {
      extend: {
        colors: options.colors,
      },
    },
  }),
);
