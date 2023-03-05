/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586#qna
 * feat(PGS) : stack_ 기능개발
 */


function solution(progresses, speeds) {
    var answer = [];
    let count =0;
    
    
    while(progresses.length !== 0){
        if(progresses[0] >= 100){
            progresses.shift()
            speeds.shift()
            count += 1
            while(progresses[0] >= 100 ){
                count += 1
                progresses.shift()
                speeds.shift()
            }
            answer.push (count)
            count = 0
        }
        else{
            for(let i = 0 ; i < progresses.length; i++){
                progresses[i] = progresses[i] + speeds[i]
            }
        }
    }
    
    return answer;
    
}
