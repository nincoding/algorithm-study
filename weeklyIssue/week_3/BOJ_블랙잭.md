<h2 id='1'>📌 브루트포스란?</h2>

![](https://velog.velcdn.com/images/ninto_2/post/a37712db-000d-491b-8c57-3d43a973b97e/image.png)


암호학에선 주로 비밀번호 등을 해킹할 때 사용되었던 용어인데,
만약 최대 4자리의 비밀번호가 있다고 했을 경우 하나의 비밀번호를 풀기위해 0부터 9999까지의 모든 경우의 수를 다 시도해보는 것을 의미합니다.

> Brute + Force
단순히(순전히) + 힘 = 단순히 힘만 가지고 밀어붙인다.

브루트포스 혹은 **완전탐색 알고리즘**이라고 부릅니다.
순전히 힘만 갖고 밀어붙이는 것처럼 머리는 쓰지않고 모든 것을 다 해보는 것 과 같이 이렇게 간단하고 무식해보이는 기법이 가장 기본적인 알고리즘입니다.

<br>

***

<h2 id="2">📌 브루트포스 구현방법</h2>

**대표적으로 반복문, 재귀함수를 이용하는 방법**이 있습니다.
브루투포스를 구현하는 방법이 이 두가지만 존재하는 것은 아닙니다. 다만 간단한 문제는 반복문을, 조금 더 복잡한 문제들은 재귀함수를 활용하는게 가장 직관적입니다.

<h3 id='3'>🧐 문제 예시</h3>

**백준 브루트포스 - [2798번 블랙잭](https://www.acmicpc.net/problem/2798) 문제**

![](https://velog.velcdn.com/images/ninto_2/post/3f574642-15a2-4445-b890-5c4495615f69/image.png)

여러 숫자 카드들이 주어졌을때, 카드들로 가능한 모든 조합의 숫자를 만들어보고 그 중 특정 값(M)에 가장 가까운 카드 3장의 합을 구해야 하는 문제입니다.

이 문제를 풀기위해서는 우선 주어진 카드들로 모든 조합의 수를 만들 줄 알아야 합니다.

> **1. for나 while loop를 활용**

```js
//일반적인 브루트포스의 반복문
for (let i = 0; i < 10000; i++) {
	try(i) //0부터 9999까지 모든 수를 집어넣어서 시도해본다.
}
```
- for문을 사용한 블랙잭 문제 풀이

```js
// 입력값 데이터를 받아온 뒤 형식에 맞게 변형
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const firstLine = input[0].split(' ');
const secondLine = input[1].split(' ').map(Number); //카드의 정보들이 담겨져 있는 리스트

// N은 카드의 총 갯수, M은 최대한 가까이 맞춰야 하는 숫자
const N = parseInt(firstLine[0]);
const M = parseInt(firstLine[1]);

// 가장 가까운 합을 담을 변수를 만듭니다.
let max = 0;

// 3장의 카드를 가지고 조합해야 하기 때문에, 모두 0부터 N까지 반복하는 3중 반복문을 사용합니다.
for (let i = 0; i < N; i++) {
 for (let j = 0; j < N; j++) {
  for (let k = 0; k < N; k++) {
   // 만약 i,j,k가 서로 중복된다면(동일한 카드가 선택된 경우) 반복을 건너뜁니다.
   if (i === j || i === k || j === k) continue;
   // 서로 다른 카드가 선택된 경우 M을 초과하지 않는 최대값인지 확인 후 저장합니다.
   const sum = secondLine[i] + secondLine[j] + secondLine[k];
   if (sum > max && sum <= M) max = sum;
   // 만약 규칙에 맞는 숫자가 나온 경우에 더이상 계산을 할 필요가 없기 때문에 반복문을 종료합니다.
   if (max === M) break;
  }
 }
}
// 반복문을 통해 sum의 값이 새롭게 할당된 max를 출력합니다.
console.log(max);

```

총 사용된 메모리: 9712KB
총 소모된 시간: 184ms

<br>

위와 같은 문제는 반복문만 활용하는 방법 외에도 재귀함수를 활용해서 풀 수 있습니다.

> **2. 재귀함수를 이용**

위에서 풀었던 블랙잭이나 비밀번호 찾기처럼 간단한 예시 문제가 아니라면 재귀함수를 활용하는 방법이 더 좋습니다.

위 예시문제로 예를들어 설명을 해보자면, 카드 목록이 주어졌을때
재귀함수를 계속 호출하면서 각 숫자 카드를 쓸지 안 쓸지 결정하며
조합을 만들어 가면 모든 조합을 만들 수 있습니다.

- 재귀함수를 사용한 블랙잭 문제 풀이

```js
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const firstLine = input[0].split(' ');
const secondLine = input[1].split(' ').map(Number);
const N = parseInt(firstLine[0]);
const M = parseInt(firstLine[1]);

let picked = new Array(N);
picked.fill(false, 0, N);

// M의 최대값이 300_000이기 때문에 가장 가까운 수도 30_000이다.
let min = 300000;
let sum = 0;
let answer = 0;


function solution (last, start) {
    if (last === 0) {
      // 성공 조건- 카드 3장을 모두 뽑고 범위안에 충족했을때
        if (sum <= M && M - sum < min) {
            min = M - sum;
            answer = sum;
            return sum;
        }
       return;
    }
    
    for (let i = start; i < secondLine.length; i++) {
        if (!picked[i]) {
          // 카드를 선택했을때 선택한 카드가 더해짐
            picked[i] = true;
            sum += secondLine[i];
            solution(last - 1, i);
          // 카드를 선택하지 않았을때
            picked[i] = false;
            sum -= secondLine[i];
        }
    }
}

solution(3, 0);
console.log(answer);
```
총 사용된 메모리: 9996KB
총 소모된 시간: 184ms
