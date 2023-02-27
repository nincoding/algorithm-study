/*

    Programmers / 타겟 넘버 / Level 2 / 00:41:22
    https://school.programmers.co.kr/learn/courses/30/lessons/43165

    ## Pseudo Code ## 
    
    * 시간복잡도 : O(2^N) - 하나의 노드에서 2가지 선택지가 있다.
    * 공간복잡도 : O(2^N) - dfs함수 내부에서 dfs함수가 2번 호출되면 호출스택이 2개다 더 생성된다.

    - DFS 활용

    - 그래프 구조라고 생각.
      ㄴ 각 넘버들은 인덱스 순서대로 연결되어 있다.
      ㄴ  root <-> 4(0) <-> 1(1) <-> 2(2) <-> 1(3)

    - 트리 구조로 DFS탐색을 해보자.
      ㄴ root 에서 시작해서 자식 노드는 +넘버, -넘버 두 가지가 있다.
      ㄴ 자식노드를 탐색할 때 +, - 각각 탐색한다.
      ㄴ 합을 구해야 하니까 자식노드를 탐색할 때 현재까지 방문한 넘버의 합을 넘겨준다.
      ㄴ 마지막 노드까지 도달했을 때 합과 타겟넘버가 일치한다면 count++

    - 각 넘버에 +, - 인 경우의 수를 모두 확인하면, 대칭을 확인할 수 있다.
      ㄴ 같은 숫자에 부호만 다른 수들이 나온다.
      ㄴ 그래서 root에서 두 갈레로 갈라지지 않고 한 갈레만 진행, 대신 target과 비교 시 +, - 둘 다 체크

*/

function solution(numbers, target) {
  let count = 0;
  const lastIdx = numbers.length - 1;

  const dfs = (num, idx, sum) => {
    const currSum = num + sum;
    const nextIdx = idx + 1;

    if (idx !== lastIdx) {
      dfs(numbers[nextIdx], nextIdx, currSum);
      dfs(-numbers[nextIdx], nextIdx, currSum);
      return;
    }

    if (currSum === target || -currSum === target) count++;
  };

  dfs(numbers[0], 0, 0);

  return count;
}

console.log(solution([4, 1, 2, 1], 4));
