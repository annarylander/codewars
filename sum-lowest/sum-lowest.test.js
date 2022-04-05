const sum = require("./sum-lowest");

test("check random numbers", () => {
  expect(sum.sumTwoSmallestNumbers([19, 1, 42, 3, 77])).toBe(4);
});

test("check random numbers", () => {
  expect(sum.sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
});

test("check random numbers", () => {
  expect(
    sum.sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])
  ).toBe(3453455);
});
