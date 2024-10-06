/**
 * Generates CSS styles for component variants.
 *
 * @param {string} componentName - Base component name.
 * @param {Object} variants - Variants and their styles.
 * @returns {Object} CSS class names with corresponding styles.
 */
const generateVariantStyles = (componentName, variants) => {
  const variantStyles = {};
  Object.entries(variants).forEach(([variantName, options = {}]) => {
    Object.entries(options).forEach(([option, styles]) => {
      variantStyles[`.${componentName}--${option}`] = styles;
    });
  });
  return variantStyles;
};

/**
 * Merges base style with default variant styles.
 *
 * @param {string} componentName - Class name key.
 * @param {object} base - Base style.
 * @param {object} defaultVariants - Default variant keys and values.
 * @param {object} variants - Styles for different variant values.
 * @returns {object} Combined styles under the class name key.
 */
const mergeBaseWithDefaultVariants = (
  componentName,
  base,
  defaultVariants,
  variants,
) => {
  const mergedStyles = {};
  mergedStyles[`.${componentName}`] = base;
  Object.entries(defaultVariants).forEach(([variantName, variantValue]) => {
    mergedStyles[`.${componentName}`] = {
      ...mergedStyles[`.${componentName}`],
      ...variants[variantName][variantValue],
    };
  });
  return mergedStyles;
};

/**
 * Applies compound style variants to a component.
 *
 * @param {string} componentName - Class name key.
 * @param {object} variants - Styles for different variant values.
 * @param {Array} compoundVariants - Array of compound variant styles.
 * @returns {object} Combined styles under the class name key.
 */
const generateCompoundVariantStyles = (
  componentName,
  variants,
  compoundVariants,
) => {
  const result = {};
  compoundVariants.forEach((variant) => {
    let classString = "";
    const combined = Object.assign({}, ...variant);
    const styles = { ...combined };
    delete styles.color;
    delete styles.size;
    for (const key in combined) {
      if (Object.prototype.hasOwnProperty.call(variants, key)) {
        classString += `.${componentName}--${combined[key]}`;
      }
    }
    result[classString] = styles;
  });
  return result;
};

/**
 * Defines a component by applying styles and variants.
 *
 * @param {string} componentName - Component name.
 * @param {Object} options - Component options.
 * @param {Object} options.base - Base styles.
 * @param {Object} [options.variants={}] - Variants of styles.
 * @param {Object} [options.defaultVariants={}] - Default variants.
 * @param {Array} [options.compoundVariants=[]] - Default variants.
 * @return {Object} Combined styles and variants.
 */
export const defineComponent = (
  componentName,
  { base, variants = {}, defaultVariants = {}, compoundVariants = [] },
) => ({
  ...mergeBaseWithDefaultVariants(
    componentName,
    base,
    defaultVariants,
    variants,
  ),
  ...generateVariantStyles(componentName, variants),
  ...generateCompoundVariantStyles(componentName, variants, compoundVariants),
});
