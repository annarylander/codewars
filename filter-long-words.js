// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((word) => word.length > n);
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));
//Output: [ 'quick', 'brown', 'jumps' ]
