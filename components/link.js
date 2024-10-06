import isAction from "./shared/is-action.js";

export default (theme) => ({
  base: {
    ...isAction(theme),
    color: theme("colors.secondary.700"),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
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
