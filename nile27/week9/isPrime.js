/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92335#qna
 * 
 * feat(PGS): kakaoBlind 2022_k진수에서 소수 개수 구하기
 * 
 */

function isPrime(n){
  if(n === 1 || !n) return false
  
  let sqrt = Math.sqrt(n);
  for(let i = 2 ; i <= sqrt ; i++){
      if(n % i === 0)
          return false
  }
  return true
}


function solution(n, k) {
  var answer = 0;
  let change = n.toString(k)
  let stack = ''
  
  for(let i = 0 ; i < change.length ; i++){
      if(change[i] === '0' ) {
          if(isPrime(Number(stack))){
              answer += 1
          }
          stack = ''   
      }
    else stack = stack + change[i]
  }
  
  if(isPrime(Number(stack))) answer += 1
  return answer;   
}
