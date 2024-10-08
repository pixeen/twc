/**
 * Generates variant-specific styles for a given component based on provided variants and options.
 *
 * @param {string} componentName - The name of the component for which styles are being generated.
 * @param {Object} variants - An object representing different variants of the component, where keys are variant names and values are objects with options and corresponding styles.
 * @param {Object} [options] - Optional parameters to customize the generated styles.
 * @returns {Object} An object containing the generated CSS rules as key-value pairs.
 */
const generateVariantStyles = (componentName, variants, options) => {
  const variantStyles = {};
  Object.entries(variants).forEach(([variantName, options = {}]) => {
    Object.entries(options).forEach(([option, styles]) => {
      variantStyles[`.${componentName}--${variantName}-${option}`] = styles;
      variantStyles[
        `[data-component="${componentName}"][data-${variantName}="${option}"]`
      ] = styles;
    });
  });
  return variantStyles;
};

/**
 * Merges base styles with default variant styles for a specific component.
 *
 * @param {string} componentName - The name of the component.
 * @param {Object} base - The base styles for the component.
 * @param {Object} defaultVariants - An object containing the default variant names and their values.
 * @param {Object} variants - An object containing the variant styles keyed by variant name and variant value.
 * @returns {Object} Merged styles including base and default variant styles.
 */
const mergeBaseWithDefaultVariants = (
  componentName,
  base,
  defaultVariants,
  variants,
) => {
  const mergedStyles = {};
  mergedStyles[`.${componentName}`] = base;
  mergedStyles[`[data-component="${componentName}"]`] = base;
  Object.entries(defaultVariants).forEach(([variantName, variantValue]) => {
    mergedStyles[`.${componentName}`] = {
      ...mergedStyles[`.${componentName}`],
      ...variants[variantName][variantValue],
    };
    mergedStyles[`[data-component="${componentName}"]`] = {
      ...mergedStyles[`[data-component="${componentName}"]`],
      ...variants[variantName][variantValue],
    };
  });
  return mergedStyles;
};

/**
 * Generates CSS styles for compound variants of a component based on the provided configurations.
 *
 * @param {string} componentName - The name of the component for which styles are being generated.
 * @param {Object} variants - An object defining the possible variants and their values.
 * @param {Array<Object>} compoundVariants - An array of objects, each representing a compound variant.
 * @param {Object} options - Additional options that can be used during style generation.
 * @returns {Object} An object where the keys are class names or attribute selectors, and the values are the respective styles.
 */
const generateCompoundVariantStyles = (
  componentName,
  variants,
  compoundVariants,
  options,
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
        classString += `.${componentName}--${key}-${combined[key]}`;
      }
    }
    result[classString] = styles;
  });
  compoundVariants.forEach((variant) => {
    let classString = "";
    const combined = Object.assign({}, ...variant);
    const styles = { ...combined };
    delete styles.color;
    delete styles.size;
    for (const key in combined) {
      if (Object.prototype.hasOwnProperty.call(variants, key)) {
        classString += `[data-component="${componentName}"][data-${key}="${combined[key]}"]`;
      }
    }
    result[classString] = styles;
  });
  return result;
};

/**
 * Generates styles based on the given parameters, including base styles,
 * variants, compound variants, and default variants.
 *
 * @param {string} name - The name of the style component.
 * @param {Object} base - The base styles that apply by default.
 * @param {Object} variants - The variant styles that can be applied conditionally.
 * @param {Array<Object>} compoundVariants - An array of compound variant style objects.
 * @param {Object} defaultVariants - The default variant styles to apply if applicable.
 * @param {Object} options - Additional options to customize style generation.
 * @returns {Object} The generated styles object that combines base, variant, and compound variant styles.
 */
const generateStyles = (
  name,
  base,
  variants,
  compoundVariants,
  defaultVariants,
  options,
) => ({
  ...mergeBaseWithDefaultVariants(name, base, defaultVariants, variants),
  ...generateVariantStyles(name, variants, options),
  ...generateCompoundVariantStyles(name, variants, compoundVariants, options),
});

/**
 * Defines a UI component with specified styles and options.
 *
 * @param {string} name - The name of the component.
 * @param {object} styles - Style definitions for the component.
 * @param {object} styles.base - The base styles for the component.
 * @param {object} [styles.variants] - Optional style variants for the component.
 * @param {object} [styles.defaultVariants] - Default style variants for the component.
 * @param {Array} [styles.compoundVariants] - Compound style variants for the component.
 * @param {object} options - Additional options for style generation.
 * @returns {object} Generated styles.
 */
export const defineComponent = (name, styles, options) => {
  const {
    base,
    variants = {},
    defaultVariants = {},
    compoundVariants = [],
  } = styles;
  return generateStyles(
    name,
    base,
    variants,
    compoundVariants,
    defaultVariants,
    options,
  );
};
