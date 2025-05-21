function solution(clothes) {
  const obj = {};
  const n = clothes.length;

  for (let i = 0; i < n; i++) {
    const type = clothes[i][1];
    obj[type] = obj[type] || [];
    obj[type].push(clothes[i][0]);
  }

  let ans = 1;
  // (A+1)(B+1)(C+1) = ABC+AB+AC+BC+A+B+C+1
  for (const key in obj) {
    ans *= obj[key].length + 1;
  }

  return ans - 1;
}

function solution2(clothes) {
  const obj = {};

  for (const [name, type] of clothes) {
    obj[type] = (obj[type] || 0) + 1;
  }

  let ans = 1;
  for (const key in obj) {
    ans *= obj[key] + 1; // 입지 않는 경우 포함
  }

  return ans - 1; // 아무것도 입지 않는 경우 제외
}
