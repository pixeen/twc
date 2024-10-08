import _ from 'lodash'

/**
 * Generates a BEM class string.
 *
 * @param {Object} params - Parameters.
 * @param {string} params.block - BEM block name.
 * @param {string} [params.element=""] - BEM element name (optional).
 * @param {string} [params.modifier=""] - BEM modifier name (optional).
 * @returns {string} BEM class string.
 */
export default ({ block, element = '', modifier = '' }) => {
  const baseClass = `.${block}`

  if (!_.isEmpty(element) && !_.isEmpty(modifier)) {
    return `${baseClass}__${element}--${modifier}`
  } else if (!_.isEmpty(element)) {
    return `${baseClass}__${element}`
  } else if (!_.isEmpty(modifier)) {
    return `${baseClass}--${modifier}`
  }

  return baseClass
}
