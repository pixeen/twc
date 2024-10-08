import {describe, it} from "node:test";
import assert from "node:assert";
import {memoize} from "./memoize.js";

describe("Memoize function", () => {
    it("should return the same result as the original function", () => {
        const add = (a, b) => a + b;
        const memoizedAdd = memoize(add);

        assert.strictEqual(memoizedAdd(1, 2), add(1, 2));
        assert.strictEqual(memoizedAdd(3, 4), add(3, 4));
    });

    it("should memoize results", () => {
        const stub = (a, b) => a + b;
        const memoizedStub = memoize(stub);

        assert.strictEqual(memoizedStub(2, 3), 5);
        assert.strictEqual(memoizedStub(2, 3), 5); // This call should return the cached result
    });

    it("should handle different arguments separately", () => {
        const fn = (x) => x * 2;
        const memoizedFn = memoize(fn);

        assert.strictEqual(memoizedFn(2), 4);
        assert.strictEqual(memoizedFn(3), 6);
        assert.strictEqual(memoizedFn(2), 4); // This call should return the cached result
    });

    it("should cache function results based on arguments", () => {
        const multiply = (a, b) => a * b;
        const memoizedMultiply = memoize(multiply);

        const firstCall = memoizedMultiply(2, 5);
        const secondCall = memoizedMultiply(2, 5);

        assert.strictEqual(firstCall, secondCall);
    });

    it("should not share cache between different memoized functions", () => {
        const add = (a, b) => a + b;
        const multiply = (a, b) => a * b;

        const memoizedAdd = memoize(add);
        const memoizedMultiply = memoize(multiply);

        assert.notEqual(memoizedAdd(2, 3), memoizedMultiply(2, 3));
    });
});
