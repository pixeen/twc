/**
 * Generates a CSS attribute selector string based on provided name and value.
 *
 * @param {Object} param - Object containing the attribute details.
 * @param {string} param.name - The name of the attribute.
 * @param {string} param.value - The value of the attribute.
 * @returns {string} A string representing a CSS attribute selector.
 */
export default ({ name, value }) => {
  return `[${name}="${value}"]`
}
