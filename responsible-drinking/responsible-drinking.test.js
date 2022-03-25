const getWater = require("./responsible-drinking");

test("calculate how many glasses", () => {
  expect(getWater.hydrate("1 beer, 2 shots, 3 wine")).toBe(
    "6 glasses of water"
  );
});

test("check 0 drink", () => {
  expect(getWater.hydrate("0 wine")).toBe("0 glass of water");
});

test("check and instead of comma", () => {
  expect(getWater.hydrate("1 beer and 2 wine")).toBe("3 glasses of water");
});
