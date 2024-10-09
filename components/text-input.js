/**
 * Text Input
 *
 * @version 0.0.1-dev
 *
 * Variants:
 * - size: `small`, `medium`, `large`
 * - space: `full`, `auto`
 * - color: `primary`, `secondary`, `positive`, `negative`
 *
 * Changelog:
 * - 0.0.1-dev: Initial version
 *
 */

import colors from 'tailwindcss/colors'
import isAction from './shared/is-action.js'

export default (theme) => ({
  base: {
    ...isAction(theme),
    '&::placeholder': {
      color: theme('colors.primary.400', colors.slate['400'])
    }
  },
  variants: {
    space: {
      full: {
        width: '100%'
      },
      auto: {
        width: 'auto'
      }
    },
    size: {
      small: {
        fontSize: theme('fontSize.sm'),
        paddingInline: theme('spacing.3'),
        paddingBlock: theme('spacing.1.5')
      },
      medium: {
        fontSize: theme('fontSize.DEFAULT'),
        paddingInline: theme('spacing.4'),
        paddingBlock: theme('spacing.3')
      },
      large: {
        fontSize: theme('fontSize.xl'),
        paddingInline: theme('spacing.5'),
        paddingBlock: theme('spacing.3')
      }
    },
    color: {
      primary: {
        borderColor: theme('colors.primary.300', colors.slate['300'])
      },
      secondary: {
        borderColor: theme('colors.secondary.300', colors.blue['300'])
      },
      negative: {
        backgroundColor: theme('colors.negative.50', colors.red['50']),
        borderColor: theme('colors.negative.300', colors.red['300'])
      },
      positive: {
        backgroundColor: theme('colors.positive.50', colors.green['50']),
        borderColor: theme('colors.positive.300', colors.green['300'])
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    space: 'auto'
  },
  compoundVariants: []
})
