function solution(arr)
{
    const stack = [];

    arr.forEach((num) => {
        if(stack[stack.length-1] !== num) stack.push(num);
    });

    return stack;
}

function solution2(arr)
{
    const stack = [];

    const answer = arr => arr.filter((num, i) => num !== arr[i - 1]);
}