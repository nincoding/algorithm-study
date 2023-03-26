![](https://velog.velcdn.com/images/ninto_2/post/77005a50-fcbe-431f-9ffa-95397aa2a9b2/image.png)

<h2 id='1'>📌 Tree</h2>

대표적인 비선형 자료구조중에서 그래프와 트리에 대해 알아봅시다.

비선형자료구조란 일렬로 나열하지 않고 자료 순서나 관계가 복잡한 구조를 말합니다.
일반적으로 그래프와 트리를 의미합니다.

트리는 그래프 중 하나로 그래프의 특징처럼 (V)정점과 (E)간선으로 이루어져 있고,
**트리 구조로 배열된 일종의 계층적 데이터의 집합**입니다.



<br>

---

<h2 id='2'>📌 트리의 구성</h2>

![](https://velog.velcdn.com/images/ninto_2/post/76c2cdf5-72ee-4a7b-a992-a0bc24692b50/image.png)

> 트리는 **루트노드, 리프노드, 부모노드, 자식노드, 서브트리**로 구성됩니다.

(참고로 트리로 이루어진 집합을 숲이라고 합니다.)

![](https://velog.velcdn.com/images/ninto_2/post/44570023-3975-4f08-b1b7-eda00cf77799/image.png)

- **루트노드**: **가장 위에 있는 노드**를 뜻합니다.

보통 트리 문제가 나오고 트리를 탐색할때 루트노드를 중심으로 탐색하면 문제가 쉽게 풀리는 경우가 많습니다.
(전위순회, 중위순회, 후위순회)

- **내부노드**: 루트노드와 내부 노드 사이에 있는 노드를 뜻합니다.

- **리프노드**: 리프노드는 자식노드가 없는 노드를 뜻합니다.

<br>

**트리의 높이와 레벨**

![](https://velog.velcdn.com/images/ninto_2/post/a54987e7-817a-4092-b68e-dec5a5806321/image.png)

- **깊이** : 트리에서 깊이는 각 노드마다 다르며, **루트 노드부터 특정 노드까지 최단거리로 갔을때의 거리**를 말합니다.
(위 예시에서 4번 노드의 깊이는 2입니다.)

- **높이** : 트리의 높이는 **루트 노드부터 리프 노드까지 거리 중 가장 긴 거리를 의미**합니다.
(위 예시에서 높이는 3입니다.)

- **레벨** : 트리의 레벨은 주어지는 문제마다 조금씩 다르지만 보통 깊이와 같은 의미를 지닙니다.
(1번 노드 레벨을 0레벨이라고 하고, 2번,3번노드까지의 레벨을 1레벨이라고 할 수도 있고, 1번 노드를 1레벨이라고 한다면 2번,3번 노드는 2레벨이 됩니다.)

- **서브트리** : **트리 내의 하위 집합**을 서브트리라고 합니다. 즉, 트리 내에 있는 부분집합이라고도 보면 됩니다.
(위 예시에서는 5,6,7번 노드가 이트리의 하위집합으로 서브트리라고 말할 수 있습니다.)

<br>

---

<h3 id='2.2'>📌 트리의 특징</h3>

트리는 그래프의 일종이며 **다음과 같은 특징**을 가진다는 점이 다릅니다.

1. **부모, 자식 계층 구조**를 가집니다.

- 5번 노드는 6번,7번 노드의 부모노드이고, 6번,7번노드는 5번 노드의 자식노드입니다.
- 같은 경로상 어떤 노드보다 위에 있으면 부모, 아래에 있으면 자식 노드가 됩니다.

2. **V(정점) - 1 = E(간선) 라는 특징이 있습니다.**

- 간선 수는 `노드 수 - 1` 입니다.

3. 임의의 두 노드 사이의 경로는 유일무이하게 존재합니다.

- 트리 내의 어떤 노드와 어떤 노드까지의 경로는 반드시 있습니다.

<br>

---

<h3 id='2.3'>📌 트리의 종류 </h3>

트리의 종류는 상당히 많습니다.
하지만 그 많은 트리 구조 중 가장 많이 쓰이는게 바로
**이진트리**와 **이진탐색트리** 입니다.

![](https://velog.velcdn.com/images/ninto_2/post/b379b92a-e3ba-4776-9293-40b708883e98/image.png)


> 📌 **이진트리**

이진트리는 자식의 노드 수가 두개 이하인 트리를 의미합니다.

![](https://velog.velcdn.com/images/ninto_2/post/8d141988-9399-4060-8d7d-1f8c28c81410/image.png)

- **정이진트리**(full binary tree): 자식노드가 0또는 두개인 이진트리를 의미합니다.

- **완전이진트리**(complete binary tree): 왼쪽부터 채워져 있는 이진트리를 의미합니다. 마지막 레벨을 제외하고는 모든 레벨이 완전히 채워져 있으며 마지막 레벨의 경우 왼쪽부터 채워져 있습니다.

- **포화이진트리**(perfect binary tree): 모든 노드가 꽉 차 있는 이진트리를 의미합니다.

그 외에도 이진트리의 종류에는 변질이진트리, 균형이진트리 등도 있습니다.

<br>

> 📌 **이진 탐색 트리(Binary Search Tree = BST)**

이진탐색트리 (Binary Search): 트리에 이진탐색이라는 알고리즘을 적용해 놓은 트리

![](https://velog.velcdn.com/images/ninto_2/post/368f9a36-43e0-4a8c-acee-492ddea40c17/image.png)


이진 탐색 트리(BST)는 노드의 **오른쪽 하위 트리**에는 **노드 값보다 큰 값**이 있는 노드만 포함되고,
노드의 **왼쪽 하위 트리**에는 **노드 값보다 작은 값**이 들어 있는 트리를 말합니다.

![](https://velog.velcdn.com/images/ninto_2/post/080f7684-47c0-4028-8c3b-9624ba51a670/image.png)


보통 요소를 찾을때 이진 탐색트리의 경우 O(logn)이 걸리지만 최악의 경우 O(n)이 걸립니다.

**그 이유는 이진 탐색트리는 삽입 순서에 따라 선형적일 수 있기 때문**입니다.

<br>

**일반 이진트리를 탐색하는 방법**

![](https://velog.velcdn.com/images/ninto_2/post/4c405d13-e1b8-4072-bf86-c5d49897a99e/image.png)

트리를 순회하는 방법: 내가 원하는 데이터 한개를 찾아내려고 싹 다 돌아다니는 방법에는 3가지 방법이 있습니다.

- **전위 순회**(루트 - 왼쪽 - 오른쪽) 
- **중위 순회**(왼쪽 - 루트 - 오른쪽) 
- **후위 순회**(왼쪽 - 오른쪽 - 루트)

전,중,후를 나누는 건 **루트 노드를 언제 방문하는지** 순서에 따라 결정됩니다.

<br>

---

**05[Tree] 구현**

<h1 id='1.2'>Implementation Tree</h1>

Tree 구현을 위한 기본적인 코드가 작성되어 있습니다.

Tree 자료구조의 특성을 이해하고 `FILL_ME_IN` 을 채워 테스트를 통과해주세요.

```js
class Tree {
  constructor(value) {
    // constructor로 만든 객체는 트리의 Node가 됩니다.
    this.value = value;
    this.children = [];
  }

  // 트리의 삽입 메서드를 만듭니다.
  insertNode(value) {
    // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
    // TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.
    const childNode = FILL_ME_IN;
    this.children.push(FILL_ME_IN);
  }

  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
  contains(value) {
    // TODO: 값이 포함되어 있다면 true를 반환하세요.
    if (FILL_ME_IN) {
      return true;
    }
    // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.

    // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
    return false;
  }
}
```

<br>

📌 멤버 변수

- 입력 데이터를 담을 수 있는 value
- 하위 노드를 저장할 수 있는 Array 타입의 children

<br>

📌 메서드

- insertNode(value): 입력받은 value를 Tree에 계층적으로 추가할 수 있어야 합니다.
- contains(value): 트리에 포함된 데이터를 찾을 수 있어야 합니다.

<br>

📌 주의 사항

- value는 어떠한 값도 들어갈 수 있지만 현재 구현하는 Tree는 숫자로 제한합니다.

<br>

📌 사용 예시

```js
const rootNode = new Tree(null);

for(let i = 0; i <= 4; i++) {
  if(rootNode.children[i]) {
    rootNode.children[i].insertNode(i);
  }
 rootNode.insertNode(i);
}
rootNode; // {value: null, children: Array(5)}
rootNode.contains(5); // false
rootNode.contains(1); // true
...
```

<br>

📌 테스트

- 노드를 추가할 수 있어야 합니다.
- 트리에 포함된 데이터를 확인할 수 있어야 합니다.
- 트리에 포함되지 않은 데이터를 확인할 수 있어야 합니다.
- 계층적으로(예. 자식의 자식) 노드를 추가할 수 있어야 합니다.
- 트리에 포함된 데이터를 재귀적으로 찾을 수 있어야 합니다.

<br>

---

<h2 id='1.4'>🤔 문제 해결</h2>

<br>

```js
class Tree {
  constructor(value) {
    // constructor로 만든 객체는 트리의 Node가 됩니다.
    this.value = value;
    this.children = [];
  }

  // 트리의 삽입 메서드를 만듭니다.
  insertNode(value) {
    // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
    // TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
  contains(value) {
    // TODO: 값이 포함되어 있다면 true를 반환하세요.
    if (this.value === value) {
      return true;
    }
    // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
    return false;
  }
}
```

<br>

---

<h2 id='3.2'>📌 Reference Code</h2>

<br>

```js
class Tree {
  //tree의 constructor를 구현합니다.
  //tree의 자식 노드들을 children으로 할당하여 노드의 자식 노드들을 담을 수 있게 설정합니다.
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  //tree의 자식 노드를 생성 한 후에, 노드의 children에 push해 줍니다.
  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }
  // tree에서 value값을 탐색합니다.
  // 현재 노드의 value 값이 찾는 값과 일치한다면 return합니다.
  contains(value) {
    if (this.value === value) {
      return true;
    }
    // 노드가 가진 자식 노드를 순회하는 반복문으로 노드의 children 배열을 탐색합니다.
    for (let i = 0; i < this.children.length; i += 1) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }
    return false;
  }
}
```
