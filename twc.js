import plugin from "tailwindcss/plugin";
import button from "./components/button.js";
import buttonGroup from "./components/button-group.js";
import link from "./components/link.js";
import colors from "tailwindcss/colors";

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) => {
      addComponents({
        ...button(theme, options),
        ...buttonGroup(theme, options),
        ...link(theme, options),
      });
    },
  (options) => ({
    theme: {
      extend: {
        colors: {
          primary: colors.zinc,
          positive: colors.green,
          negative: colors.red,
          secondary: colors.blue,
        },
      },
    },
  }),
);
