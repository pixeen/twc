import { defineComponent } from "./define-component.js";
import { describe, it } from "node:test";
import assert from "node:assert";

const cases = [
  {
    scenario: "should return a component with applied styles and variants",
    input: [
      "button",
      {
        base: { padding: "10px", color: "white" },
        variants: {
          color: {
            primary: { background: "blue" },
            secondary: { background: "green" },
          },
        },
        defaultVariants: { color: "primary" },
      },
    ],
    expected: {
      ".button": { background: "blue", color: "white", padding: "10px" },
      ".button--primary": { background: "blue" },
      ".button--secondary": { background: "green" },
    },
  },
  {
    scenario: "should apply component base styles when no variants are defined",
    input: [
      "button",
      {
        base: { padding: "10px", color: "white" },
      },
    ],
    expected: {
      ".button": { color: "white", padding: "10px" },
    },
  },
  {
    scenario:
      "should generate component variant styles when no default variants are defined",
    input: [
      "button",
      {
        base: { padding: "10px", color: "white" },
        variants: {
          color: {
            primary: { background: "blue" },
            secondary: { background: "green" },
          },
        },
      },
    ],
    expected: {
      ".button": { color: "white", padding: "10px" },
      ".button--primary": { background: "blue" },
      ".button--secondary": { background: "green" },
    },
  },
  {
    scenario: "should apply component compound variants styles",
    input: [
      "button",
      {
        base: { padding: "10px", color: "white" },
        variants: {
          color: {
            primary: { background: "blue" },
            secondary: { background: "green" },
          },
          size: {
            large: { padding: "10px" },
          },
        },
        defaultVariants: { color: "primary", size: "large" },
        compoundVariants: [
          [{ color: "primary" }, { size: "large" }, { background: "purple" }],
          [{ color: "secondary" }, { size: "small" }, { background: "green" }],
        ],
      },
    ],
    expected: {
      ".button": { color: "white", padding: "10px", background: "blue" },
      ".button--large": { padding: "10px" },
      ".button--primary": { background: "blue" },
      ".button--secondary": { background: "green" },
      ".button--primary.button--large": { background: "purple" },
      ".button--secondary.button--small": { background: "green" },
    },
  },
];

const runTestCase = (scenario, input, expected) => {
  it(scenario, () => {
    assert.deepEqual(defineComponent(...input), expected);
  });
};

describe("Define Component Function", () => {
  cases.forEach(({ scenario, input, expected }) => {
    runTestCase(scenario, input, expected);
  });
});
