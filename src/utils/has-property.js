/**
 * Checks if the given object has the specified property as its own property.
 *
 * This function uses `Object.prototype.hasOwnProperty` to determine whether
 * the object has the property as one of its own properties, as opposed to
 * inheriting it from its prototype chain.
 *
 * @param {Object} obj - The object to check.
 * @param {string} key - The property key to look for.
 * @returns {boolean} - True if the object has the specified property, false otherwise.
 */
export const hasProperty = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
