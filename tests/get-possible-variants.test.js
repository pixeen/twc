import { describe, it } from 'node:test'
import getPossibleVariants from '../src/get-possible-variants.js'
import assert from 'node:assert'

const testCases = [
  {
    description: 'should return a list of possible variants',
    input: {
      size: { large: 'x', small: 'x' },
      color: { primary: 'x', secondary: 'x', negative: 'x' },
      space: { large: 'x', small: 'x', medium: 'x' }
    },
    expected: [
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
  },
  {
    description:
      'should return a list of variants when only one option is provided',
    input: { size: { large: 'x', small: 'x' } },
    expected: [{ size: 'large' }, { size: 'small' }]
  },
  {
    description: 'should return correct variants for mixed lengths',
    input: {
      size: { large: 'x' },
      color: { primary: 'x', secondary: 'x' }
    },
    expected: [
      { size: 'large', color: 'primary' },
      { size: 'large', color: 'secondary' }
    ]
  },
  {
    description: 'should handle cases with single key-value pair correctly',
    input: {
      size: { onlySize: 'x' },
      color: { onlyColor: 'x' }
    },
    expected: [{ size: 'onlySize', color: 'onlyColor' }]
  }
]

describe('getPossibleVariants function', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      assert.deepStrictEqual(getPossibleVariants(input), expected)
    })
  })
})
