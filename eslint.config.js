import path from 'node:path'
import url from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: path.dirname(url.fileURLToPath(import.meta.url))
})

export default [
  ...compat.config({
    extends: ['eslint-config-standard', 'prettier'],
    rules: {
      'no-template-curly-in-string': 'off'
      // indent: ['error', 2]
    }
  })
]
