import plugin from "tailwindcss/plugin";
import twcComponents from "./components.js";
import theme from "./theme.js";

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents(twcComponents(theme, options)),
  (options) => ({
    theme: {
      extend: theme,
    },
  }),
);
