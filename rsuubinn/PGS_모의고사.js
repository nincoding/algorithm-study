function solution(answers) {
    let answer = [0, 0, 0];
    let maxPeople = [];
    
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < answers.length; i++) {
        if(person1[i % person1.length] === answers[i]) answer[0] += 1;
        if(person2[i % person2.length] === answers[i]) answer[1] += 1;
        if(person3[i % person3.length] === answers[i]) answer[2] += 1;
    }
    
    let max = Math.max(...answer);
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === max) maxPeople.push(i + 1);
    }
    
    return maxPeople;
}
