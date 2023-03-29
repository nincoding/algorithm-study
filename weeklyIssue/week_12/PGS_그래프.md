# [문제 가장 먼 노드](https://school.programmers.co.kr/learn/courses/30/lessons/49189)

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때,\
1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지 return 하는 함수를 만드시오.

- 가장 멀리 떨어진 노드는 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드를 말한다.
- 각 노드는 1부터 n까지 번호를 가지고 있다.

## 제한사항

- 노드의 개수 n은 2 이상 20,000 이하입니다.
- 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
- vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

## 입출력 예

```js
let answer = solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
console.log(answer); // 3
```

예제의 그래프를 표현하면 아래 그림과 같고, \
1번 노드에서 가장 멀리 떨어진 노드는 4,5,6번 노드입니다.
![](https://grepp-programmers.s3.amazonaws.com/files/ybm/fadbae38bb/dec85ab5-0273-47b3-ba73-fc0b5f6be28a.png)

## 풀이

세션4 자료구조/알고리즘에서 가장 어려웠던 [코플릿 문제-연결된 정점들](https://urclass.codestates.com/codeproblem/e8415861-7b88-44ff-b6ff-9338d70e81c5)이 생각났다.

1. 그래프를 만든다.

- 2차원 행렬 또는 인접 리스트로 만들어 보자

2. 1번 정점(인덱스 번호 0번)에서 BFS 를 돌린다.

```js
function solution(n, edge) {
  // let answer = 0;

  // 그래프를 만든다
  let graph = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  // 간선을 이어준다.
  makeGraph(graph, edge);

  // bfs
  bfs(graph, 0, distance);

  // return answer;
}

const makeGraph = (graph, edge) => {
  edge.forEach((element) => {
    graph[element[0] - 1][element[1] - 1] = 1;
    graph[element[1] - 1][element[0] - 1] = 1;
  });
};

const bfs = (graph, vertex) => {
  let que = [vertex];

  while (que.length > 0) {
    let current = que.shift();

    for (let i = 0; i < graph[current].length; i++) {
      if (graph[current][i]) {
        que.push(i);
      }
    }
  }
};
```

그래프와 BFS 까지는 코플릿 문제 풀 때 배웠던 방법으로 만들었는데 \
그 뒤 가장 먼 점을 어떻게 세야 될 지 감이 안왔다 ㅠㅠ
다른 사람들 풀이를 보니 주로 인접리스트로 푼 것 같았다.

인접리스트로 다시 만들었다.

```js
function solution(n, edge) {
  let answer = 0;

  // 인접리스트를 만든다
  let adjList = {};
  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }

  // edge를 연결해준다.
  edge.forEach((element) => {
    adjList[element[0]].push(element[1]);
    adjList[element[1]].push(element[0]);
  });

  return bfs(adjList);
}

const bfs = (adjList) => {
  let que = [1];
  let visited = { 1: true };
  let distance = { 1: 0 };

  while (que.length > 0) {
    let current = que.shift();

    if (adjList[current]) {
      adjList[current].forEach((vertex) => {
        if (!visited[vertex]) {
          que.push(vertex);
          visited[vertex] = true;

          const d = distance[current] + 1;
          if (distance[vertex] === undefined || d < distance[vertex]) {
            distance[vertex] = d;
          }
        }
      });
    }
  }

  const dist = Object.values(distance);
  const maxDistance = Math.max(...dist);
  return dist.filter((d) => d === maxDistance).length;
};
```

bfs에서 distance를 어떻게 구현할 지 또 잘 모르겠어서\
결국 다른 분들 풀이를 보고 간신히 이해했다... 헿 ...🥲
