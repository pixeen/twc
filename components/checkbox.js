/**
 * Checkbox
 *
 * @version 0.0.1-dev
 *
 * Variants:
 * - ...
 *
 * Changelog:
 * - 0.0.1-dev: Initial version
 *
 */

import isAction from './shared/is-action.js'

export default (theme) => ({
  base: {
    ...isAction(theme),
    width: '1.25rem',
    height: '1.25rem'
  },
  defaultVariants: {},
  variants: {},
  compoundVariants: []
})
