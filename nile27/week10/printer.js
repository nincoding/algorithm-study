/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
 * feat(PGS) : stack_프린터
 */

function solution(priorities, location) {
  var answer = 0;
  let numbering = [...priorities].sort((a,b) => b-a)
  let posi = Array.from({length: priorities.length}, (v, i) => i);
  let locationPosi = posi[location]

  while(priorities.length !== 0) {
      console.log(posi)
      if(priorities[0] !== numbering[0]){
          priorities.push(priorities.shift())
          posi.push(posi.shift())
          
      }
      else{
          priorities.shift()
          numbering.shift()
          answer++
          
          if(posi.shift() === locationPosi) return answer
          
      }
  }
      
  return answer;
}