function solution(array) {
  //파라미터 배열을 문자열로 합친다.
  //문자열의 길이만큼 반복한다.
      // 문자열의 반복횟수번째 문자가 7이라면 answer증가시킨다.
  
  var answer = 0;
  
  let str = array.join('');
  
  for(let i in str){
      if(str[i] === '7'){
          answer++;
      }
  }
  
  return answer;
}
