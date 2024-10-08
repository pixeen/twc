import { describe, it } from 'node:test'
import assert from 'node:assert'
import { inspect } from './inspect.js'
import util from 'util'

describe('inspect function', () => {
  it('should return a formatted string representation of the object', () => {
    const obj = { a: 1, b: 'text', c: [1, 2, 3] }
    const expectedOutput = util.inspect(obj, {
      showHidden: false,
      depth: null,
      colors: true
    })

    assert.equal(inspect(obj), expectedOutput)
  })

  it('should handle nested objects', () => {
    const nestedObj = { a: { b: { c: { d: 'deep' } } } }
    const expectedOutput = util.inspect(nestedObj, {
      showHidden: false,
      depth: null,
      colors: true
    })

    assert.equal(inspect(nestedObj), expectedOutput)
  })

  it('should handle arrays', () => {
    const array = [1, 2, { a: 3, b: [4, 5] }]
    const expectedOutput = util.inspect(array, {
      showHidden: false,
      depth: null,
      colors: true
    })

    assert.equal(inspect(array), expectedOutput)
  })

  it('should handle functions inside objects', () => {
    const objWithFn = {
      a: 1,
      b: function () {
        return 'foo'
      }
    }
    const expectedOutput = util.inspect(objWithFn, {
      showHidden: false,
      depth: null,
      colors: true
    })

    assert.equal(inspect(objWithFn), expectedOutput)
  })

  it('should handle special characters and edge cases', () => {
    const specialObj = { a: '\n', b: '\t', c: '\\' }
    const expectedOutput = util.inspect(specialObj, {
      showHidden: false,
      depth: null,
      colors: true
    })

    assert.equal(inspect(specialObj), expectedOutput)
  })
})
