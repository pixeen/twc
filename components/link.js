export default (theme) => ({
  base: {
    color: theme("colors.secondary.700"),
    display: "inline-flex",
    paddingLeft: theme("spacing[0.5]"),
    paddingRight: theme("spacing[0.5]"),
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      textDecoration: "underline",
      color: theme("colors.secondary.900"),
    },
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: {},
});
