function solution(array, commands) {
    var answer = [];
    let sortedArray = [];
    commands.forEach((command)=>{
        const i = command[0];
        const j = command[1];
        const k = command[2];

        sortedArray=array.slice(i-1, j).sort((a,b)=>a-b);
        answer.push(sortedArray[k-1]);
    })
    return answer;
}