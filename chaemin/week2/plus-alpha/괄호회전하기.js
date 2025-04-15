function solution1(s) {
  let ans = 0;
  const n = s.length;
  const stack = s.split("");

  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < n; j++) {
      if (temp.length) {
        if (stack[j] === "]" && temp[temp.length - 1] === "[") {
          temp.pop();
        } else if (stack[j] === "}" && temp[temp.length - 1] === "{") {
          temp.pop();
        } else if (stack[j] === ")" && temp[temp.length - 1] === "(") {
          temp.pop();
        } else {
          temp.push(stack[j]);
        }
        continue;
      }

      temp.push(stack[j]);
    }

    if (temp.length === 0) ans++;

    stack.push(stack.shift());
  }

  return ans;
}

// 2024.11 ver
function solution2(s) {
  var answer = 0;
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      arr.push(arr.shift());
    }

    let stack = [];
    let isValid = true;

    // 짝이 맞는지 로직 체크
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "[" || arr[j] === "(" || arr[j] === "{") {
        stack.push(arr[j]);
      } else {
        if (stack.length > 0) {
          let last = stack.pop();
          if (
            (arr[j] === ")" && last !== "(") ||
            (arr[j] === "]" && last !== "[") ||
            (arr[j] === "}" && last !== "{")
          ) {
            isValid = false;
            // break;
          }
        } else {
          isValid = false;
          // break;
        }
      }
    }

    if (isValid && stack.length === 0) answer++;
  }

  return answer;
}
