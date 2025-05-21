function solution(genres, plays) {
    var answer = [];

    const typeOfGenres = new Set(genres); // Genres의 type만

    // genres들에 각각 어떤 인덱스들이 포함되어 있는지
    const genresObj = {}
    for (let i = 0; i < genres.length; i++) {
        for (const type of typeOfGenres) {
            if (genres[i] === type) {
                if(!genresObj[type]) {
                    genresObj[type] = [];
                }
                genresObj[type].push(i);
            }
        }
    }
    const totalPlays = {};
    for(const genre in genresObj) {
        let sum = 0;
        for(const i of genresObj[genre]){
            sum += plays[i]
        }
        totalPlays[genre] = sum;
    }

    const sortedGenres = Object.entries(totalPlays).sort((a,b) => b[1] - a[1])
    const sortedGenresNames = sortedGenres.map(item => item[0])

    for(const genre of sortedGenresNames) {
        const indexes = genresObj[genre];

        indexes.sort((a, b) => {
            if (plays[b] === plays[a]) return a - b;
            return plays[b] - plays[a]
        })

        answer.push(indexes[0]);
        if (indexes[1] !== undefined) answer.push(indexes[1])
    }

    return answer;
}