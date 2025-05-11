function solution(s) {
  const stack = [];

  for (const str of s) {
    if (str === "(") {
      stack.push("(");
    } else {
      if (stack.pop() === "(") continue;
      else return false;
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution("(())()"));
console.log(solution("((())()"));
