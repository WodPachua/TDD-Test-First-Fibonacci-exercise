import { assert } from "chai";
import { fibonacci } from "../fibonacci.js";

describe("Finding number in Fibonacci Series", function () {
  it("4th number in series should be '3'", function () {
    assert.equal(fibonacci(4), 3);
  });

  it("1st number in series should be '1'", function () {
    assert.equal(fibonacci(1), 1);
  });

  it("2nd number in series should be '1'", function () {
    assert.equal(fibonacci(2), 1);
  });

  it("0th number in series should be '0'", function () {
    assert.equal(fibonacci(0), 0);
  });
});

// PAIR PARTNER
// Sarah Agemo
