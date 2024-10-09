/**
 * Paragraph
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
    marginBottom: '.25rem',
    fontWeight: theme('fontWeight.medium')
  },
  variants: {
    size: {
      small: {
        fontSize: theme('fontSize.2xl')
      },
      medium: {
        fontSize: theme('fontSize.3xl')
      },
      large: {
        fontSize: theme('fontSize.5xl')
      }
    },
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
      },
      dimmed: {
        color: theme('colors.primary.500', colors.slate['500'])
      }
    }
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary'
  },
  compoundVariants: []
})
