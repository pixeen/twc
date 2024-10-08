import plugin from 'tailwindcss/plugin'
import createComponent from './src/create-component.js'
import button from './components/button.js'
import buttonGroup from './components/button-group.js'
import link from './components/link.js'
import checkbox from './components/checkbox.js'
import radio from './components/radio.js'
import label from './components/label.js'
import paragraph from './components/paragraph.js'
import divider from './components/divider.js'
import textInput from './components/text-input.js'
import field from './components/field.js'
import heading from './components/heading.js'

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
        ...createComponent('heading', heading(theme), options),
        ...createComponent('divider', divider(theme), options),
        ...createComponent('text-input', textInput(theme), options),
        ...createComponent('field', field(theme), options)
      }),
  (options) => ({
    theme: {
      extend: {
        colors: options.colors
      }
    }
  })
)
