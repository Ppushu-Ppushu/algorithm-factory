function solution(priorities, location) {
    var answer = 0;
    let queue = priorities.map((priority, index) => [index, priority]);

    while(queue.length) {
        const current = queue.shift();
        if (queue.some(item => item[1] > current[1])){
            queue.push(current);
        } else {
            answer++;
            if (current[0] === location) break;
        }
    }
    return answer;
}