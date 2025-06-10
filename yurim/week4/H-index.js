function solution(citations) {
    let answer = 0;
    const sortedCitations = citations.sort((a,b) => b - a); // 내림차순으로 정렬
    citations.forEach((citation, index) => {
        if (index+1 <= citation) {
            answer = index+1;
        }
        else return answer;
    })
    return answer;
}