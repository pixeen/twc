import { memoize } from "./memoize.js";
import { replace } from "./replace.js";

export default memoize(
  (
    componentName,
    baseStylesFn = () => ({}),
    variantStylesFn = () => ({}),
    defaultStylesFn = () => ({}),
  ) =>
    (theme, options = {}) => {
      return Object.entries(variantStylesFn(theme)).reduce(
        (acc, [group, items = {}]) => {
          return Object.entries(items).reduce((result, [key, variantStyle]) => {
            const data = {
              componentName: componentName,
              variantName: group,
              variantOption: key,
            };
            const componentSelector = replace(options.pattern.component, data);
            const variantSelector = replace(options.pattern.variant, data);
            const baseStyle = {
              ...baseStylesFn(theme),
              ...defaultStylesFn(theme),
            };
            return {
              ...result,
              [componentSelector]: baseStyle,
              [variantSelector]: variantStyle,
            };
          }, acc);
        },
        {},
      );
    },
);
