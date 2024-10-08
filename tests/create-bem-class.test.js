import assert from 'assert'
import createBemClass from '../src/create-bem-class.js'
import { describe, it } from 'node:test'

const testCases = [
  {
    description: 'Should return block class name when only block is provided',
    input: { block: 'block' },
    expected: '.block'
  },
  {
    description:
      'Should return block and element class name when block and element are provided',
    input: { block: 'block', element: 'element' },
    expected: '.block__element'
  },
  {
    description:
      'Should return block and modifier class name when block and modifier are provided',
    input: { block: 'block', modifier: 'modifier' },
    expected: '.block--modifier'
  },
  {
    description:
      'Should return block, element and modifier class name when block, element and modifier are provided',
    input: { block: 'block', element: 'element', modifier: 'modifier' },
    expected: '.block__element--modifier'
  }
]

describe('createBemClass function', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      const result = createBemClass(input)
      assert.strictEqual(result, expected)
    })
  })
})
