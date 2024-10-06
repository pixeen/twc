/**
 * Generates a set of CSS styles for different variants of a defineComponent.
 *
 * @param {string} name - The base name of the defineComponent.
 * @param {Object} variants - An object representing different variant options and their styles.
 * @returns {Object} An object containing CSS class names as keys and their corresponding styles as values.
 */
const applyVariants = (name, variants) => {
  const variantStyles = {};
  Object.entries(variants).forEach(([variantName, options = {}]) => {
    Object.entries(options).forEach(([option, styles]) => {
      variantStyles[`.${name}--${option}`] = styles;
    });
  });
  return variantStyles;
};

/**
 * Applies style variants to a base style and produces a style object.
 *
 * @param {string} name - The name to be used as a class name key.
 * @param {object} base - The base style object.
 * @param {object} defaultVariants - An object containing default variant keys and their corresponding values.
 * @param {object} variants - An object where each key maps to a set of styles for different variant values.
 * @returns {object} An object containing the combined styles under the class name key.
 */
const applyStyles = (name, base, defaultVariants, variants) => {
  const defaultStyles = {};
  defaultStyles[`.${name}`] = base;
  Object.entries(defaultVariants).forEach(([variantName, variantValue]) => {
    defaultStyles[`.${name}`] = {
      ...defaultStyles[`.${name}`],
      ...variants[variantName][variantValue],
    };
  });
  return defaultStyles;
};

/**
 * Defines a defineComponent by applying styles and variants.
 *
 * @param {string} name - The name of the defineComponent.
 * @param {Object} options - Object containing defineComponent options.
 * @param {Object} options.base - Base styles for the defineComponent.
 * @param {Object} [options.variants={}] - Variants of styles for the defineComponent.
 * @param {Object} [options.defaultVariants={}] - Default variants to be applied.
 * @return {Object} The combined styles and variants for the defineComponent.
 */
export const defineComponent = (
  name,
  { base, variants = {}, defaultVariants = {} },
) => ({
  ...applyStyles(name, base, defaultVariants, variants),
  ...applyVariants(name, variants),
});
