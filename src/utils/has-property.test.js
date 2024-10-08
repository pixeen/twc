import hasProperty from './has-property.js'
import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('hasProperty function', () => {
  it('should return true when object has the specified property', () => {
    const obj = { prop: 'value' }
    const key = 'prop'

    const result = hasProperty(obj, key)
    assert.equal(result, true)
  })

  it('should return false when object does not have the specified property', () => {
    const obj = { anotherProp: 'value' }
    const key = 'prop'

    const result = hasProperty(obj, key)
    assert.equal(result, false)
  })
  it('should return false when object inherited the specified property, not defined it', () => {
    const proto = { prop: 'value' }
    const obj = Object.create(proto)
    const key = 'prop'
    const result = hasProperty(obj, key)
    assert.equal(result, false)
  })
})
