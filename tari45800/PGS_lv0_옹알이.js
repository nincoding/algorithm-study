function solution(babbling) {
  //수도코드
  //파라미터 배열의 길이만큼 반복합니다. 
  //파라미터 배열의 반복횟수 번째(i) 요소에 접근합니다.
      // 만약 해당 요소가 "aya", "ye", "woo", "ma"로만 구성이 되어 있다면
      // answer를 증가시킵니다.

  var answer = 0;
  let regex = /aya|ye|woo|ma/gi;

  for(let i in babbling){
      //문자열의 "aya", "ye", "woo", "ma"을 모두 ''으로 치환했을 때 아무것도 남지 않는다면.
      if(babbling[i].replace(regex,'') === ''){
          answer++
      }

  }

  return answer;
}
