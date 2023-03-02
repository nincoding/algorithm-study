/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12933
 * feat(PGS): LV_1_정수 내림차순 배치
 */


function solution(n) {
  let num = String(n).split('').sort((a,b) => b - a).join('')    
  return Number(num);
}