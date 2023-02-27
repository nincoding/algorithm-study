/*

    Coplit / Bubble Sort / Section 3 / 00:28:76
    https://urclass.codestates.com/codeproblem/d7520901-f036-4b59-83fc-492f8c3117c3

    ## 문제 ##
    
    - 숫자로 이루어진 배열을 버블정렬해서 오름차순 정렬하기
    - 입력 : number[]
    - 출력 : number[]


    ## Pseudo Code ##
    
    * 시간복잡도 : O(n^2), 루프 마다 스위치가 있었는지 확인하는 최적화 적용
    * 공간복잡도 : O(1), 입력된 arr 외에 추가적인 메모리 사용하지 않음

    1. 배열을 루프
    2. 현재 요소가 다음 요소보다 크면 두 요소 스위치
    3. 루프 종료 후 루프 중 스위치가 1번도 없었으면 배열 리턴
    4. 스위치가 1번 이상 있었으면 다시 루프

    - forEach()로 루프를 한 이유
      ㄴ 버블정렬의 경우 forEach() 도중에 멈추는 경우가 없다.
      ㄴ forEach()는 배열의 기존 요소값이 바뀐 경우, callback에 전달하는 값은 forEach()가 요소를 방문한 시점의 값을 사용

*/

const bubbleSort = function (arr) {
  let isChanged = true;
  while (isChanged) {
    isChanged = false;
    arr.forEach((el, idx) => {
      const nextIdx = idx + 1;
      if (el > arr[nextIdx]) {
        isChanged = true;
        [arr[idx], arr[nextIdx]] = [arr[nextIdx], arr[idx]];
      }
    });
  }
  return arr;
};

console.log(bubbleSort([2, 1, 3, 0, 8, 6, 10]));
// 2 1 3 0 8 6 10
