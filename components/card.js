/**
 * Card
 *
 * @version 0.0.1-dev
 **
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
    background: 'white',
    boxShadow: theme('boxShadow.sm'),
    borderRadius: theme('borderRadius.md'),
    borderWidth: theme('borderWidth.DEFAULT'),
    borderColor: theme('colors.primary.300', colors.slate['300'])
  },
  variants: {},
  defaultVariants: {},
  compoundVariants: []
})
