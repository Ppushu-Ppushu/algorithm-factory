function solution(numbers) {
    var answer = '';
    let madeNumbers = [];

    let firstNumberArray = numbers.sort((a,b) => {
        let numberToStringA = a.toString();
        let numberToStringB = b.toString();

        if (numberToStringA + numberToStringB > numberToStringB+numberToStringA) return -1;
        if (numberToStringA + numberToStringB < numberToStringB+numberToStringA) return 1;
        else return 0;

    })

    let result = firstNumberArray.join('');
    return result[0] === '0' ? '0' : result
}