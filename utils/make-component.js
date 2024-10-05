// Constants for attribute selectors
const COMPONENT_ATTRIBUTE = "style-as";
const VARIANT_ATTRIBUTE = "with-";

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
 * Constructs a CSS class selector for a variant.
 *
 * @param {string} componentName - The component name.
 * @param {string} variantGroup - The variant group.
 * @param {string} variantKey - The variant key.
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
 * Constructs a CSS attribute selector for a variant.
 *
 * @param {string} componentName - The component name.
 * @param {string} variantGroup - The variant group.
 * @param {string} variantKey - The variant key.
 * @param {string} attributeSelector - The base attribute selector.
 * @param {string} variantSelector - The variant attribute selector prefix.
 * @returns {string} Complete CSS attribute selector string.
 */
const createVariantAttributeSelector = (
  componentName,
  variantGroup,
  variantKey,
  attributeSelector,
  variantSelector,
) => {
  return `[${attributeSelector}="${componentName}"][${variantSelector}${variantGroup}="${variantKey}"]`;
};

/**
 * Applies base and default styles for a component.
 *
 * @param {Object} acc - The accumulator object for styles.
 * @param {string} componentName - The component name.
 * @param {Object} baseStyles - The base styles.
 * @param {Object} defaultStyles - The default styles.
 * @param {string} attributeSelector - The attribute selector string.
 * @returns {Object} Updated accumulator object.
 */
const applyBaseAndDefaultStyles = (
  acc,
  componentName,
  baseStyles,
  defaultStyles,
  attributeSelector,
) => {
  const baseAttrSelector = createComponentAttributeSelector(
    componentName,
    attributeSelector,
  );
  const baseClassSelector = createComponentClassSelector(componentName);
  acc[baseAttrSelector] = { ...baseStyles, ...defaultStyles };
  acc[baseClassSelector] = { ...baseStyles, ...defaultStyles };
  return acc;
};

/**
 * Accumulates styles for variant groups and items.
 *
 * @param {Object} acc - The accumulator object for styles.
 * @param {Array} variantGroupTuple - The variant group and items.
 * @param {string} componentName - The component name.
 * @param {Object} theme - The theme object.
 * @param {Function} baseStyles - The function for base styles.
 * @param {Function} defaultStyles - The function for default styles.
 * @param {Object} options - Additional options for style generation.
 * @returns {Object} Updated accumulator object.
 */
const accumulateVariantStyles = (
  acc,
  [variantGroup, variantGroupItems],
  componentName,
  theme,
  baseStyles,
  defaultStyles,
  options,
) => {
  const componentAttributeSelector =
    options.componentAttributeSelector ?? COMPONENT_ATTRIBUTE;
  const variantAttributeSelector =
    options.variantAttributeSelector ?? VARIANT_ATTRIBUTE;
  Object.entries(variantGroupItems).forEach(([variantKey, variantStyle]) => {
    const variantAttrSelector = createVariantAttributeSelector(
      componentName,
      variantGroup,
      variantKey,
      componentAttributeSelector,
      variantAttributeSelector,
    );
    const variantClassSelector = createVariantClassSelector(
      componentName,
      variantGroup,
      variantKey,
    );
    acc[variantAttrSelector] = variantStyle;
    acc[variantClassSelector] = variantStyle;
  });
  return applyBaseAndDefaultStyles(
    acc,
    componentName,
    baseStyles(theme),
    defaultStyles(theme),
    componentAttributeSelector,
  );
};

/**
 * Generates a styled component.
 *
 * @param {string} componentName - The component name.
 * @param {Function} [baseStyles] - The function for base styles.
 * @param {Function} [variantStyles] - The function for variant styles.
 * @param {Function} [defaultStyles] - The function for default styles.
 * @returns {Function} Function to generate styles.
 */
export const makeComponent = (
  componentName,
  baseStyles = (theme) => ({}),
  variantStyles = (theme) => ({}),
  defaultStyles = (theme) => ({}),
) => {
  return (theme, options) =>
    Object.entries(variantStyles(theme)).reduce(
      (acc, variantEntry) =>
        accumulateVariantStyles(
          acc,
          variantEntry,
          componentName,
          theme,
          baseStyles,
          defaultStyles,
          options,
        ),
      {},
    );
};
