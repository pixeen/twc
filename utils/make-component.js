import { memoize } from "./memoize.js";
import { replace } from "./replace.js";

/**
 * A higher-order function that generates component styles based on theme and options.
 *
 * @param {string} componentName - The name of the component.
 * @param {Function} baseStylesFn - Function that returns the base styles object.
 * @param {Function} variantStylesFn - Function that returns the variant styles object.
 * @param {Function} defaultStylesFn - Function that returns the default styles object.
 * @returns {Function} - A function that takes a theme and options, then returns the computed styles.
 */
export const makeComponent = memoize(
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
