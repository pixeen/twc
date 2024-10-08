import colors from 'tailwindcss/colors'

export default (theme) => ({
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
})
