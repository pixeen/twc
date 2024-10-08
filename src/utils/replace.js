import _ from 'lodash'

/**
 * Replaces placeholders in a template string with values.
 *
 * @param {string} template - The template string.
 * @param {Object} replacements - An object with replacement values.
 * @returns {string} The processed string.
 */
export default (template, replacements) =>
  template.replace(/\${(\w+)}/g, (__, key) =>
    _.has(replacements, key) ? _.get(replacements, key) : `\${${key}}`
  )
