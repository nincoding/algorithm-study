## [orderOfPresentation 문제](https://urclass.codestates.com/codeproblem/131e80e0-0a7f-47e7-a808-321cc2da0690)

총 N개의 모든 조별 발표 순서에 대하여, 발표 순서가 적힌 배열 K를 말하면 이 발표 순서가 몇 번째 경우의 수인지를 리턴해야합니다.

모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.

## 입력

- 파라미터1: N

  - Number 타입의 1 <= N <= 12인 조의 개수

- 파라미터2: K
  - Number타입의 Array (0 <= index)

ex) n이 3이고 k가 [2, 3, 1]일 경우
모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고, 반환하는 값은 3이 됩니다.

## 주의사항

- k내에 중복되는 요소는 없다고 가정합니다.

## 입출력 예시

```js
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6
```

## 풀이

> `!` factorial
> 주어진 수부터 1까지의 내림차순의 모든 수의 곱
> ex) 5! = 5 × 4 × 3 × 2 × 1

발표 순서를 정하는 총 경우의 수는 N!이다.\
N!은 숫자가 조금만 커져도 수가 기하급수적으로 늘어난다.\
N이 10만 되도 3628800이 된다.\
따라서 모든 배열의 경우의 수를 구하지 않고 몇 번째 경우의 수인지 구하는 로직을 고려해야 된다.\

예를 들어 총 4개의 조가 있고, `[4, 2, 3, 1]`의 순서가 몇 번째인지를 구한다면,

1. `[4, _ , _ , _ ]` 제일 첫 번째 숫자인 4보다 먼저 올 수 있는 숫자들(4보다 작은 수)은 3, 2, 1이다.

2. 맨 앞에 3이 왔을 때의 모든 경우의 수는 3! 개이다.

- 왜냐하면`[3, _ , _ , _ ]` : 맨 앞은 3은 정해져 있으므로 나머지 3개의 숫자로 구할 수 있는 모든 경우의 수는 3! 개이기 때문이다.
- 마찬가지로 맨 앞에 2가 왔을 때의 모든 경우의 수도 3!개,
  맨 앞에 1이 왔을 때의 모든 경우의 수 3!개

3. 따라서 맨 앞이 4보다 더 작은 수가 있었던 경우의 수는 **3 × 3!** 개이다.

4. 맨 앞이 4로 시작하는 순서는 그 다음이므로, + 1을 해준다.
   즉, 4로 시작하는 가장 처음 순서인 `[4, 1, 2, 3 ]` 은 `1 + 3 × 3! `번째이다.

5. 이제 여기에 그 다음 번째 숫자들도 위와 같은 방식으로 주어진 숫자보다 먼저 올 수 있는 숫자들(더 작은 숫자)의 모든 경우의 수를 더해주면 정답을 구할 수 있다.

6. 다시 주어진 배열`[4, 2, 3, 1]`로 돌아가서 `[4, 2, _, _]` 두 번째 숫자인 2 보다 먼저 올 수 있었던 수(2보다 작은 수)는 1 **한 개**가 있다.

- 따라서 위와 마찬가지로 `[ 4, 1, _, _ ]` 일 때의 모든 경우의 수를 구해서 더해준다.
  - 1 한 개 있으므로 `1 × ` 가 되고,
  - 뒤에 두 칸의 모든 경우의 수 이므로 `2!`이 된다.
  - 즉, `1 × 2!` 이 된다.
  - 위에서 구해 준 개수를 모두 더해준다. `1 + 3 × 3!` + `1 × 2!`

6. 이 과정을 모든 자리의 수에 반복해준다.

```js
function orderOfPresentation(N, K) {
  // 팩토리얼 함수
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  // 순서
  let order = 0;

  // 사용한 카드인지 확인을 위한 배열, 인덱스가 카드 번호
  const isUsed = Array(N + 1).fill(false);

  for (let i = 0; i < K.length; i++) {
    let currentNum = K[i];
    isUsed[currentNum] = true;
    let unUsednumbers = isUsed
      .slice(1, currentNum)
      .filter((el) => el === false).length;
    let precedingCount = unUsednumbers * factorial(N - 1 - i);
    order = order + precedingCount;
  }

  return order;
}
```

코드를 좀 더 뜯어보자\
`[4, 2, 3, 1] ` 를 구한다고 했을 때, isUsed는 숫자가 이미 사용됐는지를 체크하는 배열이다.\
**[중요❗️]인덱스 번호가 조의 번호가 되는데,** \
인덱스 번호는 0번부터 시작하므로 N + 1 개만큼 배열의 요소를 만들어준다.

```js
// 사용한 카드인지 확인을 위한 배열, 인덱스가 카드 번호이다.
const isUsed = Array(N + 1).fill(false);

// (5)[ false, false, false, false, false ] 인덱스가 조의 번호이다. 0번 조는 없으므로 쓸 일이 없다
// [0번 조 : false, 1번 조 : false, 2번 조 : false, 3번 조 : false, 4번 조 : false,]
```

본격적인 로직 코드

```js
for (let i = 0; i < K.length; i++) {
  // K = [4, 2, 3, 1] 일 때
  let currentNum = K[i]; // 배열의 인덱스에 있는 숫자를 찾고
  isUsed[currentNum] = true; // 해당 조를 사용처리 해준다.

  let unUsednumbers = isUsed
    .slice(1, currentNum)
    // 0번째 조는 없으니 1번부터 자르고, 현재 숫자보다 작은 숫자(앞에 올 수 있었던 숫자)들을 찾는다.
    // 즉, 첫 번째 숫자가 4라면, 4보다 앞에 올 수 있는 1, 2, 3
    // 인덱스번호가 조의 번호라는 것 기억하기 !
    // [ 1번 조 : false, 2번 조 : false, 3번 조 : false ]

    .filter((el) => el === false).length;
  // 해당 숫자들 중 사용 안한 숫자의 개수를 구한다.
  // 즉, unUsednumbers는 위에 설명한 "3 × 3!" 에서 왼쪽의 "3" 이다.

  let precedingCount = unUsednumbers * factorial(N - 1 - i);
  //  [4 _ _ _ ] fatorial은 앞의 숫자가 고정되어 있을 때 남은 빈칸의 수 만큼 해주면 된다.
  // 즉, 인덱스보다 -1 개만큼 빈 칸이 있으므로 (총 조의 수 - i -1 개) 해주면 된다.

  order = order + precedingCount;
  // 이렇게 반복한 경우의 수를 모두 더해주면 끝!
}
```
