function solution(n, lost, reserve) {
  const arr = Array(n).fill(1);

  lost.forEach((num) => {
    arr[num - 1]--;
  });
  reserve.forEach((num) => {
    arr[num - 1]++;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (i > 0 && arr[i - 1] > 1) {
        arr[i - 1]--;
        arr[i]++;
      } else if (i < n && arr[i + 1] > 1) {
        arr[i + 1]--;
        arr[i]++;
      }
    }
  }
  return arr.filter((cnt) => cnt >= 1).length;
}
