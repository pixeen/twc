import _ from 'lodash'

/**
 * This function produces all the permutations of the options provided in the variants object, with each combination represented as an object.
 *
 * @param {Object} variants - The options object.
 * @returns {Array} - The combinations of options.
 */
export default (variants) =>
  _.keys(variants)
    .map((key) => _.keys(variants[key]))
    .reduce(
      (accumulatedCombinations, currentArray) =>
        _.flatMap(accumulatedCombinations, (previousCombination) =>
          _.map(currentArray, (value) => [...previousCombination, value])
        ),
      [[]]
    )
    .map((combination) => _.zipObject(_.keys(variants), combination))
