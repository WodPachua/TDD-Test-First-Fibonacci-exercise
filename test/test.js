import { assert } from "chai";
import { fibonacci } from "../fibonacci.js";

describe("Finding number in Fibonacci Series", function () {
  it("4th number in series should be '3'", function () {
    assert.equal(fibonacci(4), 3);
  });

  it("1st and 2nd number in series should be '1'", function () {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
  });
});

// PAIR PARTNER
// Sarah Agemo
