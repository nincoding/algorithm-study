function solution(A, B) {
  var answer = 0;
  //수도코드
  //문자열을 밀어낸다 
  //만약 문자열이 B와 동일하다면
  //answer를 1로 변환한다.
  
  for(let i in A){
    if(A === B){
        return answer;    
    } 
    A = A[A.length-1]+A.substr(0,A.length-1);
    answer++
}

return -1;

}
