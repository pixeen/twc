/**
 * Radio
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
import colors from 'tailwindcss/colors'

export default (theme) => ({
  base: {
    ...isAction(theme),
    borderRadius: theme('borderRadius.full'),
    width: '1.25rem',
    height: '1.25rem'
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: []
})
