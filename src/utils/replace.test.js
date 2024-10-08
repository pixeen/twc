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
})
