import { defineComponent } from "./define-component.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("defineComponent", () => {
  it("bla", function () {
    const result = defineComponent("button", {
      base: { fontWeight: "bold" },
      variants: {
        color: {
          primary: {
            color: "red",
          },
          secondary: {
            color: "blue",
          },
        },
      },
      defaultVariants: { color: "primary" },
    });

    console.log(result);
  });
  it("should return a defineComponent with applied styles and variants", () => {
    const name = "button";
    const base = { padding: "10px", color: "white" };
    const variants = {
      color: {
        primary: { background: "blue" },
        secondary: { background: "green" },
      },
    };
    const defaultVariants = { color: "primary" };
    const result = defineComponent(name, {
      base,
      variants,
      defaultVariants,
    });
    assert.deepEqual(result, {
      ".button": {
        background: "blue",
        color: "white",
        padding: "10px",
      },
      ".button--primary": {
        background: "blue",
      },
      ".button--secondary": {
        background: "green",
      },
    });
  });

  it("should apply base styles when no variants are defined", () => {
    const name = "button";
    const base = { padding: "10px", color: "white" };
    const result = defineComponent(name, { base });
    assert.deepEqual(result, {
      ".button": {
        color: "white",
        padding: "10px",
      },
    });
  });

  it("should generate variant styles when no default variants are defined", () => {
    const name = "button";
    const base = { padding: "10px", color: "white" };
    const variants = {
      color: {
        primary: { background: "blue" },
        secondary: { background: "green" },
      },
    };
    const result = defineComponent(name, { base, variants });
    assert.deepEqual(result, {
      ".button": {
        color: "white",
        padding: "10px",
      },
      ".button--primary": {
        background: "blue",
      },
      ".button--secondary": {
        background: "green",
      },
    });
  });
});
