//Return a string suggesting how many glasses of water you should drink to not be hungover.

function hydrate(s) {
  const drinks = s.split(" ").filter(function (item) {
    return !isNaN(item);
  });
  const parsed = drinks.map((elem) => parseInt(elem, 10));

  sum = parsed.reduce((pv, cv) => pv + cv, 0);

  if (sum > 1) {
    return `${sum} glasses of water`;
  } else return `${sum} glass of water`;
}

console.log(hydrate("1 beer, 2 shots, 3 wine"));
//Output: 6 glasses of water
