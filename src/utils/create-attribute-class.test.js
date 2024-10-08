import assert from 'assert'
import { describe } from 'node:test'
import { createAttributeClass } from './create-attribute-class.js'

const testCases = [
  { args: { name: 'id', value: 'content' }, expected: '[id="content"]' },
  { args: { name: 'class', value: 'example' }, expected: '[class="example"]' },
  { args: { name: 'src', value: 'image.jpg' }, expected: '[src="image.jpg"]' },
  { args: { name: 1, value: 2 }, expected: '[1="2"]' }
]

describe('createAttributeClass function', () => {
  testCases.forEach(({ args, expected }) => {
    const result = createAttributeClass(args)
    assert.strictEqual(result, expected)
  })
})
