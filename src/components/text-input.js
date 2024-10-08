/**
 * Text Input
 *
 * @version 0.0.1-dev
 *
 * Changelog:
 * - 0.0.1-dev: Initial version
 *
 * Variants:
 * - size: `small`, `medium`, `large`
 * - space: `full`, `auto`
 * - color: `primary`, `secondary`, `positive`, `negative`
 *
 */

import colors from 'tailwindcss/colors'
import isAction from '../shared/is-action.js'

export default (theme) => ({
  base: {
    ...isAction(theme)
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
        paddingBlock: theme('spacing.1')
      },
      medium: {
        fontSize: theme('fontSize.DEFAULT'),
        paddingInline: theme('spacing.4'),
        paddingBlock: theme('spacing.2')
      },
      large: {
        fontSize: theme('fontSize.xl'),
        paddingInline: theme('spacing.5'),
        paddingBlock: theme('spacing.2')
      }
    },
    color: {
      primary: {
        borderColor: theme('colors.primary.400', colors.slate['400'])
      },
      secondary: {
        borderColor: theme('colors.secondary.300', colors.blue['300'])
      },
      negative: {
        backgroundColor: theme('colors.negative.50', colors.red['50']),
        borderColor: theme('colors.negative.400', colors.red['400'])
      },
      positive: {
        backgroundColor: theme('colors.positive.50', colors.green['50']),
        borderColor: theme('colors.positive.400', colors.green['400'])
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
