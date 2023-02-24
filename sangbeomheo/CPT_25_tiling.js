/*

    Coplit / Tiling / Section 3 / 00:37:27
    https://urclass.codestates.com/codeproblem/d03805e9-a4d4-49cd-a813-7982d9fbf3ac

    ## 문제 ##
    
    - 가로세로 n x 2 보드. 2 x 1 크기의 타일로 이 보드를 채우는 모든 경우의 수를 리턴
    - 입력 : number
    - 출력 : number


    ## Pseudo Code ## 
    
    * 시간복잡도 : 
    * 공간복잡도 : 

    - 세로 길이는 고정. 채우는 보드도 고정이기 때문에
    - 세로 기준 제일 상단 라인에 길이 1 or 2 타일을 놓는 경우의 수를 구하면 되겠다.
    - 중복이 없어야하니까 보드의 제일 왼쪽부터 하나씩 채워서 트리탐색을 하면 될 듯? (실패)
    - 하나하나 직접 적어보니까 피보나치수열임
          n => 1,2,3,4,5,6
      result => 1,2,3,5,8,13

*/

let tiling = function (
  n,
  memo = new Map([
    [1, 1],
    [2, 2],
  ])
) {
  if (memo.has(n)) return memo.get(n);
  memo.set(n, tiling(n - 2, memo) + tiling(n - 1, memo));
  return memo.get(n);
};

console.log(tiling(6));

const tilingTail = (n, a = 1, b = 2) => {
  if (n === 1) return 1;
  if (n === 2) return b;
  return tilingTail(n - 1, b, a + b);
};

console.log(tilingTail(6));
