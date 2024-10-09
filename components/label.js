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
    fontSize: theme('fontSize.DEFAULT'),
    fontWeight: theme('fontWeight.DEFAULT'),
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  },
  variants: {
    color: {
      primary: {
        color: theme('colors.primary.600', colors.slate['600'])
      },
      secondary: {
        color: theme('colors.secondary.600', colors.blue['600'])
      },
      positive: {
        color: theme('colors.positive.600', colors.green['600'])
      },
      negative: {
        color: theme('colors.negative.600', colors.red['600'])
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  },
  compoundVariants: []
})
