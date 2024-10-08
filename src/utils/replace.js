/**
 * Replaces placeholders within a given pattern string with corresponding values from a data object.
 *
 * This function searches for placeholders in the format `${key}` within the pattern string.
 * For each placeholder found, it replaces it with the value corresponding to the `key` in the provided `data` object.
 * If no matching key is found, the original placeholder is retained.
 *
 * @param {string} pattern - The string containing placeholders to be replaced.
 * @param {Object} data - An object containing key-value pairs where the key matches the placeholder name in the pattern.
 * @returns {string} The resulting string with placeholders replaced by their corresponding values from the data object.
 */
export default (pattern, data) => {
  return pattern.replace(/\${(\w+)}/g, (_, match) => {
    return match in data ? data[match] : `\${${match}}`
  })
}
