function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

sumTwoSmallestNumbers([19, 1, 42, 3, 77]);

exports.sumTwoSmallestNumbers = sumTwoSmallestNumbers;
