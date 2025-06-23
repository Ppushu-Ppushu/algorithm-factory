function solution(n, lost, reserve) {
    lost.sort((a,b) => b-a);
    reserve.sort((a,b) => b-a)

    let lostSet = new Set(lost)
    let reserveSet = new Set(reserve)

    const lostStudent = lost.length;
    const reservedStudent = reserve.length;

    // 여벌 체육복 갖고 온 학생이 도난당했을 경우
    for (const reserve of reserveSet) {
        if (lostSet.has(reserve)){
            lostSet.delete(reserve)
            reserveSet.delete(reserve)
        }
    }

    lost = [...lostSet]
    reserve = [...reserveSet]

    // 옷을 빌려준다
    for (let i = 0; i < lostStudent; i++) {
        for (let j = 0; j < reservedStudent; j++) {
            if (Math.abs(lost[i] - reserve[j]) === 1) {
                lost.splice(i,1)
                reserve.splice(j,1)
                i--;
                j--;
            }
        }
    }

    return n - lost.length;
}