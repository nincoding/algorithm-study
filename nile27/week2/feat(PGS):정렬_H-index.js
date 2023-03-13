/**
 * H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
 * 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 * 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
 * 
 * 요약 : H-index 는 내림차순으로 정렬된 배열에 인용된 수와 index값이 같거나 작아지는 순간을 의미 한다.
 * 
 */

 function solution(citations) {
  var answer = 0;
  let arr = citations.sort(function(a,b){
      return b-a;
  })
  if(arr[0] === 0) return 0
  
  for(let i = 0 ;i < arr.length ; i++){
      if( i >= arr[i]){
          return i
      }    
  }
  return arr.length
}
