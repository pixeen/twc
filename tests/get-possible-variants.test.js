import { describe, it } from 'node:test'
import getPossibleVariants from '../src/get-possible-variants.js'
import assert from 'node:assert'

describe('getPossibleVariants function', () => {
  it('should return a list of possible variants', () => {
    const input = {
      size: { large: 'x', small: 'x' },
      color: { primary: 'x', secondary: 'x', negative: 'x' },
      space: { large: 'x', small: 'x', medium: 'x' }
    }
    const expected = [
      { size: 'large', color: 'primary', space: 'large' },
      { size: 'large', color: 'primary', space: 'small' },
      { size: 'large', color: 'primary', space: 'medium' },
      { size: 'large', color: 'secondary', space: 'large' },
      { size: 'large', color: 'secondary', space: 'small' },
      { size: 'large', color: 'secondary', space: 'medium' },
      { size: 'large', color: 'negative', space: 'large' },
      { size: 'large', color: 'negative', space: 'small' },
      { size: 'large', color: 'negative', space: 'medium' },
      { size: 'small', color: 'primary', space: 'large' },
      { size: 'small', color: 'primary', space: 'small' },
      { size: 'small', color: 'primary', space: 'medium' },
      { size: 'small', color: 'secondary', space: 'large' },
      { size: 'small', color: 'secondary', space: 'small' },
      { size: 'small', color: 'secondary', space: 'medium' },
      { size: 'small', color: 'negative', space: 'large' },
      { size: 'small', color: 'negative', space: 'small' },
      { size: 'small', color: 'negative', space: 'medium' }
    ]
    assert.deepStrictEqual(getPossibleVariants(input), expected)
  })

  it('should return a list of variants when only one option is provided', () => {
    const input = { size: { large: 'x', small: 'x' } }
    const expected = [{ size: 'large' }, { size: 'small' }]
    assert.deepStrictEqual(getPossibleVariants(input), expected)
  })

  it('should return correct variants for mixed lengths', () => {
    const input = {
      size: { large: 'x' },
      color: { primary: 'x', secondary: 'x' }
    }
    const expected = [
      { size: 'large', color: 'primary' },
      { size: 'large', color: 'secondary' }
    ]
    assert.deepStrictEqual(getPossibleVariants(input), expected)
  })

  it('should handle cases with single key-value pair correctly', () => {
    const input = {
      size: { onlySize: 'x' },
      color: { onlyColor: 'x' }
    }
    const expected = [{ size: 'onlySize', color: 'onlyColor' }]
    assert.deepStrictEqual(getPossibleVariants(input), expected)
  })
})
