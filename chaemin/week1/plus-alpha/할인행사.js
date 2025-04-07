function solution(want, number, discount) {
  const n = discount.length;

  // 정현이가 원하는 거 담기
  const obj = {};
  want.forEach((item, idx) => {
    obj[item] = obj[item] || 0;
    obj[item] = number[idx];
  });

  let ans = 0;

  for (let i = 0; i <= n - 10; i++) {
    const disObj = {};
    let isValid = true;

    for (let j = i; j < i + 10; j++) {
      const item = discount[j];
      disObj[item] = disObj[item] || 0;
      disObj[item] += 1;
    }

    // obj랑 비교하기
    for (const key in obj) {
      if (obj[key] !== disObj[key]) {
        isValid = false;
        break;
      }
    }
    if (isValid) ans++;
  }

  return ans;
}
