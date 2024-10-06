import canFocus from "./can-focus.js";
import canDisable from "./can-disable.js";

export default (theme) => ({
  ...canFocus(theme),
  ...canDisable(theme),
  cursor: "pointer",
  whiteSpace: "nowrap",
  lineHeight: theme("lineHeight.none"),
  fontWeight: theme("fontWeight.medium"),
  borderRadius: theme("borderRadius.DEFAULT"),
});
