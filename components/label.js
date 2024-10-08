/**
 * Label
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

import colors from 'tailwindcss/colors'
import textColor from './shared/variant/text-color.js'

export default (theme) => ({
  base: {
    color: theme('colors.primary.800', colors.slate['800']),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme('fontSize.DEFAULT'),
    cursor: 'pointer'
  },
  variants: {
    color: textColor(theme)
  },
  defaultVariants: {},
  compoundVariants: []
})
