function solution(clothes) {
    // 배열을 오브젝트로 변환
    const clothesObj = {};
    for(let i = 0; i < clothes.length; i++) {
        const [item, type] = clothes[i]

        if(!clothesObj[type]){
            clothesObj[type] = [];
        }

        clothesObj[type].push(item);
    }
    console.log(clothesObj)

    const types = Object.keys(clothesObj);
    let answer = 0;

    let combinations = 1;
    for (const type of types) {
        combinations *= (clothesObj[type].length + 1);
    }
    return combinations - 1;
}