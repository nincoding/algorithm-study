/*

    Coplit / Fibonacci / Section 3 / 00:11:33
    https://urclass.codestates.com/codeproblem/7808febd-f75c-43b9-bf99-34cd7588a7f0


    ## Pseudo Code ##
    
    - 피보나치는 재귀로 풀면 이전 값을 계속 필요로하니까 이전 값을 기억하면 효율적일 듯
    1. Map으로 값을 기억하기
    2. 값이 있으면 재귀를 멈추고 값을 바로 쓰기

    시간복잡도 : O(n)

*/

const map = new Map();
map.set(0, 0);
map.set(1, 1);

const fibonacci = n => {
  if (map.has(n)) return map.get(n);
  map.set(n, fibonacci(n - 2) + fibonacci(n - 1));
  return map.get(n);
};

console.log(fibonacci(10));

// 메모이제이션을 안하고도 O(n)의 시간복잡도로 계산 가능
function fibonacciTail(n, a = 0, b = 1) {
  if (n === 0) return 0;
  if (n === 1) return b;
  return fibonacciTail(n - 1, b, a + b);
}
