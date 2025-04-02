function solution(stringList, queryList) {
  const ans = [];

  queryList.forEach((el) => {
    if (stringList.includes(el)) {
      //  O(Q × N) 시간복잡도 최악!
      ans.push(true);
    } else ans.push(false);
  });

  return ans;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);

function solution2(stringList, queryList) {
  const ans = [];

  const strSet = new Set(stringList);

  queryList.forEach((st) => {
    if (strSet.has(st)) ans.push(true);
    else ans.push(false);
  });
  return ans;
}

function solution3(stringList, queryList) {
  const stringSet = new Set(stringList); // O(N)
  return queryList.map((el) => stringSet.has(el)); // O(Q)
  // 총 시간복잡도: O(N + Q)
}

console.log(
  solution2(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
console.log(
  solution3(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);

function bookSolution(stringList, queryList) {
  // 문자열 해싱: 키(Key) 값이 문자열로 주어질때, 문자열의 아스키 코드 값을 활용하여 해시 값으로 변환하는 방법
  // 공식: H(S) = (S[0] + S[1] * P + S[2] * P^2 + ... + S[N-1]*P^(N-1)) mod M

  // 1. polynomial hash 구현 부분
  const polynomialHash = (str) => {
    const p = 31; // 소수
    const m = 1000000007; // 버킷 크기
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
      hashValue = (hashValue * p + str.charCodeAt()) % m;
    }
    return hashValue;
  };

  // 2. stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map((el) => polynomialHash(el));

  // 3. queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

console.log(
  bookSolution(
    ["apple", "banana", "cherry"],
    ["banana", "kiwi", "melon", "apple"]
  )
);
