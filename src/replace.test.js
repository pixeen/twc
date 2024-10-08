import { describe, it } from 'node:test'
import assert from 'node:assert'
import replace from './replace.js'

describe('Replace function', () => {
  it('Replaces placeholders with corresponding values from the data object', () => {
    const pattern = 'Hello, ${name}! How are you ${time}?'
    const data = { name: 'John', time: 'today' }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Hello, John! How are you today?')
  })

  it('Returns the original pattern if no placeholder matches', () => {
    const pattern = 'Hello, ${name}!'
    const data = { notName: 'John' }
    const result = replace(pattern, data)
    assert.strictEqual(result, pattern)
  })

  it('Handles multiple occurrences of the same placeholder', () => {
    const pattern = 'Hello, ${name}! Name again: ${name}'
    const data = { name: 'John' }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Hello, John! Name again: John')
  })

  it('Ignores missing values in the data object and leaves the placeholders untouched', () => {
    const pattern = 'Hello, ${name}! Are you ${time}?'
    const data = { name: 'John' }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Hello, John! Are you ${time}?')
  })

  it('Handles empty placeholders gracefully', () => {
    const pattern = 'Hello, ${name}! How are you ${}?'
    const data = { name: 'John' }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Hello, John! How are you ${}?')
  })

  it('Handles numeric values in the data object', () => {
    const pattern = 'Your order number is ${orderNumber}.'
    const data = { orderNumber: 12345 }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Your order number is 12345.')
  })

  it('Handles `null` and `undefined` values in the data object', () => {
    const pattern = 'Value is ${val}, another is ${anotherVal}'
    const data = { val: null, anotherVal: undefined }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Value is null, another is undefined')
  })

  it('Handles special characters in patterns', () => {
    const pattern = 'Hello, ${name}! [Special characters: ${char}]'
    const data = { name: 'John', char: '@#%&*()[]' }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Hello, John! [Special characters: @#%&*()[]]')
  })

  it('Handles incomplete placeholders gracefully', () => {
    const pattern = 'Hello, ${name'
    const data = { name: 'John' }
    const result = replace(pattern, data)
    assert.strictEqual(result, 'Hello, ${name')
  })
})
