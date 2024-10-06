import canFocus from "./shared/can-focus.js";

export default (theme) => ({
  base: {
    ...canFocus(theme),
    outlineOffset: 0,
    color: theme("colors.secondary.700"),
    display: "inline-flex",
    paddingLeft: theme("spacing[0.5]"),
    paddingRight: theme("spacing[0.5]"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme("borderRadius.DEFAULT"),
    "&:focus": {
      outline: `${theme("spacing[0.5]")} solid ${theme("colors.secondary.500")}`,
    },
    "&:hover": {
      textDecoration: "underline",
      color: theme("colors.secondary.900"),
    },
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});
