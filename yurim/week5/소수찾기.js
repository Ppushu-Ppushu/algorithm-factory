function permutation(numberPart, checked, current, results) {
    // 종료 조건 : current에 값이 하나라도 있으면 숫자로 바꿔서 results에 저장
    if(current.length >= 1) {
        results.add(Number(current));
    }

    // 각 인덱스마다 한 번씩만 방문 (순열)
    for(let i = 0; i < numberPart.length; i++){
        if(!checked[i]){
            checked[i] = true;

            //문자 하나 추가해서 재귀호출
            permutation(numberPart, checked, current+numberPart[i], results);

            //백트래킹
            checked[i] = false;
        }
    }
}

function solution(numbers) {
    var answer = 0;
    const numberPart = [...numbers];
    const numberPartLength = numberPart.length;
    const checked = new Array(numberPart.length).fill(false); // [false, false]
    const results = new Set();

    permutation(numberPart, checked, '', results);

    console.log(results);

    for(const number of results){
        let isPrime = true;

        for(let j = 2; j <= Math.sqrt(number); j++){
            if (number % j === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime && number > 1) answer++;

    }

    return answer;
}