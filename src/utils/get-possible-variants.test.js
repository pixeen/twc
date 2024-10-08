import { describe, it } from 'node:test'
import { getPossibleVariants } from './get-possible-variants.js'
import assert from 'node:assert'

describe('getPossibleVariants function', () => {
  it('should return a list of possible variants', () => {
    assert.deepStrictEqual(
      getPossibleVariants({
        size: { large: 'x', small: 'x' },
        color: { primary: 'x', secondary: 'x', negative: 'x' },
        space: { large: 'x', small: 'x', medium: 'x' }
      }),
      [
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
    )
  })

  it('should return an empty list when no options are provided', () => {
    assert.deepStrictEqual(getPossibleVariants({}), [])
  })

  it('should return a list of variants when only one option is provided', () => {
    assert.deepStrictEqual(
      getPossibleVariants({ size: { large: 'x', small: 'x' } }),
      [{ size: 'large' }, { size: 'small' }]
    )
  })

  it('should return correct variants for mixed lengths', () => {
    assert.deepStrictEqual(
      getPossibleVariants({
        size: { large: 'x' },
        color: { primary: 'x', secondary: 'x' }
      }),
      [
        { size: 'large', color: 'primary' },
        { size: 'large', color: 'secondary' }
      ]
    )
  })

  it('should handle cases with single key-value pair correctly', () => {
    assert.deepStrictEqual(
      getPossibleVariants({
        size: { onlySize: 'x' },
        color: { onlyColor: 'x' }
      }),
      [{ size: 'onlySize', color: 'onlyColor' }]
    )
  })
})
