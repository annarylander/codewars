//Return a string suggesting how many glasses of water you should drink to not be hungover.

function hydrate(s) {
  const drinks = s.split(" ").filter(function (item) {
    return !isNaN(item);
  });
  console.log(drinks);
  const parsed = drinks.map((elem) => parseInt(elem));

  sum = parsed.reduce((accumulated, itemValue) => accumulated + itemValue, 0);

  if (sum > 1) {
    return `${sum} glasses of water`;
  } else return `${sum} glass of water`;
}

console.log(hydrate("1 beer, 2 shots, 3 wine, 20 irish"));
//Output: 6 glasses of water
