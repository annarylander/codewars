//Given a string made of digits [0-9]
//return a string where each digit is repeated a number of times equals to its value.

function explode(s) {
  digit = s.split("");
  let sum = "";

  for (let i = 0; i < digit.length; i++) {
    const element = digit[i];
    sum += element.repeat(element);
  }
  return sum;
}

explode("321");
// output: "333221"

explode("102269");
// output: "12222666666999999999"
