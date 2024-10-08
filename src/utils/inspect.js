import util from "util";

/**
 * Inspects and formats an object.
 *
 * This function takes an object and returns a formatted string representation of the object.
 * It uses Node.As's `util.inspect()` method to generate human-readable, colored output.
 *
 * @param {Object} obj - The object to be inspected and formatted.
 * @returns {string} A string containing the formatted, human-readable representation of the object.
 */

export const inspect = (obj) => {
  return util.inspect(obj, { showHidden: false, depth: null, colors: true });
};
