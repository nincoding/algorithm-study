/*

    Coplit / Tree BFS / Section 3 / 00:36:38
    https://urclass.codestates.com/codeproblem/28fad459-9f39-44d2-96c8-c730bb12b234

    ## 문제 ##
    
    임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아,
    해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다.
    이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

    - 입력: Node
    - 출력: number[]

    Node {
      this.value : Number
      this.children : Node[]
    }


    ## Pseudo Code ## 
    
    1. 방문을 기록할 배열 visited 생성
    2. 탐색을 위한 Queue 생성
        ㄴ Queue에 root 추가
    3. Queue의 길이가 0이 될 때까지 반복
        ㄴ Queue의 head의 value를 visited에 추가
        ㄴ dequeue
        ㄴ head의 children을 Queue에 추가
    4. 반복 종료 후 visited 리턴
*/

let bfs = function (node) {
  const queue = [node];
  const visited = [];

  while (queue.length > 0) {
    const head = queue[0];
    visited.push(head.value);
    queue.shift();

    for (const childNode of head.children) {
      queue.push(childNode);
    }
  }

  return visited;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]
