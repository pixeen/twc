import canFocus from "./can-focus.js";
import canDisable from "./can-disable.js";

export default (theme) => ({
  ...canFocus(theme),
  ...canDisable(theme),
  whiteSpace: "nowrap",
  lineHeight: theme("lineHeight.none"),
  fontWeight: theme("fontWeight.medium"),
  borderRadius: theme("borderRadius.DEFAULT"),
  borderWidth: theme("borderWidth.DEFAULT"),
});
