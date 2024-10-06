import button from "./components/button.js";
import buttonGroup from "./components/button-group.js";
import link from "./components/link.js";

export default (theme, options) => ({
  ...button(theme, options),
  ...buttonGroup(theme, options),
  ...link(theme, options),
});
