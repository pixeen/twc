/**
 * Button Group
 *
 * @version 0.0.1-dev
 *
 * Variants:
 * - space: `full`, `auto`
 * - direction: `vertical`, `horizontal`
 *
 * Changelog:
 * - 0.0.1-dev: Initial version
 *
 */

export default (theme) => ({
  base: {
    userSelect: 'none'
  },
  defaultVariants: {
    space: 'auto',
    direction: 'horizontal'
  },
  variants: {
    space: {
      full: {
        width: '100%',
        '&>*': {
          flex: '1'
        }
      },
      auto: {}
    },
    direction: {
      horizontal: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        '&>*': {
          borderRadius: '0',
          borderRightWidth: '0'
        },
        '&>*:focus': {
          zIndex: 100
        },
        ':last-child': {
          borderRightWidth: theme('borderWidth.DEFAULT'),
          borderTopRightRadius: theme('borderRadius.DEFAULT'),
          borderBottomRightRadius: theme('borderRadius.DEFAULT')
        },
        ':first-child': {
          borderTopLeftRadius: theme('borderRadius.DEFAULT'),
          borderBottomLeftRadius: theme('borderRadius.DEFAULT')
        }
      },
      vertical: {
        display: 'inline-grid',
        gridAutoColumns: '1fr',
        gridAutoFlow: 'row',
        '&>*': {
          borderRadius: '0',
          borderRightWidth: theme('borderWidth.DEFAULT'),
          borderBottomWidth: '0'
        },
        '&>*:focus': {
          zIndex: 100
        },
        ':last-child': {
          borderBottomWidth: theme('borderWidth.DEFAULT'),
          borderTopRightRadius: '0',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: theme('borderRadius.DEFAULT'),
          borderBottomRightRadius: theme('borderRadius.DEFAULT')
        },
        ':first-child': {
          borderTopLeftRadius: theme('borderRadius.DEFAULT'),
          borderTopRightRadius: theme('borderRadius.DEFAULT'),
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0'
        }
      }
    }
  },
  compoundVariants: []
})
