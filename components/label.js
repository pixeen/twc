import colors from "tailwindcss/colors";

export default (theme) => ({
  base: {
    color: theme("colors.primary.800", colors.slate["800"]),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme("fontSize.DEFAULT"),
    cursor: "pointer",
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});
