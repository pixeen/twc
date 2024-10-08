/**
 * Generates a BEM class string.
 *
 * @param {Object} params - Parameters.
 * @param {string} params.block - BEM block name.
 * @param {string} [params.element=""] - BEM element name (optional).
 * @param {string} [params.modifier=""] - BEM modifier name (optional).
 * @returns {string} BEM class string.
 */
export const createBemClass = ({ block, element = "", modifier = "" }) => {
  if (element && modifier) {
    return `.${block}__${element}--${modifier}`;
  } else if (element) {
    return `.${block}__${element}`;
  } else if (modifier) {
    return `.${block}--${modifier}`;
  }
  return `.${block}`;
};
