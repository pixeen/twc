/**
 * Memorizes a given function by caching its computed results based on the arguments.
 * When the memoized function is called with the same arguments again,
 * the cached result is returned instead of invoking the function.
 *
 * @param {Function} fn - The function to be memoized.
 * @returns {Function} A new function that wraps the original function and caches its results.
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
