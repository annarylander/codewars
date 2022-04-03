const dotCalculator = require("./dot-calculator");

test("check subtraction", () => {
  expect(dotCalculator.dotCalculator("..... - ...")).toBe("..");
});

test("check addition", () => {
  expect(dotCalculator.dotCalculator("..... + ...............")).toBe(
    "...................."
  );
});

test("check multiplication", () => {
  expect(dotCalculator.dotCalculator("..... * ...")).toBe("...............");
});

test("check division", () => {
  expect(dotCalculator.dotCalculator("..... // ..")).toBe("..");
});

test("check division", () => {
  expect(dotCalculator.dotCalculator(". // ..")).toBe("");
});
