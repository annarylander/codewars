function dotCalculator(equation) {
  const addition = "+";
  const subtraction = "-";
  const multiplication = "*";
  const division = "//";
  const dot = ".";

  const splitted = equation.split(" ");
  const first = splitted[0].length;
  const second = splitted[2].length;
  const operator = splitted[1];

  if (operator == subtraction) {
    return dot.repeat(first - second);
  } else if (operator == addition) {
    return dot.repeat(first + second);
  } else if (operator == multiplication) {
    return dot.repeat(first * second);
  } else if (operator == division) {
    return dot.repeat(first / second);
  }
}

console.log(dotCalculator(".... + .."));

exports.dotCalculator = dotCalculator;
