function solution(decimal) {
  //   return decimal.toString(2);

  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  return stack.reverse().join("");
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
