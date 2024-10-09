/**
 * Field
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

export default (theme) => ({
  base: {
    display: 'flex',
    marginTop: theme('spacing.6'),
    marginBottom: theme('spacing.6')
  },
  variants: {
    direction: {
      vertical: {
        gap: theme('spacing.2'),
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center'
      },
      horizontal: {
        gap: theme('spacing.4'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start'
      }
    }
  },
  defaultVariants: {
    direction: 'vertical'
  },
  compoundVariants: []
})
