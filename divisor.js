/**
 * LV.1
 * 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 * 입출력 예시
 * left = 13 right = 17 result = 43
 */

 function solution(left, right) {
  let answer = 0;
  let count = 0;
  for (let i = left ; i <= right ; i++){
      for (let j = 1 ; j <= i ; j++ ){
          if (i % j === 0){ count++ }
      }
      if(count % 2 === 0){ answer = answer + i }
      else {answer = answer - i}
      count = 0
  }
  return answer;
}

console.log(solution(13,17))