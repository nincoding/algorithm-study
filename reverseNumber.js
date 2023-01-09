/**
 * LV.1
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 * 입출력 예시
 * n=12345 return = [5,4,3,2,1]
 */

 function solution(n) {
  var answer = [];
  let a = String(n)
  
  for (i of a){
      answer.unshift(Number(i))
  }
  
  
  return answer;
}

console.log(solution(12345))