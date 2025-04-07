function solution(participant, completion) {
  const obj = {};
  participant.forEach((name) => {
    obj[name] = (obj[name] || 0) + 1;
  });

  let ans = "";

  completion.forEach((name) => {
    if (obj[name] && obj[name] > 0) {
      obj[name] -= 1;
    }
  });

  ans = Object.keys(obj)
    .filter((n) => obj[n] === 1)
    .toString();

  return ans;
}

// 이전에 풀었던 방법 (24.11.07)

function solution2(participant, completion) {
  let result = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (completion[i] !== participant[i]) {
      result = participant[i];
      break;
    }
  }

  return result;
}
