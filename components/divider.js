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
        borderColor: theme('colors.primary.300', colors.slate['300'])
      },
      secondary: {
        borderColor: theme('colors.secondary.300', colors.blue['300'])
      },
      positive: {
        borderColor: theme('colors.positive.300', colors.green['300'])
      },
      negative: {
        borderColor: theme('colors.negative.300', colors.red['300'])
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  },
  compoundVariants: []
})
