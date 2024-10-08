import { hasProperty } from './has-property.js'
import { createBemClass } from './create-bem-class.js'
import { createAttributeClass } from './create-attribute-class.js'

/**
 * Creates a class selector.
 *
 * @param {string} prefix
 * @param {string} componentName
 * @param {string} [variantName]
 * @param {string} [variantOption]
 * @returns {string}
 */
const createClassSelector = (
  prefix,
  componentName,
  variantName = '',
  variantOption = ''
) => {
  const blockName = `${prefix}${componentName}`
  const modifierClass = variantName ? `${variantName}-${variantOption}` : ''
  return createBemClass({ block: blockName, modifier: modifierClass })
}

/**
 * Creates an attribute selector.
 *
 * @param {string} attributeName
 * @param {string} componentName
 * @param {string} variantAttributeName
 * @param {string} [variantName]
 * @param {string} [variantOption]
 * @returns {string}
 */
const createAttributeSelector = (
  attributeName,
  componentName,
  variantAttributeName = '',
  variantName = '',
  variantOption = ''
) => {
  const attributeComponentClass = createAttributeClass({
    name: attributeName,
    value: componentName
  })
  const attributeVariantClass = createAttributeClass({
    name: `${variantAttributeName}${variantName}`,
    value: variantOption
  })
  return variantName
    ? attributeComponentClass + attributeVariantClass
    : attributeComponentClass
}

/**
 * Generates styles for variants of a component.
 *
 * @param {string} componentName
 * @param {Object} variants
 * @param {Object} [options]
 * @returns {Object}
 */
const generateVariantStyles = (componentName, variants, options) =>
  Object.entries(variants).reduce(
    (accumulatedStyles, [variantName, variantOptions = {}]) => {
      return {
        ...accumulatedStyles,
        ...Object.entries(variantOptions).reduce(
          (innerAccumulatedStyles, [variantOption, variantStyles]) => {
            const attributeSelector = createAttributeSelector(
              options.componentAttributeSelector,
              componentName,
              options.variantAttributeSelector,
              variantName,
              variantOption
            )
            return {
              ...innerAccumulatedStyles,
              [createClassSelector(
                options.classPrefix,
                componentName,
                variantName,
                variantOption
              )]: variantStyles,
              [attributeSelector]: variantStyles
            }
          },
          {}
        )
      }
    },
    {}
  )

/**
 * Merges base styles with default variant styles.
 *
 * @param {string} componentName
 * @param {Object} baseStyles
 * @param {Object} defaultVariants
 * @param {Object} variants
 * @param {Object} options
 * @returns {Object}
 */
const mergeBaseWithDefaultVariants = (
  componentName,
  baseStyles,
  defaultVariants,
  variants,
  options
) => {
  const baseClassSelector = createClassSelector(
    options.classPrefix,
    componentName
  )
  const baseAttributeSelector = createAttributeSelector(
    options.componentAttributeSelector,
    componentName
  )
  return Object.entries(defaultVariants).reduce(
    (accumulatedStyles, [variantName, variantValue]) => ({
      ...accumulatedStyles,
      [baseClassSelector]: {
        ...accumulatedStyles[baseClassSelector],
        ...variants[variantName][variantValue]
      },
      [baseAttributeSelector]: {
        ...accumulatedStyles[baseAttributeSelector],
        ...variants[variantName][variantValue]
      }
    }),
    {
      [baseClassSelector]: baseStyles,
      [baseAttributeSelector]: baseStyles
    }
  )
}

/**
 * Generates styles for compound variants.
 *
 * @param {string} componentName
 * @param {Object} variants
 * @param {Array<Object>} compoundVariants
 * @param {Object} options
 * @returns {Object}
 */
const generateCompoundVariantStyles = (
  componentName,
  variants,
  compoundVariants,
  options
) =>
  compoundVariants.reduce((accumulatedStyles, compoundVariant) => {
    const [combinedVariantsArray, initialStyles] = Array.isArray(
      compoundVariant[0]
    )
      ? compoundVariant
      : [compoundVariant, {}]
    const combinedVariants = Object.assign({}, ...combinedVariantsArray)
    const styles = { ...initialStyles, ...combinedVariants }
    combinedVariantsArray.forEach((variant) => {
      Object.keys(variant).forEach((key) => {
        if (styles[key]) delete styles[key]
      })
    })
    const classString = Object.keys(combinedVariants)
      .filter((key) => hasProperty(variants, key))
      .map((key) =>
        createClassSelector(
          options.classPrefix,
          componentName,
          key,
          combinedVariants[key]
        )
      )
      .join('')
    const attributeString = Object.keys(combinedVariants)
      .filter((key) => hasProperty(variants, key))
      .map((key) =>
        createAttributeSelector(
          options.componentAttributeSelector,
          componentName,
          options.variantAttributeSelector,
          key,
          combinedVariants[key]
        )
      )
      .join('')
    return {
      ...accumulatedStyles,
      [classString]: styles,
      [attributeString]: styles
    }
  }, {})

/**
 * Generates combined styles.
 *
 * @param {string} componentName
 * @param {Object} baseStyles
 * @param {Object} variants
 * @param {Array<Object>} compoundVariants
 * @param {Object} defaultVariants
 * @param {Object} options
 * @returns {Object}
 */
const generateStyles = (
  componentName,
  baseStyles,
  variants,
  compoundVariants,
  defaultVariants,
  options
) => ({
  ...mergeBaseWithDefaultVariants(
    componentName,
    baseStyles,
    defaultVariants,
    variants,
    options
  ),
  ...generateVariantStyles(componentName, variants, options),
  ...generateCompoundVariantStyles(
    componentName,
    variants,
    compoundVariants,
    options
  )
})

/**
 * Defines a component with specified styles.
 *
 * @param {string} componentName
 * @param {Object} styles
 * @param {Object} [styles.base]
 * @param {Object} [styles.variants]
 * @param {Object} [styles.defaultVariants]
 * @param {Array} [styles.compoundVariants]
 * @param {Object} options
 * @returns {Object}
 */
export const defineComponent = (componentName, styles, options) => {
  const {
    base: baseStyles = {},
    variants = {},
    defaultVariants = {},
    compoundVariants = []
  } = styles
  return generateStyles(
    componentName,
    baseStyles,
    variants,
    compoundVariants,
    defaultVariants,
    options
  )
}
