/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165#qna
 * feat(PGS) DFS_타겟 넘버
 */

function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;
  
  function DFS(L, sum) {
    if (L === length) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  }

  DFS(0, 0);
  return answer;

}