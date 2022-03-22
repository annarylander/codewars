// Write a function, which changes all but the last four characters into '#'

function maskify(cc) {
  maskedNumb = cc.slice(0, -4);
  const a = "#";
  masked = a.repeat(maskedNumb.length);
  last4 = cc.slice(-4);
  return masked + last4;
}

console.log(maskify("4556364607935616"));
