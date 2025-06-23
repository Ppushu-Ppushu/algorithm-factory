function solution(number, k) {
    const stack = [];
    const stackLength = stack.length;

    for (const num of number) {
        while(stack.length > 0 && num > stack[stack.length - 1] && k > 0){
            stack.pop();
            k--;
        }
        stack.push(num);
    }

    return stack.slice(0, number.length - k).join('');
}