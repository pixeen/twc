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
      }
    }
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary'
  },
  compoundVariants: []
})
