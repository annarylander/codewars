// Make a program that filters a list of strings and returns a list with only your friends name in it.
function getFriends(names) {
  return names.filter((name) => name.length === 4);
}

getFriends(["Ryan", "Kieran", "Jason", "Yous", "Anna", "Li"]);
// output: [ 'Ryan', 'Yous', 'Anna' ]
