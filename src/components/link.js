/**
 * Link
 *
 * @version 0.0.1-dev
 *
 * Changelog:
 * - 0.0.1-dev: Initial version
 *
 * Variants:
 * - ...
 *
 */

import isAction from "../shared/is-action.js";
import colors from "tailwindcss/colors";

export default (theme) => ({
  base: {
    ...isAction(theme),
    color: theme("colors.secondary.700", colors.blue["700"]),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: `${theme("spacing[0.5]")} solid ${theme("colors.secondary.500", colors.blue["500"])}`,
    },
    "&:hover": {
      textDecoration: "underline",
      color: theme("colors.secondary.900", colors.blue["900"]),
    },
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});
