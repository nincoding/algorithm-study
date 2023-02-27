![](https://velog.velcdn.com/images/ninto_2/post/736cf3b8-313b-4625-826c-53867dd5eb47/image.png)

<h2 id='1'>📌 그리디 알고리즘</h2>

> **그리디 알고리즘**은 선택의 순간마다 **당장 눈앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법**입니다.
`Greedy` 는 단어적으로 `탐욕스러운, 욕심 많은`이란 뜻을 가지고 있습니다.

여기서 말하는 탐욕적이다라는 말은 **어떠한 한 가지 경우만을 보고 쫓는다**고 이해하시면 됩니다.

![](https://velog.velcdn.com/images/ninto_2/post/856d5a31-2eb2-4c87-b578-bbdcd0dc4192/image.png)
▲ 시작점에서 출발하여 가장 큰 수를 찾아내는 문제

시작 지점에서 출발하여 가장 큰 수에 도달하기 위해선,
일반적으로 `시작 - 6 - 128`을 선택하는 경우가 best한 상황이지만
그리디 알고리즘은 매 순간 최선의 선택을 하기 때문에 `시작 - 17 - 23`의 루트를 따라가게 됩니다.

이렇듯, 그리디 알고리즘은 **현재 상황에서 가장 좋은 결과를 선택해 나가는 방식**이지만 **최종적인 결과 도출에 대한 최적해를 보장해주는 것은 아닙니다**.

따라서 그리디 알고리즘을 사용하려면 **조건이 필요**합니다.

> **1. 안전한 선택 조건:** 그리디 알고리즘을 사용하면 최적해가 나올 수 있는 문제여야 합니다.
> **2. 최적 부분 구조 조건:** 부분 문제에 대해서도 또한 최적의 해결 방법이여야 합니다.
그리디 알고리즘은 기본적으로 `무조건 큰 경우대로, 무조건 작은 경우 대로, 무조건 짧은 경우대로 등`으로 **극단적으로 문제에 접근한다는 점에서 정렬기법이 함께 사용되는 경우**가 많습니다.

<br>

---

<h2 id='2'>📌 대표 예제 문제</h2>

![](https://velog.velcdn.com/images/ninto_2/post/e4444ae1-c885-4792-bf09-f65a366a824c/image.png)

그리디 알고리즘의 대표적인 예제 문제는 **거스름돈 문제**입니다.
거스름 돈을 줄 때 가장 적은 양의 화폐를 주는 것이 제일 편합니다.

![](https://velog.velcdn.com/images/ninto_2/post/76591fe7-0d4c-436d-a77e-76ed1766af6e/image.png)

예를들어, 50237원을 거슬러 줄 때는 1원짜리 동전을 50237개 주는 것보다 5만원권 1장, 100원짜리 동전 2개, 10원짜리 동전 3개, 1원짜리 동전 7개를 주는 것이 가장 적은 양의 화폐를 주는 방법이 됩니다.

즉 이런 경우에는 **무조건 더 큰 화폐 단위부터 거슬러 준다**는 알고리즘만 지키면 **최적의 해를 보장**할 수 있게 됩니다.

```js
function solution(money) {
  //화폐의 종류
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 몇 번 거슬러 줘야하는지 담을 배열
  let result = [];
  // 화폐에 맞게 순서대로 반복돌림
  for (let i = 0; i < currency.length; i++) {
    // 각 화폐의 양 만큼 나눈 몫의 양
    let currCount = Math.floor(money / currency[i]);
    // 만약 나눌 수 있는 경우 배열에 담아주고 money에서 해당 금액을 빼준다.
    if (currCount !== 0) {
      result.push(currCount);
      money -= currency[i] * currCount;
    }
    // 나눌 수 없는 경우엔 0을 배열에 넣어준다.
    else {
      result.push(0);
    }
  }
  // 최종적으로 result에는 각 화폐에 맞게 최대한 담을 수 있는 값이 배열에 담겨있다.
  return result;
}
```

<br>

**백준 그리디알고리즘 - [11047번. 동전 0](https://www.acmicpc.net/problem/11047)**

![](https://velog.velcdn.com/images/ninto_2/post/9b56797d-8c2a-4ba8-b4d1-2d069170790b/image.png)

```js
const fs = require("fs");
let [N, ...nums] = fs
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
let money = nums.shift(); // 4200
nums.reverse(); // [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1]
let count = 0;
for (let i = 0; i < nums.length; i++) {
  if (money < nums[i]) {
    continue; // money가 해당화폐보다 작다면 나눌 수 없기때문에 건너뛴다.
  } else {
    const value = Math.floor(money / nums[i]);
    money -= value * nums[i];
    count += value;
    if (money === 0) {
      break;
    }
  }
}
console.log(count);
```

<br>

**프로그래머스 [그리디- 구명보트](https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript)**

![](https://velog.velcdn.com/images/ninto_2/post/282515f0-b889-4420-bdfc-aa5d05146ee4/image.png)

![](https://velog.velcdn.com/images/ninto_2/post/3adb2eb1-ff06-40cd-94b6-6bb8774d3aaa/image.png)

```js
function solution(people, limit) {
  let answer = 0;
  // 몸무게 내림차순으로 재정렬
  // [80, 70, 50, 50]
  people = people.sort((a, b) => b - a);
  // i는 80, 70, 50, 50 순
  // j는 50, 50, 70, 80 순
  // i가 j와 같아 질 때까지 순회하면서 i를 움직여주고 answer를 하나씩 추가해준다.
  for (let i = 0, j = people.length - 1; i <= j; i++, answer++) {
    // 두명이 limit를 초과하지않고 탈 수 있는 조건
    if (people[i] + people[j] <= limit) j--;
  }
  return answer;
}
```

<br>

---

<h2 id='2'>📌 참고 자료</h2>

https://velog.io/@contea95/%ED%83%90%EC%9A%95%EB%B2%95%EA%B7%B8%EB%A6%AC%EB%94%94-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%

https://www.youtube.com/watch?v=PNPIk3hc6ic
