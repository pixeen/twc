import assert from 'assert'
import createBemClass from '../src/create-bem-class.js'
import { describe, it } from 'node:test'

describe('createBemClass function', () => {
  it('Should return block class name when only block is provided', () => {
    const result = createBemClass({ block: 'block' })
    assert.strictEqual(result, '.block')
  })

  it('Should return block and element class name when block and element are provided', () => {
    const result = createBemClass({ block: 'block', element: 'element' })
    assert.strictEqual(result, '.block__element')
  })

  it('Should return block and modifier class name when block and modifier are provided', () => {
    const result = createBemClass({ block: 'block', modifier: 'modifier' })
    assert.strictEqual(result, '.block--modifier')
  })

  it('Should return block, element and modifier class name when block, element and modifier are provided', () => {
    const result = createBemClass({
      block: 'block',
      element: 'element',
      modifier: 'modifier'
    })
    assert.strictEqual(result, '.block__element--modifier')
  })
})
