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
    display: 'flex'
  },
  variants: {
    direction: {
      vertical: {
        gap: theme('spacing.1'),
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center'
      },
      horizontal: {
        gap: theme('spacing.3'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start'
      }
    }
  },
  defaultVariants: {
    direction: 'horizontal'
  },
  compoundVariants: []
})
