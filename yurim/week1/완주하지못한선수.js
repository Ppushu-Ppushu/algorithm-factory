function solution(participant, completion) {
    const participant_length = participant.length;

    participant.sort();
    completion.sort();

    for(let i = 0; i < participant_length; i++) {
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

// 정답률 91.7ㄴ
function solution(participant, completion) {
    const participant_length = participant.length;

    const sorted_participant = participant.sort();
    const sorted_completion = completion.sort();
    console.log(sorted_participant, sorted_completion)

    for(let i = 0; i < sorted_completion.length; i++) {
        if(sorted_completion[i] !== sorted_participant[i]) {
            console.log(sorted_participant[i], sorted_completion[i])
            return sorted_participant[i];
        };

        if(i === sorted_completion.length-1) {
            return sorted_participant[i+1]
        }

    }
}