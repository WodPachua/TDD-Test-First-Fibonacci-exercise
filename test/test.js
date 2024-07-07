import { assert } from "chai";
import { fibonacci } from "../fibonacci.js";

describe("Finding number in Fibonacci Series", function () {
  it("4th number in series should be '3'", function () {
    assert.equal(fibonacci(4), 3);
  });
});

// PAIR PARTNER
// Sarah Agemo
