/**
 * Radio
 *
 * @version 0.0.1-dev
 *
 * Changelog:
 * - 0.0.1-dev: Initial version
 *
 * Variants:
 * - ...
 *
 */

import isAction from '../shared/is-action.js'
import colors from 'tailwindcss/colors'

export default (theme) => ({
  base: {
    ...isAction(theme),
    borderWidth: theme('borderWidth.DEFAULT'),
    borderRadius: theme('borderRadius.full'),
    borderColor: theme('colors.primary.400', colors.slate['400']),
    width: '1.25rem',
    height: '1.25rem'
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: []
})
