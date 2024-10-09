/**
 * Button
 *
 * @version 0.0.1-dev
 *
 * Variants:
 * - size: `small`, `medium`, `large`
 * - surface: `ghost`, `fill`
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
    display: 'inline-flex',
    fontWeight: theme('fontWeight.semibold'),
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme('spacing.3')
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    surface: 'fill',
    space: 'auto'
  },
  variants: {
    size: {
      small: {
        fontSize: theme('fontSize.sm'),
        paddingInline: theme('spacing.3'),
        paddingBlock: theme('spacing.1')
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
    surface: {
      ghost: {
        borderColor: 'transparent !important',
        backgroundColor: 'transparent !important',
        '&:hover, &:active': {
          borderColor: 'transparent !important',
          backgroundColor: 'transparent !important',
          textDecoration: 'underline'
        }
      },
      fill: {
        '&:hover, &:active': {
          textDecoration: 'none'
        }
      }
    },
    space: {
      full: {
        flex: '1',
        width: '100%'
      },
      auto: {
        width: 'auto'
      }
    },
    color: {
      primary: {
        backgroundColor: theme('colors.primary.700', colors.slate['700']),
        borderColor: 'transparent',
        color: theme('colors.primary.50', colors.slate['50']),
        '&:focus': {
          outline: `${theme('spacing[0.5]')} solid ${theme('colors.primary.400', colors.slate['400'])}`
        },
        '&:hover': {
          backgroundColor: theme('colors.primary.700', colors.slate['700']),
          borderColor: theme('colors.primary.500', colors.slate['500']),
          color: theme('colors.primary.100', colors.slate['100'])
        },
        '&:active': {
          backgroundColor: theme('colors.primary.900', colors.slate['900']),
          borderColor: theme('colors.primary.400', colors.slate['400']),
          color: theme('colors.primary.100', colors.slate['100'])
        },
        '&:disabled:active, &:disabled:hover': {
          color: theme('colors.primary.200', colors.slate['200']),
          borderColor: theme('colors.primary.500', colors.slate['500']),
          backgroundColor: theme('colors.primary.800', colors.slate['800'])
        }
      },
      secondary: {
        backgroundColor: theme('colors.secondary.100', colors.blue['100']),
        borderColor: theme('colors.secondary.300', colors.blue['300']),
        color: theme('colors.secondary.800', colors.blue['800']),
        '&:focus': {
          outline: `${theme('spacing[0.5]')} solid ${theme('colors.secondary.400')}`
        },
        '&:hover': {
          backgroundColor: theme('colors.secondary.200', colors.blue['200']),
          borderColor: theme('colors.secondary.400', colors.blue['400']),
          color: theme('colors.secondary.800', colors.blue['800'])
        },
        '&:active': {
          backgroundColor: theme('colors.secondary.100', colors.blue['100']),
          borderColor: theme('colors.secondary.500', colors.blue['500']),
          color: theme('colors.secondary.800', colors.blue['800'])
        },
        '&:disabled:active, &:disabled:hover': {
          backgroundColor: theme('colors.secondary.100', colors.blue['100']),
          borderColor: theme('colors.secondary.400', colors.blue['400']),
          color: theme('colors.secondary.700', colors.blue['700'])
        }
      },
      positive: {
        backgroundColor: theme('colors.positive.100', colors.green['100']),
        borderColor: theme('colors.positive.300', colors.green['300']),
        color: theme('colors.positive.800', colors.green['800']),
        '&:focus': {
          outline: `${theme('spacing[0.5]')} solid ${theme('colors.positive.400')}`
        },
        '&:hover': {
          backgroundColor: theme('colors.positive.200', colors.green['200']),
          borderColor: theme('colors.positive.400', colors.green['400']),
          color: theme('colors.positive.800', colors.green['800'])
        },
        '&:active': {
          backgroundColor: theme('colors.positive.100', colors.green['100']),
          borderColor: theme('colors.positive.500', colors.green['500']),
          color: theme('colors.positive.800', colors.green['800'])
        },
        '&:disabled:active, &:disabled:hover': {
          backgroundColor: theme('colors.positive.100', colors.green['100']),
          borderColor: theme('colors.positive.400', colors.green['400']),
          color: theme('colors.positive.700', colors.green['700'])
        }
      },
      negative: {
        backgroundColor: theme('colors.negative.100', colors.red['100']),
        borderColor: theme('colors.negative.300', colors.red['300']),
        color: theme('colors.negative.800', colors.red['800']),
        '&:focus': {
          outline: `${theme('spacing[0.5]')} solid ${theme('colors.negative.400')}`
        },
        '&:hover': {
          backgroundColor: theme('colors.negative.200', colors.red['200']),
          borderColor: theme('colors.negative.400', colors.red['400']),
          color: theme('colors.negative.800', colors.red['800'])
        },
        '&:active': {
          backgroundColor: theme('colors.negative.100', colors.red['100']),
          borderColor: theme('colors.negative.500', colors.red['500']),
          color: theme('colors.negative.800', colors.red['800'])
        },
        '&:disabled:active, &:disabled:hover': {
          backgroundColor: theme('colors.negative.100', colors.red['100']),
          borderColor: theme('colors.negative.400', colors.red['400']),
          color: theme('colors.negative.700', colors.red['700'])
        }
      }
    }
  },
  compoundVariants: [
    // [{color: "primary"}, {size: "small"}, {padding: "100px"}],
  ]
})
