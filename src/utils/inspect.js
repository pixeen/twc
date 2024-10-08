import util from 'util'
import _ from 'lodash'

/**
 * Inspects and formats an object.
 *
 * This function takes an object and returns a formatted string representation of the object.
 * It uses Node.As's `util.inspect()` method to generate human-readable, colored output.
 *
 * @param {Object} obj - The object to be inspected and formatted.
 * @returns {string} A string containing the formatted, human-readable representation of the object.
 */

export default (obj) => {
  if (!_.isObject(obj)) {
    throw new TypeError('Expected an object')
  }

  // Create a deep clone of the object to avoid any mutations to the original object
  const clonedObject = _.cloneDeep(obj)

  return util.inspect(clonedObject, {
    showHidden: false,
    depth: null,
    colors: true
  })
}
