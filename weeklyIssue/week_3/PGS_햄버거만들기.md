# 프로그래머스_lv1_햄버거만들기

 - **문제설명** <br/>
   재료의 정보를 나타내는 정수 배열 ingredient가 주어지고, <br/>
   정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로만 햄버거를 포장을 할 때,<br/>
   포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.

 - **제한사항** <br/>
   1 ≤ ingredient의 길이 ≤ 1,000,000 <br/>
   ingredient의 원소는 1, 2, 3 중 하나의 값이다. <br/>
   빵 = 1, 야채 = 2, 고기 = 3을 의미합니다.

 - **입출력 예** <br/>
   ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1] 일 때, return 값 : 2<br/>
   ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2] 일 때, return 값 : 0

 - **풀이**

 ```javascript
 function solution(ingredient) {
   const stack = [];
   let count = 0;

   // 빈 배열에 모든 요소를 하나씩 넣다가
   ingredient.forEach((el) => {
     stack.push(el);

     // 4개이상이 될 때마다 1, 2, 3, 1이 되는지 검사 하여 삭제
     if (stack.length >= 4) {
       // 삭제하고 다시 쌓였을 때 뒤에서부터 확인해야 되니 .slice(-4)
       let find = stack.slice(-4).join("");
       if (find === "1231") {
         stack.pop();
         stack.pop();
         stack.pop();
         stack.pop();
         count++;
       }
     }
   });

   return count;
 }
 ```

 - **시행착오 및 새로 알게된 것**<br/>
  1. 주어진 배열 자체를 순회하면서 1231 이 있으면 삭제하도록 했었는데, 그러면 삭제 된 후 이어지는 요소들끼리 1231일 때를 놓쳤다. <br/>
   → 새로운 배열에 하나하나 추가하면서 4개 이상이 됐을 때, 1231 을 만족하는 지 확인하여 pop! pop! 터뜨려줘야 한다. 보글보글 게임처럼! <br/>
  2. if문의 조건으로 &&을 나열했었는데, `.join()` 으로 하나의 문자열 변수로 만들어서 일치하는 지 확인하는 더 깔끔한 방법이 있었다 <br/>
  3. 나는 새로운 배열 newArray = []; 로 변수를 만들었었는데, 다른 사람들 풀이를 보다보니, stack 이라는 자료형이 있다는 것을 알게 됐다. 

 ## **stack**

 어떤 데이터의 구체적인 구현 방식은 생략한 채, 데이터의 추상적 형태와 그 데이터를 다루는 방법만을 정해놓은 것을 가지고 `추상자료형`, `ADT(Abstract Data Type)`라고 한다.
 널리 사용되는 ADT로는 `큐`, `스택`, `트리`가 있다.

 스택(stack)은 데이터를 한 줄로 탑처럼 쌓아서 추가하는 형태로, 선형(linear) 자료형이다.<br/>
 나중에 집어넣은 데이터가 먼저 나오는 선입후출 `LIFO(Last In First Out)`의 특징을 가지고 있다.

 ![stack 이미지](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/600px-Data_stack.svg.png)

 ### **스택이 사용되는 곳**

 - 스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용된다.

 - ctrl + z를 활용해 되돌리기를 하거나 ctrl + Y로 되돌리기 한 것을 다시 취소(복원)하는 작업들도 스택을 통해 구현할 수 있다.

 - 브라우저의 방문 기록이 쌓이는 History stack 도 stack의 한 사례이다. (이전 페이지로 뒤로가기 구현)

 - 자바스크립트에서 모든 함수 호출은 스택 자료 구조로 이루어져 있다.
   (함수 실행 콘텍스트들이 쌓이는 Call stack)

 ```javascript
 function a(data) {
   return b(data + 1);
 }

 function b(data) {
   return c(data + 1);
 }

 function c(data) {
   return data;
 }

 a(1); // 3
 ```

 (a 안에서 (b 안에서 (c)))가 호출되는 위 함수는, <br/>
 스택 메모리 안에서는 [a, b, c] 이렇게 호출된 순서대로 쌓이고(push), <br/>
 c → b → a 순서대로 실행된다.(pop)

 각 함수는 일정 메모리를 차지하기 때문에 스택 메모리 안에 너무 많이 쌓이면 메모리 에러가 발생한다.

 `stack underflow` : 스택이 비어있을 때 stack.pop을 시도하여 발생하는 에러 <br/>
 `stack overflow` : 재귀 함수를 무한 호출했을 때 나오는 대표적인 에러로, 스택의 크기가 꽉 차있을 때 stack.push를 시도하면 발생

 ### **stack에서 활용하는 함수의 종류와 설명**

 | ADT      | 종류 | 설명                                   |
 | -------- | ---- | -------------------------------------- |
 | Array    | 배열 | stack을 담을 배열이자 stack 그 자체    |
 | push     | 함수 | stack의 맨 위에 새 요소 추가           |
 | pop      | 함수 | stack의 맨 위에 있는 요소 삭제         |
 | peek     | 함수 | stack의 맨 위에 있는 요소 확인         |
 | contains | 함수 | stack에 해당 아이템이 존재하는지 확인  |
 | lefts    | 함수 | stack에 있는 모든 요소 문자열로 반환   |
 | clear    | 함수 | stack에 있는 모든 요소 삭제            |
 | empty    | 함수 | stack의 남은 요소가 있는지 없는지 확인 |

 ### **Stack 구현하기**

 JavaScript에 stack이 내장되어 있기 않지만, 베열(Array)과 내장함수들을 이용하여 흉내낼 수는 있다.

 ```javascript
 class Stack {
   constructor() {
     this._arr = [];
   }
   push(item) {
     this._arr.push(item);
   }
   pop() {
     return this._arr.pop();
   }
   peek() {
     return this._arr[this._arr.length - 1];
   }
   getSize() {
     return this._arr.length;
   }
   isEmpty() {
     return this.getSize() === 0;
   }
 }

 const stack = new Stack();
 stack.push(1);
 stack.push(2);
 stack.push(3);
 stack.pop(); // 3
 ```

 ### 추가로 더 공부할 것

 ### 스택(Stack)의 Big-O 시간복잡도 (Time Complexity)

 시간 복잡도가 뭔지 더 공부하고 이해하면 추가로 정리해야겠다.

 ### 배열 이용하지 않고 스택 (Stack)구현

 다른 분이 정리해 놓은 아래 코드를 완전히 이해하지 못했는데, 좀 더 공부하고 나중에 다시 한번 더 봐야겠다.

 ```javascript
 class Node {
   constructor(data) {
     this.data = data;
     this.next = null;
   }
 }

 class Stack {
   constructor() {
     this.top = null;
   }

   isEmpty() {
     return this.top === null;
   }

   push(data) {
     // 새로운 데이터를 받은 노드생성,
     const newNode = new Node(data);
     // 현재 최상위 노트(현재의 this.top노드) 기 새로 노드의 next가됨
     newNode.next = this.top;
     // 그리고 최상위 노드는 새로 들어온 newNode가 된다.
     this.top = newNode;
   }

   pop() {
     if (this.isEmpty()) return;
     // 최상단 노드가 pop()되면서 최상단 밑에있던 노드가 최상단 노드(this.top)가 된다.
     this.top = this.top.next;
   }

   peek() {
     if (this.isEmpty()) return -404;
     return this.top.data;
   }

   display() {
     if (this.isEmpty()) return;
     let curr = this.top;
     process.stdout.write("(TOP) ");
     while (curr.next) {
       process.stdout.write(`${curr.data} ---> `);
       curr = curr.next;
     }
     process.stdout.write(`${curr.data}\n`);
   }
 }
 ```

 참조 <br/>
 [[알고리즘/자료구조] JavaScript 스택(Stack) 구현하기](https://velog.io/@kimhyo_0218/JavaScript-스택Stack-구현하기)<br/>
 [[알고리즘, 자료구조] 자바스크립트로 스택(Stack)구현하기 (+개념이해)](https://algoroot.tistory.com/54)<br/>
 [[자료구조] 스택 with JavaScript](https://overcome-the-limits.tistory.com/entry/자료구조-스택-with-JavaScript)<br/>
 [큐, 스택, 트리 - JavaScript로 만나는 세상](https://helloworldjavascript.net/pages/282-data-structures.html)<br/>
 [위키백과 스택](https://ko.wikipedia.org/wiki/스택)<br/>
 [유튜브 Stack - Data Structures in JavaScript](https://www.youtube.com/watch?v=-g0lYeoIQEA)
