import createBemClass from './create-bem-class.js'
import createAttributeClass from './create-attribute-class.js'
import _ from 'lodash'

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
  const block = `${prefix}${componentName}`
  const modifier = variantName ? `${variantName}-${variantOption}` : ''
  return createBemClass({ block, modifier })
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
  const componentClass = createAttributeClass({
    name: attributeName,
    value: componentName
  })
  const variantClass = createAttributeClass({
    name: `${variantAttributeName}${variantName}`,
    value: variantOption
  })
  return variantName ? componentClass + variantClass : componentClass
}
/**
 * Generates styles for component variants.
 *
 * @param {string} componentName
 * @param {Object} variants
 * @param {Object} [options]
 * @returns {Object}
 */
const generateVariantStyles = (componentName, variants, options) =>
  _.reduce(
    _.entries(variants),
    (accumulatedStyles, [variantName, variantOptions = {}]) => {
      return _.assign(
        accumulatedStyles,
        _.reduce(
          _.entries(variantOptions),
          (innerAccumulatedStyles, [variantOption, variantStyles]) => {
            const attributeSelector = createAttributeSelector(
              options.componentAttributeSelector,
              componentName,
              options.variantAttributeSelector,
              variantName,
              variantOption
            )
            return _.assign(innerAccumulatedStyles, {
              [createClassSelector(
                options.classPrefix,
                componentName,
                variantName,
                variantOption
              )]: variantStyles,
              [attributeSelector]: variantStyles
            })
          },
          {}
        )
      )
    },
    {}
  )

/**
 * Merges base styles and default variant styles.
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
  return _.reduce(
    _.entries(defaultVariants),
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
  _.reduce(
    compoundVariants,
    (accumulatedStyles, compoundVariant) => {
      const [combinedVariantsArray, initialStyles] = _.isArray(
        compoundVariant[0]
      )
        ? compoundVariant
        : [compoundVariant, {}]
      const combinedVariants = _.assign({}, ...combinedVariantsArray)
      const styles = _.assign({}, initialStyles, combinedVariants)
      combinedVariantsArray.forEach((variant) => {
        _.keys(variant).forEach((key) => {
          if (styles[key]) delete styles[key]
        })
      })
      const classString = _.map(
        _.keys(combinedVariants).filter((key) => _.has(variants, key)),
        (key) =>
          createClassSelector(
            options.classPrefix,
            componentName,
            key,
            combinedVariants[key]
          )
      ).join('')
      const attributeString = _.map(
        _.keys(combinedVariants).filter((key) => _.has(variants, key)),
        (key) =>
          createAttributeSelector(
            options.componentAttributeSelector,
            componentName,
            options.variantAttributeSelector,
            key,
            combinedVariants[key]
          )
      ).join('')
      return _.assign(accumulatedStyles, {
        [classString]: styles,
        [attributeString]: styles
      })
    },
    {}
  )

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
 * Defines a component with styles.
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
export default (componentName, styles, options) => {
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
