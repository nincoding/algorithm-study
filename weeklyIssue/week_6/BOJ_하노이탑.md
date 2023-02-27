![](https://velog.velcdn.com/images/ninto_2/post/62d09c01-c4c3-429d-a919-99c7d4c2237d/image.png)

재귀 함수는 계속해서 자기 자신을 호출하는 함수이기 때문에 원하는 결과를 얻었을 때 **종료하는 조건**을 잘 설정을 해야 한다.

재귀함수는 반복문보다 느리다.
하지만, **반복문보다 보기 좋기 때문에 유지보수 측면에서 장점**이 있다.

재귀 함수의 대표적인 예제 **하노이 탑** 문제를 풀어보자.

```
하노이의 탑(Tower of Hanoi)은 퍼즐의 일종이다. 세 개의 기둥과 이 기둥에 꽂을 수 있는 크기가 다양한 원판들이 있고, 퍼즐을 시작하기 전에는 한 기둥에 원판들이 작은 것이 위에 있도록 순서대로 쌓여 있다.

게임의 목적은 다음 두 가지 조건을 만족시키면서, 한 기둥에 꽂힌 원판들을 그 순서 그대로 다른 기둥으로 옮겨서 다시 쌓는 것이다.

1. 한 번에 한개의 원판만 옮길 수 있다.
2. 큰 원판이 작은 원판 위에 있어서는 안 된다.


하노이의 탑 문제는 재귀 호출을 이용하여 풀 수 있는 가장 유명한 예제 중의 하나이다. 그렇기 때문에 프로그래밍 수업에서 알고리즘 예제로 많이 사용한다. 일반적으로 원판이 n개 일 때, 2n -1번의 이동으로 원판을 모두 옮길 수 있다(2n − 1는 메르센 수라고 부른다). 참고로 64개의 원판을 옮기는 데 약 18,446,744,073,709,551,615번을 움직여야 하고, 한번 옮길 때 시간을 1초로 가정했을 때 64개의 원판을 옮기는 데 5,849억 4,241만 7,355년이 걸린다.
```

<h2 id='9'>📌 문제 풀이</h2>

[백준 11729번- 하노이 탑 이동 순서](https://www.acmicpc.net/problem/11729)

![](https://velog.velcdn.com/images/ninto_2/post/02623e68-88f0-41fd-8b61-ff0bda5995b4/image.png)

![](https://velog.velcdn.com/images/ninto_2/post/d4454e50-99ca-4257-942a-7ac80d515178/image.png)

재귀로 하노이 탑 문제를 풀기 위해서는

> function(N)이 function(N-1)로 점점 작아지면서 Base case까지 작아져야한다.

즉, 가장 최우선적으로 해야 할 것은 최하층(N)인 제일 큰 원반을 제외하고 다른 원반들(N - 1)을 다른 곳으로 이동시켜야 한다.

그리고나서 가장 큰 원반을 목적지로 옮기면 그 후에는 다른 곳에 있는 원반들을 그 위에 쌓아주면 된다.

```js
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

// 과정을 담을 배열
const answer = [];

//num은 원반의 수
//start는 원반들이 위치한 곳의 번호
//other는 목적지가 아닌 나머지 한 곳
//target은 목적지

function hanoi(num, start, other, target) {
  // 재귀함수의 탈출 조건
  if (num === 0) return;

  //가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
  hanoi(num - 1, start, target, other);
  answer.push(`${start} ${target}`);

  //목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
  hanoi(num - 1, other, start, target);
}

// num, start, other, target
hanoi(input, 1, 2, 3);

// 옮긴 횟수
console.log(answer.length);

// 옮긴 과정에 줄바꿈 추가하기
console.log(answer.join("\n"));
```

[백준 1914번 - 하노이 탑](https://www.acmicpc.net/problem/1914)

![](https://velog.velcdn.com/images/ninto_2/post/79879b14-156b-493b-9afe-092b0679275c/image.png)

하노이탑 문제는 위 하노이 탑 이동 순서와 상당히 유사해 보이지만,
자세히 살펴보면 세부적인 조건이 추가된 것을 확인할 수 있다.

알고리즘 분류에서는 **재귀** 뿐만이 아니라 **임의 정밀도, 큰 수 연산** 이라는 키워드가 추가 되었고, 입력값을 받는 N 또한 기존 20까지에서 범위가 `1 <= N <= 100`으로 받을 수 있게 증가되었다.

> 20을 넘는 숫자를 입력받게 된다면 **첫번째 줄에 옮긴 횟수 K를 출력**하고 두번째 줄 이상부터 **과정은 출력할 필요가 없어진다.**

20이라는 숫자만 입력받아도, 옮기는 과정이 `2의 20승 - 1`로 대략 1_048_575번이기 때문에 console로 과정을 모두 출력하게 되면 **메모리 초과** 오류가 발생하게 된다.

따라서 자바스크립트에서 지원하는 큰 수를 다룰 수 있는 `BigInt()`를 사용하여 처리하는 것이 하나의 방법이였다.

```js
// 배열의 push를 이용한 첫번째 풀이
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

const answer = [];

function hanoi(num, start, other, target) {
  if (num === 0) return;

  //가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
  hanoi(num - 1, start, target, other);
  answer.push(`${start} ${target}`);

  //목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
  hanoi(num - 1, other, start, target);
}

//옮긴 횟수를 출력 2의 n승 + (- 1)
console.log((BigInt(2 ** input) + BigInt(-1)).toString());

// 20 이하의 경우에만 재귀호출
if (input <= 20) {
  hanoi(input, 1, 2, 3);

  console.log(answer.join("\n"));
}
```

백준 11729번 문제와 달라진 점은 20이하일 때만 재귀호출을 하여, 만들어진 배열을 줄 바꿔주어 출력해주었다.

문제는 20을 넘어서는 경우에는 재귀에 넣지 않으면서 옮긴 횟수를 구하는 것이였다.

![](https://velog.velcdn.com/images/ninto_2/post/59e1e337-df28-4bee-af83-fd1082abc9e2/image.png)

원반을 옮기는 횟수가 `2의 N - 1`이라는 점을 고려하여 `BigInt()`를 사용하여 BigInt끼리 안전한 연산 이후에 `toString()`으로 다시 문자열로 만들어주었다.

```js
BigInt(2 ** 20) + BigInt(-1); // 1048575n
(BigInt(2 ** 20) + BigInt(-1)).toString(); // 1048575
```

- BigInt()로 연산 뒤에 toString()를 붙이지 않으면, n이 남는다.

<br>

---

<h2 id='10'>📌 참고 자료 </h2>

https://velog.io/@jinsunkimdev/%EB%B0%B1%EC%A4%80-11729%EB%B2%88-%ED%95%98%EB%85%B8%EC%9D%B4-%ED%83%91-%EC%9D%B4%EB%8F%99-%EC%88%9C%EC%84%9C

https://www.youtube.com/watch?v=aPYE0anPZqI

https://www.youtube.com/watch?v=FYCGV6F1NuY

https://www.youtube.com/watch?v=Xu5GC_7YIeQ

https://www.youtube.com/watch?v=RiWJ-pNYs7k
