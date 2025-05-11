function solution1(prices) {
  const ans = [];

  for (let i = 0; i < prices.length - 1; i++) {
    const price = prices[i];
    let cnt = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (price <= prices[j]) {
        cnt++;
      } else {
        cnt += 1;
        break;
      }
    }
    ans.push(cnt);
  }
  ans.push(0);

  return ans;
}

// 옛날에 풀었던 방식
function solution2(prices) {
  let result = [];

  for (let i = 0; i < prices.length; i++) {
    let cnt = 0;

    for (let j = i + 1; j < prices.length; j++) {
      cnt++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    result.push(cnt);
  }

  return result;
}
