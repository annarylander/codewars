const filter = require("./filter-long-words");

test("get all words longer than 4", () => {
  expect(
    filter.filterLongWords("The quick brown fox jumps over the lazy dog", 4)
  ).toStrictEqual(["quick", "brown", "jumps"]);
});

test("get all words longer than n", () => {
  expect(
    filter.filterLongWords("The quick brown fox jumps over the lazy dog", 5)
  ).toStrictEqual([]);
});

test("get all words longer than n", () => {
  expect(
    filter.filterLongWords("This is my first fantastic test", 5)
  ).toStrictEqual(["fantastic"]);
});
