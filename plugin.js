import plugin from 'tailwindcss/plugin'
import createComponent from './src/utils/create-component.js'
import button from './src/components/button.js'
import buttonGroup from './src/components/button-group.js'
import link from './src/components/link.js'
import checkbox from './src/components/checkbox.js'
import radio from './src/components/radio.js'
import label from './src/components/label.js'
import paragraph from './src/components/paragraph.js'
import divider from './src/components/divider.js'
import textInput from './src/components/text-input.js'

export default plugin.withOptions(
  (options) =>
    ({ addComponents, theme }) =>
      addComponents({
        ...createComponent('button', button(theme), options),
        ...createComponent('button-group', buttonGroup(theme), options),
        ...createComponent('link', link(theme), options),
        ...createComponent('checkbox', checkbox(theme), options),
        ...createComponent('radio', radio(theme), options),
        ...createComponent('label', label(theme), options),
        ...createComponent('paragraph', paragraph(theme), options),
        ...createComponent('divider', divider(theme), options),
        ...createComponent('text-input', textInput(theme), options)
      }),
  (options) => ({
    theme: {
      extend: {
        colors: options.colors
      }
    }
  })
)
