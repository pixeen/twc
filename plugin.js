import plugin from "tailwindcss/plugin";
import button from "./components/button";
import buttonGroup from "./components/button-group";
import link from "./components/link";
import colors from "tailwindcss/colors";

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents({
        ...button(theme, options),
        ...buttonGroup(theme, options),
        ...link(theme, options),
      }),
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
