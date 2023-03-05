/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
 * feat(PGS): stack_올바른 괄호
 */

function solution(s){
  var answer = true;
  let left = 0
  if(s[0] === ')') return false
  for(let i = 0 ; i < s.length; i++){
      if(s[i] === '(') left+=1
      else left -= 1
      if(left < 0) return false
  }
  if(left !== 0) return false

  return answer;
}

