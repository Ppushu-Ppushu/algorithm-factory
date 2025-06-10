function solution(answers) {
    var answer = [0, 0, 0];
    const answersLength = answers.length;

    const numberOne = [1, 2, 3, 4, 5];
    const numberOneLength = numberOne.length;

    const numberTwo = [2, 1, 2, 3, 2, 4, 2, 5];
    const numberTwoLength = numberTwo.length;

    const numberThree = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const numberThreeLength = numberThree.length;


    for(let i = 0; i < answersLength; i++){
        if (numberOne[i%numberOneLength] === answers[i]){
            answer[0] += 1;
        }
        if (numberTwo[i%numberTwoLength] === answers[i]){
            answer[1] += 1;
        }
        if (numberThree[i%numberThreeLength] === answers[i]){
            answer[2] += 1;
        }
    }
    const maxScore = Math.max(...answer);
    const result = [];

    answer.forEach((score, idx) => {
        if (score === maxScore) result.push(idx + 1);
    });

    return result;
}