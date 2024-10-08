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
    color: theme('colors.primary.800', colors.slate['800']),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme('fontSize.DEFAULT'),
    cursor: 'pointer'
  },
  variants: {
    color: {
      primary: {
        color: theme('colors.primary.800', colors.slate['800'])
      },
      secondary: {
        color: theme('colors.secondary.800', colors.blue['800'])
      },
      positive: {
        color: theme('colors.positive.800', colors.green['800'])
      },
      negative: {
        color: theme('colors.negative.800', colors.red['800'])
      },
      dimmed: {
        color: theme('colors.secondary.600', colors.blue['600'])
      }
    }
  },
  defaultVariants: {},
  compoundVariants: []
})
