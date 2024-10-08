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
    color: theme('colors.primary.900', colors.slate['900']),
    marginBottom: '1rem'
  },
  variants: {
    size: {
      small: {
        fontSize: theme('fontSize.xl'),
        fontWeight: theme('fontWeight.semibold')
      },
      medium: {
        fontSize: theme('fontSize.3xl'),
        fontWeight: theme('fontWeight.DEFAULT')
      },
      large: {
        fontSize: theme('fontSize.5xl'),
        fontWeight: theme('fontWeight.medium')
      }
    },
    color: {
      primary: {
        color: theme('colors.primary.900', colors.slate['900'])
      },
      secondary: {
        color: theme('colors.secondary.900', colors.blue['900'])
      },
      positive: {
        color: theme('colors.positive.900', colors.green['900'])
      },
      negative: {
        color: theme('colors.negative.900', colors.red['900'])
      }
    }
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary'
  },
  compoundVariants: []
})
