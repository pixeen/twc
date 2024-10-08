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
import textColor from './shared/variant/text-color.js'

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
    color: textColor(theme)
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary'
  },
  compoundVariants: []
})
