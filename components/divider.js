/**
 * Divider
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
  base: {},
  variants: {
    color: {
      primary: {
        borderColor: theme('colors.primary.200', colors.slate['200'])
      },
      secondary: {
        borderColor: theme('colors.secondary.200', colors.blue['200'])
      },
      positive: {
        borderColor: theme('colors.positive.200', colors.green['200'])
      },
      negative: {
        borderColor: theme('colors.negative.200', colors.red['200'])
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  },
  compoundVariants: []
})
