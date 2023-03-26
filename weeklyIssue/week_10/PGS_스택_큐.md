# [프로그래머스 스택/큐 문제 모음](https://school.programmers.co.kr/learn/courses/30/parts/12081)

# 스택(Stack)

## 문제

[]()
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

## 제한 사항

- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

## 입출력 예제

```js
let answer = solution([93, 30, 55], [1, 30, 5]);
console.log(answer); // [2, 1]

answer = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
console.log(answer); // [1, 3, 2]

answer = solution([99, 99, 99, 90, 90, 90], [1, 1, 1, 1, 1, 1]);
console.log(answer); // [3, 3]
```

## 첫 번째 풀이

테스트 케이스 11개 중 3개만 통과 \
→ progresses 만 삭제하고, speeds를 삭제 안했음(정신 차리자 !)

(진도(progress) = 프로그램이라고 명명)

1. 가장 위에 있는 프로그램이 100%가 아니면, 모든 프그램들에 speed를 더해준다.
2. 가장 위에 있는 프로그램이 100% 이상이면 배포한다.
3. 이 때, 100% 미만인 프로그램을 만날 때까지 계속 꺼낸다.
4. 100% 미만인 프로그램을 만나면 멈추고, 여태까지 꺼낸 것들의 개수를 스택에 담는다.
5. 꺼낸 것들은 프로그램 배열에서 지우고, 프로그램 목록이 0이 될 때까지 재귀호출한다.

```js
function solution(progresses, speeds, stack = []) {
  let top = 0;

  if (progresses[top] < 100) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  } else {
    while (progresses[top] >= 100) {
      ++top;
    }
    stack.push(top);
  }

  progresses.splice(0, top);

  return progresses.length ? solution(progresses, speeds, stack) : stack;
}
```

## 통과된 풀이

테스트 케이스 추가

```js
answer = solution([95, 95, 95, 95], [4, 3, 2, 1]);
console.log(answer); // [2, 1, 1]
```

빠진 프로그래스 목록들은 삭제했는데, 그 프로그래스에 더해주는 speed는 안빼줘서 통과가 안되었던 거였다.

```js
function solution(progresses, speeds, stack = []) {
  let top = 0;

  if (progresses[top] < 100) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  } else {
    while (progresses[top] >= 100) {
      top++;
    }
    stack.push(top);
  }

  progresses.splice(0, top);
  /* 빠진 progresses 요소에 대응하는 speeds의 요소들도 삭제해 줌 */
  speeds.splice(0, top);

  return progresses.length ? solution(progresses, speeds, stack) : stack;
}
```

---

# 큐(Queue)

## [프린터 문제](https://school.programmers.co.kr/learn/courses/30/lessons/42587)

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
- location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

## 입출력 예제

```js
let answer = solution([1, 1, 9, 1, 1, 1], 0);
console.log(answer); // 5

answer = solution([2, 1, 3, 2], 2);
console.log(answer); // 1

answer = solution([1, 1, 1, 2], 2);
console.log(answer); // 4
```

## 풀이

![](https://velog.velcdn.com/images/iberis/post/7650857f-8471-44f1-bdbf-8ee5aa0835ff/image.jpeg)

```js
function solution(priorities, location) {
  let stack = [],
    max = Math.max(...priorities);

  while (priorities[location] !== max || location !== 0) {
    if (priorities[0] === max) {
      stack.push(priorities[0]);
      priorities.shift();
      location--;
      max = Math.max(...priorities);
    } else {
      priorities.push(priorities[0]);
      priorities.shift();
      location = location > 0 ? location - 1 : priorities.length - 1;
    }
  }

  return stack.length + 1;
}
```
