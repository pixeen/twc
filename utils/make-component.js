const DEFAULT_COMPONENT_ATTRIBUTE = "style-as";
const DEFAULT_VARIANT_ATTRIBUTE = "with-";

/**
 * Generates a CSS class selector.
 *
 * @param {string} componentName - The component name.
 * @returns {string} CSS class selector string.
 */
const createComponentClassSelector = (componentName) => {
  return `.${componentName}`;
};

/**
 * Generates a CSS attribute selector.
 *
 * @param {string} componentName - The component name.
 * @param {string} attributeSelector - The attribute to target.
 * @returns {string} CSS attribute selector string.
 */
const createComponentAttributeSelector = (componentName, attributeSelector) => {
  return `[${attributeSelector}="${componentName}"]`;
};

/**
 * Generates a CSS class selector for a variant.
 *
 * @param {string} componentName - The component name.
 * @param {string} variantGroup - The variant group (e.g., size, color).
 * @param {string} variantKey - The variant key (e.g., small, red).
 * @returns {string} CSS class selector string.
 */
const createVariantClassSelector = (
  componentName,
  variantGroup,
  variantKey,
) => {
  return `.${componentName}--${variantGroup}-${variantKey}`;
};

/**
 * Generates a CSS attribute selector for a variant.
 *
 * @param {string} componentName - The component name.
 * @param {string} variantGroup - The variant group (e.g., size, color).
 * @param {string} variantKey - The variant key (e.g., small, red).
 * @param {string} componentAttributeSelector - The base component attribute selector.
 * @param {string} variantAttributePrefix - The prefix for the variant attribute selector.
 * @returns {string} Complete CSS attribute selector string.
 */
const createVariantAttributeSelector = (
  componentName,
  variantGroup,
  variantKey,
  componentAttributeSelector,
  variantAttributePrefix,
) => {
  return `[${componentAttributeSelector}="${componentName}"][${variantAttributePrefix}${variantGroup}="${variantKey}"]`;
};

/**
 * Applies base and default styles for a component.
 *
 * @param {Object} stylesAccumulator - The accumulator object for styles.
 * @param {string} componentName - The component name.
 * @param {Object} baseStyles - The base styles.
 * @param {Object} defaultStyles - The default styles.
 * @param {string} componentAttributeSelector - The attribute selector string.
 * @returns {Object} Updated accumulator object.
 */
const applyBaseAndDefaultStyles = (
  stylesAccumulator,
  componentName,
  baseStyles,
  defaultStyles,
  componentAttributeSelector,
) => {
  stylesAccumulator[
    createComponentAttributeSelector(componentName, componentAttributeSelector)
  ] = { ...baseStyles, ...defaultStyles };
  stylesAccumulator[createComponentClassSelector(componentName)] = {
    ...baseStyles,
    ...defaultStyles,
  };
  return stylesAccumulator;
};

/**
 * Accumulates styles for variant groups and items.
 *
 * @param {Object} stylesAccumulator - The accumulator object for styles.
 * @param {Array} variantGroupTuple - The variant group and items.
 * @param {string} componentName - The component name.
 * @param {Object} theme - The theme object.
 * @param {Function} baseStylesFn - The function for base styles.
 * @param {Function} defaultStylesFn - The function for default styles.
 * @param {Object} options - Additional options for style generation.
 * @returns {Object} Updated accumulator object.
 */
const accumulateVariantStyles = (
  stylesAccumulator,
  [variantGroup, variantGroupItems],
  componentName,
  theme,
  baseStylesFn,
  defaultStylesFn,
  options,
) => {
  Object.entries(variantGroupItems).forEach(([variantKey, variantStyle]) => {
    if (options.attributes.enabled === true) {
      const variantAttrSelector = createVariantAttributeSelector(
        componentName,
        variantGroup,
        variantKey,
        options.attributes.component ?? DEFAULT_COMPONENT_ATTRIBUTE,
        options.attributes.variant ?? DEFAULT_VARIANT_ATTRIBUTE,
      );
      stylesAccumulator[variantAttrSelector] = variantStyle;
    }
    if (options.classes.enabled === true) {
      const variantClassSelector = createVariantClassSelector(
        componentName,
        variantGroup,
        variantKey,
      );
      stylesAccumulator[variantClassSelector] = variantStyle;
    }
  });
  return applyBaseAndDefaultStyles(
    stylesAccumulator,
    componentName,
    baseStylesFn(theme),
    defaultStylesFn(theme),
    options.attributes.component ?? DEFAULT_COMPONENT_ATTRIBUTE,
  );
};

/**
 * Generates a styled component.
 *
 * @param {string} componentName - The component name.
 * @param {Function} [baseStylesFn] - The function for base styles.
 * @param {Function} [variantStylesFn] - The function for variant styles.
 * @param {Function} [defaultStylesFn] - The function for default styles.
 * @returns {Function} Function to generate styles.
 */
export const makeComponent = (
  componentName,
  baseStylesFn = (theme) => ({}),
  variantStylesFn = (theme) => ({}),
  defaultStylesFn = (theme) => ({}),
) => {
  return (theme, options) =>
    Object.entries(variantStylesFn(theme)).reduce(
      (stylesAccumulator, variantEntry) =>
        accumulateVariantStyles(
          stylesAccumulator,
          variantEntry,
          componentName,
          theme,
          baseStylesFn,
          defaultStylesFn,
          options,
        ),
      {},
    );
};
