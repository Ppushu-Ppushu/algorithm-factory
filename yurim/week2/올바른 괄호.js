function solution(s){
    const stack = [];

    for (let i of s) {
        if (i === "(") {
            stack.push(i);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    if (stack.length === 0) return true;
    else return false;
}