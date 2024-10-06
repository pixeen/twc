import { memoize } from "./memoize.js";
import { replace } from "./replace.js";

/**
 * Memorizes a given function by caching its computed results.
 *
 * The `memoize` function takes another function `fn` as input and returns a new function
 * that caches the results of `fn`. When the memoized function is called again with
 * the same arguments, it returns the cached result instead of recomputing it.
 *
 * @param {Function} fn - The function to memoize.
 * @returns {Function} The memoized version of `fn`.
 */
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
