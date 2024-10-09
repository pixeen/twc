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

export default (theme) => ({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme('fontSize.sm'),
    fontWeight: theme('fontWeight.DEFAULT'),
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  },
  variants: {
    color: {
      primary: {
        color: theme('colors.primary.700', colors.slate['700'])
      },
      secondary: {
        color: theme('colors.secondary.700', colors.blue['700'])
      },
      positive: {
        color: theme('colors.positive.700', colors.green['700'])
      },
      negative: {
        color: theme('colors.negative.700', colors.red['700'])
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  },
  compoundVariants: []
})
