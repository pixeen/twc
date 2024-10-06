import isAction from "./shared/is-action.js";

export default (theme) => ({
  base: {
    ...isAction(theme),
    display: "inline-flex",
    width: "1.25rem",
    height: "1.25rem",
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});
