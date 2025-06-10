function permutation(k, dungeons, count, answer, checked) {
    let traveled = false;
    for(let i = 0; i < dungeons.length; i++){
        const [least, consume] = dungeons[i];
        if(!checked[i] && least <= k){
            checked[i] = true;
            traveled = true;
            permutation(k-consume, dungeons, count+1, answer, checked)
            checked[i] = false;
        }
    }
    if(traveled === false) {
        answer.push(count)
        return answer;
    }
}

function solution(k, dungeons) {
    let checked = new Array(dungeons.length).fill(false);
    let answer = [];
    permutation(k, dungeons, 0, answer, checked);
    return Math.max(...answer)
}