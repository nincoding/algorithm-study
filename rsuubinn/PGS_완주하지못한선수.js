function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
    
}
