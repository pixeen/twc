import { describe, it } from 'node:test'
import assert from 'node:assert'
import inspect from './inspect.js'
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

  it('should throw a TypeError for non-object input', () => {
    const nonObj = 'I am not an object'
    assert.throws(() => inspect(nonObj), TypeError, 'Expected an object')
  })

  it('should handle complex objects with all primitive types', () => {
    const complexObj = {
      number: 123,
      string: 'hello',
      boolean: true,
      nullValue: null,
      undefinedValue: undefined,
      symbol: Symbol('sym'),
      bigInt: BigInt(12345678901234)
    }
    const expectedOutput = util.inspect(complexObj, {
      showHidden: false,
      depth: null,
      colors: true
    })
    assert.equal(inspect(complexObj), expectedOutput)
  })

  it('should handle objects with circular references', () => {
    const circularObj = { a: 1 }
    circularObj.self = circularObj
    const expectedOutput = util.inspect(circularObj, {
      showHidden: false,
      depth: null,
      colors: true
    })
    assert.equal(inspect(circularObj), expectedOutput)
  })

  it('should handle objects with Map and Set', () => {
    const map = new Map()
    map.set('key1', 'value1')
    map.set('key2', 'value2')
    const set = new Set([1, 2, 3])

    const objWithMapSet = { map, set }
    const expectedOutput = util.inspect(objWithMapSet, {
      showHidden: false,
      depth: null,
      colors: true
    })
    assert.equal(inspect(objWithMapSet), expectedOutput)
  })

  it('should throw a TypeError for non-object input', () => {
    const nonObj = 'I am not an object'
    const expectedError = new TypeError('Expected an object')
    assert.throws(() => inspect(nonObj), expectedError)
  })
})
