function solution(array) {
    //배열이 갯수가 홀수면 array.length/2 의 인덱스가 중앙값
    //sort는 요소를 문자열로 인식한다.
    // 유니코드 순서로 정렬을 하기때문에 지정을 해주지않으면 80보다 9가크다고 판단한다.  80= 8+0으로 보기떄문
  array.sort((a,b) => a-b);
  let midindex = Math.floor(array.length/2)
      return array[midindex]   
}
 
