## 🔗 [공원산책 문제](https://school.programmers.co.kr/learn/courses/30/lessons/172928)

## 입출력 예

```js
let answer = solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]);
console.log(answer); // [0, 1]

answer = solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]);
console.log(answer); // [2, 1]

answer = solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]);
console.log(answer); // [0, 0]
```

## 처음 잘못된 풀이

1. park와 route 를 2차원 배열로 만들어준다.
2. switch - case 문으로 route에 해당하는 문자에서
   각 문자가 의미하는 방향으로 route의 칸만큼 이동시킨다
3. 이동한 곳이 공원 길이를 벗어나거나(undefined), 장애물이 있다면 이동시킨 거리를 다시 원상복구해주고 넘어간다.
4. 최종위치 리턴

### 문제점

다시 문제를 자세히 보니 start가 [0, 0]지점이 아니었고, \
이동한 위치가 아니라 "이동 도중"에 장애물을 만나면 그 회차는 건너뛰는 거였다.

```js
function solution(park, routes) {
  routes = routes.map((el) => el.split(" "));
  park = park.map((el) => el.split(""));

  let X = 0,
    Y = 0;
  for (let i = 0; i < routes.length; i++) {
    switch (routes[i][0]) {
      case "N":
        X -= +routes[i][1];
        if (park[X] === undefined || park[X][Y] === "X") {
          X += +routes[i][1];
          break;
        }
        break;
      case "S":
        X += +routes[i][1];
        if (park[X] === undefined || park[X][Y] === "X") {
          X -= +routes[i][1];
          break;
        }
        break;
      case "W":
        Y -= +routes[i][1];
        if (park[X][Y] === undefined || park[X][Y] === "X") {
          Y += +routes[i][1];
          break;
        }
        break;
      case "E":
        Y += +routes[i][1];
        if (park[X][Y] === undefined || park[X][Y] === "X") {
          Y -= +routes[i][1];
          break;
        }
        break;
      default:
        break;
    }
  }

  return [X, Y];
}
```

마침 오늘 공부한 세션이 알고리즘으로, 비슷한 시뮬레이션 문제를 풀어서 거기서 배운 내용을 응용해서 다시 풀이...
[코플릿 - [구현]보드게임](https://urclass.codestates.com/codeproblem/71d0ee0a-ebc6-4626-ab40-f891353b8695)

### 풀이

1. park에서 'S'가 적힌 start 지점을 찾는다.

2. routes에 적힌 방향으로 1칸씩 이동하면서 장애물을 만나거나 칸을 넘어가는지 확인한다.

- 장애물을 만나거나 공원길이를 넘어가면 break; 한다.
- 유효한 명령이었으면 명령에 적힌 칸수만큼 전부 이동하고 전부 이동한 칸 수를 start 좌표에 더해준다.

3. routes에 적힌 모든 요소(명령)들에 반복한다.

4. 모두 더해진최종 start를 리턴한다.

```js
function solution(park, routes) {
  const parkHigh = park.length;
  const parkWidth = park[0].length;

  // 시작지점 인덱스 찾기
  let start;
  for (let i = 0; i < parkHigh; i++) {
    for (let j = 0; j < parkWidth; j++) {
      if (park[i][j] == "S") start = [i, j];
    }
  }

  // 인덱스가 공원 길이를 넘어가거나, "X" 장애물 만나는지 체크
  const isValid = (x, y) => {
    return (
      x < 0 || parkHigh <= x || y < 0 || parkWidth <= y || park[x][y] === "X"
    );
  };

  // 각 명령어로 이동할 방향
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  for (const route of routes) {
    const [dir, distanceStr] = route.split(" ");
    let distance = parseInt(distanceStr);
    let [x, y] = start;

    let step = 0;

    // 명령어에 적힌 distance만큼 모두 이동할 때까지 반복
    while (step < distance) {
      x += directions[dir][0];
      y += directions[dir][1];

      // 유효하지 않은 이동or 장애물 만나면 해당 명령 종료
      if (isValid(x, y)) break;
      step++;
    }
    if (step === distance) start = [x, y];
  }

  return start;
}
```
