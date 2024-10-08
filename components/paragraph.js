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
import textColor from './shared/variant/text-color.js'

export default (theme) => ({
  base: {
    marginBottom: '1rem'
  },
  variants: {
    color: textColor(theme),
    size: {
      small: {
        fontSize: theme('fontSize.sm')
      },
      medium: {
        fontSize: theme('fontSize.DEFAULT')
      },
      large: {
        fontSize: theme('fontSize.xl')
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  },
  compoundVariants: []
})
