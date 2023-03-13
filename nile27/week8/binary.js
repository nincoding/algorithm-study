/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=javascript
 * feat(PGS) : LV_2 | 이진 변환 반복하기
 * 
 * 입출력
 * 
 * s = "110010101001" result = [3,8]
 */

function solution(s) {
  var answer = [];
  let count = 0;
  let sum = 0
  while(s !== '1'){
      let str = s
      str = str.split('').filter((item) => item === '1').join('')
      sum += s.length - str.length;
      count +=1
      s = String(str.length.toString(2))
  }
  answer = [count , sum]
  
  return answer;
}