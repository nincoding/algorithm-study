/**
 * feat(PGS) : 해시 _ 완주하지 못한 선수
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