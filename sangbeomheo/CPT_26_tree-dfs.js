/*

    Coplit / Tree DFS / Section 3 / 00:17:10
    https://urclass.codestates.com/codeproblem/b627e01d-f5e0-4c16-b9a6-57e8330405c8

    ## 문제 ##
    
    임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아,
    해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다.
    이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

    - 입력: Node
    - 출력: number[]

    Node {
      this.value : Number
      this.children : Node[]
    }


    ## Pseudo Code ## 
    
    1. node의 value를 output에 저장
    2. node의 children이 있으면 children의 요소 Node 들을 각각 dfs 함수 호출

*/

let dfs = function (node) {
  const output = [];

  const treeDFS = node => {
    output.push(node.value);

    if (node.children.length) {
      for (const childNode of node.children) {
        treeDFS(childNode);
      }
    }
  };

  treeDFS(node);

  return output;
};

let dfs2 = function (node) {
  const output = [node.value];

  for (const childNode of node.children) {
    output.concat(dfs2(childNode));
  }

  return output;
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
