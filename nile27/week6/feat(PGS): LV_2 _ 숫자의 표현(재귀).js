/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924#
 * feat(PGS): LV_2 _ 숫자의 표현(재귀)
 */

const Sum = (start , n, sum)=> {
  if(sum > n) return 0
  else if (sum === n) return 1
  else return Sum(start+1, n, sum+start)
  
}


function solution(n) {
  let answer = 0;
  for (let i = 1 ; i <= n ; i++){
      answer = answer + Sum(i, n, 0)
  }
  return answer;
}