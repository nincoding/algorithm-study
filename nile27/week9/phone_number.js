/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
 * feat(PGS) : LV1_핸드폰 번호 가리기
 */

function solution(phone_number) {
  let answer = ''
  for(let i = 0 ; i < phone_number.length-4; i++){
      answer += '*'
  }
  
  return answer + phone_number.slice(phone_number.length-4);
}