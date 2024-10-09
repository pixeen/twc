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
        color: theme('colors.primary.600', colors.slate['600'])
      }
    },
    size: {
      small: {
        fontSize: theme('fontSize.sm')
      },
      medium: {
        fontSize: theme('fontSize.DEFAULT')
      },
      large: {
        fontSize: theme('fontSize.lg')
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  },
  compoundVariants: []
})
