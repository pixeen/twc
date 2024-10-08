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
  return util.inspect(_.cloneDeep(obj), {
    showHidden: false,
    depth: null,
    colors: true
  })
}
