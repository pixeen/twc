/**
 * Creates a memoized version of the provided function. The memoized function caches its computed results
 * based on the arguments passed, avoiding redundant computations for the same inputs.
 *
 * @param {Function} fn - The function to be memoized. This function should be a pure function where the
 *                        output is determined solely by the input arguments, without relying on external
 *                        state or causing side effects.
 * @returns {Function} A new function that wraps the original function with memoization logic.
 *                     This wrapper function checks if the result for the given arguments is already cached
 *                     and returns the cached result if available, otherwise, it computes the result, caches it,
 *                     and then returns it.
 */
export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
