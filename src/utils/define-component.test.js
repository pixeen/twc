import { describe, it } from 'node:test'
import assert from 'node:assert'
import defineComponent from './define-component.js'

const defaultOptions = {
  classPrefix: '',
  componentAttributeSelector: 'data-component',
  variantAttributeSelector: 'data-'
}

const cases = [
  {
    scenario: 'should return a component with applied styles and variants',
    input: [
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
    ],
    expected: {
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
  },
  {
    scenario: 'should apply component base styles when no variants are defined',
    input: [
      'button',
      {
        base: { padding: '10px', color: 'white' }
      },
      defaultOptions
    ],
    expected: {
      '.button': { color: 'white', padding: '10px' },
      '[data-component="button"]': { color: 'white', padding: '10px' }
    }
  },
  {
    scenario:
      'should generate component variant styles when no default variants are defined',
    input: [
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
    ],
    expected: {
      '.button': { color: 'white', padding: '10px' },
      '.button--color-primary': { background: 'blue' },
      '.button--color-secondary': { background: 'green' },
      '[data-component="button"]': { color: 'white', padding: '10px' },
      '[data-component="button"][data-color="primary"]': { background: 'blue' },
      '[data-component="button"][data-color="secondary"]': {
        background: 'green'
      }
    }
  },
  {
    scenario: 'should apply component compound variants styles',
    input: [
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
    ],
    expected: {
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
  },
  {
    scenario: 'should handle the case when no variants are defined',
    input: [
      'button',
      {
        base: { padding: '10px', color: 'white' }
      },
      defaultOptions
    ],
    expected: {
      '.button': { padding: '10px', color: 'white' },
      '[data-component="button"]': { padding: '10px', color: 'white' }
    }
  },
  {
    scenario: 'should handle the case when no default variants are provided',
    input: [
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
    ],
    expected: {
      '.button': { padding: '10px', color: 'white' },
      '.button--size-small': { padding: '5px' },
      '.button--size-large': { padding: '15px' },
      '[data-component="button"]': { padding: '10px', color: 'white' },
      '[data-component="button"][data-size="small"]': { padding: '5px' },
      '[data-component="button"][data-size="large"]': { padding: '15px' }
    }
  },
  {
    scenario: 'should handle the classPrefix correctly',
    input: [
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
    ],
    expected: {
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
  }
]

const runTestCase = (scenario, input, expected) => {
  it(scenario, () => {
    assert.deepEqual(defineComponent(...input), expected)
  })
}

describe('Define Component Function', () => {
  cases.forEach(({ scenario, input, expected }) => {
    runTestCase(scenario, input, expected)
  })
})
