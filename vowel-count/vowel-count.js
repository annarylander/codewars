function getCount(str) {
  var vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u", "y"];

  //1
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  //2
  [...str.toLowerCase()].forEach((char) => {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

exports.getCount = getCount;
