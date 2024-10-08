import defineComponent from './src/utils/define-component.js'
import button from './src/components/button.js'
import buttonGroup from './src/components/button-group.js'
import link from './src/components/link.js'
import checkbox from './src/components/checkbox.js'
import radio from './src/components/radio.js'
import label from './src/components/label.js'
import paragraph from './src/components/paragraph.js'
import divider from './src/components/divider.js'
import textInput from './src/components/text-input.js'

export default (theme, options) => ({
  ...defineComponent('button', button(theme), options),
  ...defineComponent('button-group', buttonGroup(theme), options),
  ...defineComponent('link', link(theme), options),
  ...defineComponent('checkbox', checkbox(theme), options),
  ...defineComponent('radio', radio(theme), options),
  ...defineComponent('label', label(theme), options),
  ...defineComponent('paragraph', paragraph(theme), options),
  ...defineComponent('divider', divider(theme), options),
  ...defineComponent('text-input', textInput(theme), options)
})
