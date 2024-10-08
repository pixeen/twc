/**
 * Paragraph
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

import colors from "tailwindcss/colors";

export default (theme) => ({
  base: {
    color: theme("colors.primary.900", colors.slate["900"]),
    fontSize: theme("fontSize.DEFAULT"),
    marginBottom: "1rem",
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});
