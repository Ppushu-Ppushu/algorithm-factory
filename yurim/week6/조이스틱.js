function solution(name) {
    var answer = 0;

    const nameLength = name.length;
    const nameToAscii = name.split('').map((char) => char.charCodeAt());

    //알파벳 변경 최솟값
    for (const name of nameToAscii) {
        const moveToRight = name - 65; //항상 양수
        const moveToLeft = (90 - name) + 1;

        if (moveToLeft <= moveToRight) {
            answer += moveToLeft;
        }

        else if (moveToLeft > moveToRight) {
            answer += moveToRight;
        }
    }

    // 방향 변경 최솟값
    let move = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let next = i + 1;
        while (next < name.length && name[next] === 'A') {
            next++;
        }

        move = Math.min(move, i * 2 + name.length - next);
        move = Math.min(move, (name.length - next) * 2 + i);
    }

    console.log(nameLength - 1)
    return answer + move;
}