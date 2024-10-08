import assert from 'assert'
import { describe, it } from 'node:test'
import createAttributeClass from '../src/create-attribute-class.js'

describe('createAttributeClass function', () => {
  it('should create attribute selector for id', () => {
    const args = { name: 'id', value: 'content' }
    const expected = '[id="content"]'
    const result = createAttributeClass(args)
    assert.strictEqual(result, expected)
  })

  it('should create attribute selector for class', () => {
    const args = { name: 'class', value: 'example' }
    const expected = '[class="example"]'
    const result = createAttributeClass(args)
    assert.strictEqual(result, expected)
  })

  it('should create attribute selector for src', () => {
    const args = { name: 'src', value: 'image.jpg' }
    const expected = '[src="image.jpg"]'
    const result = createAttributeClass(args)
    assert.strictEqual(result, expected)
  })

  it('should create attribute selector for numeric name and value', () => {
    const args = { name: 1, value: 2 }
    const expected = '[1="2"]'
    const result = createAttributeClass(args)
    assert.strictEqual(result, expected)
  })
})
