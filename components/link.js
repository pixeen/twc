import component from "../utils/component.js";

export default component("link", (theme) => ({
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
}));
