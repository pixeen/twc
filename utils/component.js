import { memoize } from "./memoize.js";
import { replace } from "./replace.js";

/**
 * Generates component styles based on theme and variant options.
 *
 * @param {string} componentName - The name of the component.
 * @param {Function} [baseStylesFn=() => {}] - A function to generate base styles for the component.
 * @param {Function} [variantStylesFn=() => {}] - A function to generate variant styles for the component.
 * @param {Function} [defaultStylesFn=() => {}] - A function to generate default styles for the component.
 *
 * @returns {Function} A function that generates the component's styles based on the provided theme and options.
 */

const component =
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
  };

export default memoize(component);
