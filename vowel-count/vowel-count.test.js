const count = require("./vowel-count");

test("check random word", () => {
  expect(count.getCount("anything")).toBe(3);
});

test("check capital letters ", () => {
  expect(count.getCount("APPLE")).toBe(2);
});

test("check multiple words", () => {
  expect(count.getCount("The quick brown fox jumps over the lazy dog")).toBe(
    12
  );
});
