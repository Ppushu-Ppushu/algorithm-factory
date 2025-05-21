function solution(progresses, speeds) {
    var answer = [];
    let count = 0;
    const progressLength = progresses.length;

    const remaining = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    let deployDate = remaining[0];


    for (let i = 0; i < remaining.length; i++) {
        if (remaining[i] <= deployDate) {
            count ++;
        }
        else {
            answer.push(count);
            deployDate = remaining[i];
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}