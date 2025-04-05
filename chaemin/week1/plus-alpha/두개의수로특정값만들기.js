function solution(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let another = target - arr[i];
    if (arr.includes(another) && arr[i] !== another) {
      // 중복되는 원소 없으니까
      return true;
    }
  }
  return false;
}

console.log("[case1]", solution([1, 2, 3, 4, 8], 6));
console.log("[case2]", solution([2, 3, 5, 9], 10));

function bookSolution(arr, target) {
  // 1. 해시 테이블 생성 및 초기화
  const countSort = (arr, k) => {
    const hashTable = new Array(k + 1).fill(0);
    for (const num of arr) {
      // 현재 원소값이 k 이하일 때에만 처리
      if (num <= k) {
        // 현재 원소값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
        hashTable[num] = 1;
      }
    }
    return hashTable;
  };

  const hashTable = countSort(arr, target);

  for (const num of arr) {
    const complement = target - num;

    // 2. target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashTable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log("bookSolution[case1]", bookSolution([1, 2, 3, 4, 8], 6));
console.log("bookSolution[case2]", bookSolution([2, 3, 5, 9], 10));

function solution3(arr, target) {
  let numSet = new Set(arr); // O(N)
  for (let i = 0; i < arr.length; i++) {
    // O(N)
    let another = target - arr[i];
    if (numSet.has(another) && arr[i] !== another) {
      // O(1)
      return true;
    }
  }
  return false;
}

console.log("solution3[case1]", solution3([1, 2, 3, 4, 8], 6));
console.log("solution3[case2]", solution3([2, 3, 5, 9], 10));
