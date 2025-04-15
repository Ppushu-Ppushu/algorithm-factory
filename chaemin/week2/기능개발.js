function solution(progresses, speeds) {
  const remain = [];

  progresses.forEach((num, idx) => {
    remain.push(Math.ceil((100 - num) / speeds[idx]));
  });
  const ans = [];

  let maxDay = remain[0];
  let cnt = 1;

  for (let i = 1; i < remain.length; i++) {
    if (maxDay < remain[i]) {
      ans.push(cnt);
      maxDay = remain[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  ans.push(cnt);

  return ans;
}
