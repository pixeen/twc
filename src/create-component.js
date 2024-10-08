import createBemClass from './create-bem-class.js'
import createAttributeClass from './create-attribute-class.js'
import _ from 'lodash'

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
export default (
  componentName,
  { base = {}, variants = {}, defaultVariants = {}, compoundVariants = [] },
  options
) => {
  const getClassSelector = (prefix, component, variant, option) => {
    const block = `${prefix}${component}`
    const modifier = variant ? `${variant}-${option}` : ''
    return createBemClass({ block, modifier })
  }

  const getAttributeSelector = (
    attrName,
    component,
    variantAttr,
    variant,
    option
  ) => {
    const componentClass = createAttributeClass({
      name: attrName,
      value: component
    })
    const variantClass = createAttributeClass({
      name: `${variantAttr}${variant}`,
      value: option
    })
    return variant ? componentClass + variantClass : componentClass
  }

  const mergeDefaultVariants = (
    baseStyles,
    variants,
    defaultVariants,
    options
  ) => {
    const baseClassSelector = getClassSelector(
      options.classPrefix,
      componentName
    )
    const baseAttributeSelector = getAttributeSelector(
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

  const generateVariantStyles = (variants, options) =>
    _.reduce(
      _.entries(variants),
      (accumulatedStyles, [variantName, variantOptions = {}]) => {
        return _.assign(
          accumulatedStyles,
          _.reduce(
            _.entries(variantOptions),
            (innerAccumulatedStyles, [variantOption, variantStyles]) => {
              const attributeSelector = getAttributeSelector(
                options.componentAttributeSelector,
                componentName,
                options.variantAttributeSelector,
                variantName,
                variantOption
              )
              return _.assign(innerAccumulatedStyles, {
                [getClassSelector(
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

  const generateClassAndAttributeStrings = (
    combinedVariants,
    variants,
    options
  ) => {
    const classString = _.map(
      _.keys(combinedVariants).filter((key) => _.has(variants, key)),
      (key) =>
        getClassSelector(
          options.classPrefix,
          componentName,
          key,
          combinedVariants[key]
        )
    ).join('')

    const attributeString = _.map(
      _.keys(combinedVariants).filter((key) => _.has(variants, key)),
      (key) =>
        getAttributeSelector(
          options.componentAttributeSelector,
          componentName,
          options.variantAttributeSelector,
          key,
          combinedVariants[key]
        )
    ).join('')

    return { classString, attributeString }
  }

  const getCompoundVariantStyles = (compoundVariants, variants, options) =>
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

        const { classString, attributeString } =
          generateClassAndAttributeStrings(combinedVariants, variants, options)
        return _.assign(accumulatedStyles, {
          [classString]: styles,
          [attributeString]: styles
        })
      },
      {}
    )

  const generateStyles = (
    baseStyles,
    variants,
    compoundVariants,
    defaultVariants,
    options
  ) => ({
    ...mergeDefaultVariants(baseStyles, variants, defaultVariants, options),
    ...generateVariantStyles(variants, options),
    ...getCompoundVariantStyles(compoundVariants, variants, options)
  })

  return generateStyles(
    base,
    variants,
    compoundVariants,
    defaultVariants,
    options
  )
}
