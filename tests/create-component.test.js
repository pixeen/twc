import { describe, it } from 'node:test'
import assert from 'node:assert'
import createComponent from '../src/create-component.js'

const defaultOptions = {
  classPrefix: '',
  componentAttributeSelector: 'data-component',
  variantAttributeSelector: 'data-'
}

describe('Define Component Function', () => {
  it('should return a component with applied styles and variants', () => {
    const input = [
      'button',
      {
        base: { padding: '10px', color: 'white' },
        variants: {
          color: {
            primary: { background: 'blue' },
            secondary: { background: 'green' }
          }
        },
        defaultVariants: { color: 'primary' }
      },
      defaultOptions
    ]
    const expected = {
      '.button': { background: 'blue', color: 'white', padding: '10px' },
      '.button--color-primary': { background: 'blue' },
      '.button--color-secondary': { background: 'green' },
      '[data-component="button"]': {
        background: 'blue',
        color: 'white',
        padding: '10px'
      },
      '[data-component="button"][data-color="primary"]': { background: 'blue' },
      '[data-component="button"][data-color="secondary"]': {
        background: 'green'
      }
    }
    assert.deepEqual(createComponent(...input), expected)
  })

  it('should apply component base styles when no variants are defined', () => {
    const input = [
      'button',
      {
        base: { padding: '10px', color: 'white' }
      },
      defaultOptions
    ]
    const expected = {
      '.button': { color: 'white', padding: '10px' },
      '[data-component="button"]': { color: 'white', padding: '10px' }
    }
    assert.deepEqual(createComponent(...input), expected)
  })

  it('should generate component variant styles when no default variants are defined', () => {
    const input = [
      'button',
      {
        base: { padding: '10px', color: 'white' },
        variants: {
          color: {
            primary: { background: 'blue' },
            secondary: { background: 'green' }
          }
        }
      },
      defaultOptions
    ]
    const expected = {
      '.button': { color: 'white', padding: '10px' },
      '.button--color-primary': { background: 'blue' },
      '.button--color-secondary': { background: 'green' },
      '[data-component="button"]': { color: 'white', padding: '10px' },
      '[data-component="button"][data-color="primary"]': { background: 'blue' },
      '[data-component="button"][data-color="secondary"]': {
        background: 'green'
      }
    }
    assert.deepEqual(createComponent(...input), expected)
  })

  it('should apply component compound variants styles', () => {
    const input = [
      'button',
      {
        base: { padding: '10px', color: 'white' },
        variants: {
          color: {
            primary: { background: 'blue' },
            secondary: { background: 'green' }
          },
          size: {
            large: { padding: '10px' }
          }
        },
        defaultVariants: { color: 'primary', size: 'large' },
        compoundVariants: [
          [[{ color: 'primary' }, { size: 'large' }], { background: 'purple' }],
          [[{ color: 'secondary' }, { size: 'small' }], { background: 'green' }]
        ]
      },
      defaultOptions
    ]
    const expected = {
      '.button': { color: 'white', padding: '10px', background: 'blue' },
      '.button--size-large': { padding: '10px' },
      '.button--color-primary': { background: 'blue' },
      '.button--color-secondary': { background: 'green' },
      '.button--color-primary.button--size-large': { background: 'purple' },
      '.button--color-secondary.button--size-small': { background: 'green' },
      '[data-component="button"]': {
        color: 'white',
        padding: '10px',
        background: 'blue'
      },
      '[data-component="button"][data-size="large"]': { padding: '10px' },
      '[data-component="button"][data-color="primary"]': { background: 'blue' },
      '[data-component="button"][data-color="secondary"]': {
        background: 'green'
      },
      '[data-component="button"][data-color="primary"][data-component="button"][data-size="large"]':
        { background: 'purple' },
      '[data-component="button"][data-color="secondary"][data-component="button"][data-size="small"]':
        { background: 'green' }
    }
    assert.deepEqual(createComponent(...input), expected)
  })

  it('should handle the case when no variants are defined', () => {
    const input = [
      'button',
      {
        base: { padding: '10px', color: 'white' }
      },
      defaultOptions
    ]
    const expected = {
      '.button': { padding: '10px', color: 'white' },
      '[data-component="button"]': { padding: '10px', color: 'white' }
    }
    assert.deepEqual(createComponent(...input), expected)
  })

  it('should handle the case when no default variants are provided', () => {
    const input = [
      'button',
      {
        base: { padding: '10px', color: 'white' },
        variants: {
          size: {
            small: { padding: '5px' },
            large: { padding: '15px' }
          }
        }
      },
      defaultOptions
    ]
    const expected = {
      '.button': { padding: '10px', color: 'white' },
      '.button--size-small': { padding: '5px' },
      '.button--size-large': { padding: '15px' },
      '[data-component="button"]': { padding: '10px', color: 'white' },
      '[data-component="button"][data-size="small"]': { padding: '5px' },
      '[data-component="button"][data-size="large"]': { padding: '15px' }
    }
    assert.deepEqual(createComponent(...input), expected)
  })

  it('should handle the classPrefix correctly', () => {
    const input = [
      'button',
      {
        base: { padding: '10px', color: 'white' },
        variants: {
          color: {
            primary: { background: 'blue' },
            secondary: { background: 'green' }
          }
        },
        defaultVariants: { color: 'primary' }
      },
      {
        classPrefix: 'tw-',
        componentAttributeSelector: 'data-component',
        variantAttributeSelector: 'data-'
      }
    ]
    const expected = {
      '.tw-button': { background: 'blue', color: 'white', padding: '10px' },
      '.tw-button--color-primary': { background: 'blue' },
      '.tw-button--color-secondary': { background: 'green' },
      '[data-component="button"]': {
        background: 'blue',
        color: 'white',
        padding: '10px'
      },
      '[data-component="button"][data-color="primary"]': { background: 'blue' },
      '[data-component="button"][data-color="secondary"]': {
        background: 'green'
      }
    }
    assert.deepEqual(createComponent(...input), expected)
  })
})
