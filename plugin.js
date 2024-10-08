import plugin from 'tailwindcss/plugin'
import components from './src/components.js'

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents(components(theme, options)),
  (options) => ({
    theme: {
      extend: {
        colors: options.colors
      }
    }
  })
)
