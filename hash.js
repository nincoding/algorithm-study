/**
 * feat(PGS): hash 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 
 * 마라톤 선수들 중 완주하지 못한 단 한명의 선수를 찾아라
 * 
 * 입출력 예시
 * 입력 participant =["leo", "kiki", "eden"]
 * 출력 completion = ["eden", "kiki"]
 * result = "leo"
 */



function solution(participant, completion) {
    var answer = '';
    participant.sort()
    completion.sort()
    participant.push('')
    for(let i = 0 ; i < participant.length ; i++){
        if (participant[i] !== completion[i]){
            return participant[i]
            
        }
            
    }

}