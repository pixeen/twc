/**
 * Converts an object into an array of key-value pair objects.
 *
 * @param {Object} obj - The input object.
 * @returns {Object[]} - An array of key-value pair objects.
 */
const convertObjectToKeyValuePairs = (obj) =>
  Object.entries(obj).map(([outerKey, innerObj = {}]) =>
    Object.keys(innerObj).map((innerKey) => ({ [outerKey]: innerKey }))
  )

/**
 * Generates combinations from arrays using a recursive approach.
 *
 * @param {Object[]} arrays - Arrays to combine.
 * @param {Array} prefix - Internal use for building combinations.
 * @returns {Array[]} - All possible combinations.
 */
const generateCombinations = (arrays, prefix = []) =>
  arrays.length === 0
    ? [prefix]
    : arrays[0].flatMap((value) =>
        generateCombinations(arrays.slice(1), [...prefix, value])
      )

/**
 * Combines key-value pairs into an object.
 *
 * @param {Array} combination - Array of key-value pairs.
 * @returns {Object} - Combined object.
 */
const combineKeyValuePairs = (combination) =>
  combination.reduce((acc, pair) => ({ ...acc, ...pair }), {})

/**
 * Generates key-value pair combinations from an object.
 *
 * @param {Object} inputObject - Input object.
 * @returns {Object[]} - Variants of key-value pairs.
 */
export const getPossibleVariants = (inputObject) =>
  Object.values(inputObject).length === 0
    ? []
    : generateCombinations(convertObjectToKeyValuePairs(inputObject)).map(
        combineKeyValuePairs
      )
