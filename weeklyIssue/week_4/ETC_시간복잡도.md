> 왜 많은 기업들이 채용 과정에 코딩 (알고리즘) 테스트를 볼까요? 🤯 \
> 👩🏻‍🏫 알고리즘에 대한 공부는 어떻게 하면 될까요? \
> '코딩 테스트' 문제를 많이 풀어보면 될까요?

공부하고 있는 프로그래밍 언어를 기술적으로 어느정도 사용할 줄 안다면,
코딩(알고리즘) 테스트를 준비할 때 테스트 문제를 많이 푸는 것 + 자료구조와 알고리즘에 대한 공부도 병행하는 것이 좋습니다.

> **자료구조**를 공부할 때에는 다음과 같은 포인트들에서 해당 자료구조가 어떠한 특징을 가지는지를 생각해보면서 공부하면 좋습니다.
>
> - Order : 자료구조 안의 데이터들의 순서를 보장하는지
> - Unique : 중복된 데이터가 들어갈 수 있는지
> - Search : 검색할 때 얼마나 효율적인지
> - Modification : 구현하려는 기능에 따라 수정할 때 얼마나 효율적인지

> **알고리즘**를 공부할 때에는 다음과 같은 포인트들을 생각해보면서 공부하면 좋습니다.
> - InputSize : 인풋의 사이즈가 커질 수록 Big O가 어떻게 변화하는지
> - Space and Time : 공간과 시간 복잡도는 어떤지
> - DataStructure : 어떤 자료 구조를 통해서 이 알고리즘을 쓰는게 좋은지

> 추천하는 알고리즘 공부 순서
> - 그리디알고리즘
> - 탐색(완전탐색, BFS, DFS) 알고리즘
> - 기본 동적 프로그래밍 
>
> 참고할 수 있는 유튜브 무료 강의 - 나동빈 
> - [그리디(Greedy) 알고리즘 [ 실전 알고리즘 강좌(Algorithm Programming Tutorial) #38 ]](https://www.youtube.com/watch?v=PNPIk3hc6ic&list=PLRx0vPvlEmdDHxCvAQS1_6XV4deOwfVrz&index=38)
> - [(이코테 2021 강의 몰아보기) 2. 그리디 & 구현](https://www.youtube.com/watch?v=2zjoKjt97vQ&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=2)
> - [(이코테 2021 강의 몰아보기) 3. DFS & BFS](https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3)

-----
----

어떠한 기능을 구현하기 위해 다양한 코드를 작성할 수 있는 데, 
이 중 기능을 가장 빠르게 실행시키고, 컴퓨터의 저장 공간을 가장 적게 사용하는 코드를 보다 좋은 코드라고 할 수 있습니다.

그런데 가장 빠른 알고리즘을 찾기 위해 코드의 실행 시간을 직접 측정해서 비교하는 것은 한계가 있습니다. 사용하는 컴퓨터의 사양, 현재 돌아가고 있는 다른 프로그램 등의 외부 환경의 영향을 받아 측정 시간이 달라질 수 있기 때문입니다.

그래서 컴퓨터 과학에서는 **시간 복잡도(Time Complexity)** 라는 개념을 사용합니다.

# 시간 복잡도
**시간 복잡도**란 `데이터`가 많아질 수록 `걸리는 시간`이 얼마나 **급격히 증가**하는지를 나타내는 개념입니다. 

인풋 크기 | 알고리즘A | 알고리즘B
---|---|---
10개 | 10초 | 10초
20개 | 20초 | 40초
100개 | 100초 | 1000 초
시간복잡도 | (B보다) 크다 | (A보다) 작다

A가 (B보다) 더 빠른 알고리즘 /  B가 A보다 더 느린 알고리즘이라고 할 수 있습니다.

## 점근 표기법(Big-O Notation)
어떤 알고리즘의 소요시간을 고정적인 하나의 식으로 만들어 표현하기는 어렵습니다. 컴퓨터의 성능이나 사용하는 언어 등 외부 환경에 따라 달라질 수 있기 때문입니다.

그래서 알고리즘의 속도는 걸리는 실제 시간이나 하나의 고정된 식이 아닌 
**완료까지 걸리는 절차의 수** 로 평가되며, Big-O와 같은 표기법으로 표기합니다.

소요시간 | 점근 표기법(Big-O)
---|---|
20n + 40 | O(n)
20n² + 8n + 157 | O(n²)
5n³ + 199n² + 1 | O(n³) 
20lgn + 60 | O(lgn)

Big-O(빅-오) 표기 법 외에도 Big-Ω(빅-오메가)(최선의 경우일 때)
Big-θ(빅-세타)(평균의 경우일 때)도 있지만,

해당 알고리즘이 빠른(좋은) 알고리즘인지를 확인하려면 실행 횟수가 엄청나게 많을 때를 생각해보아야 합니다. 나쁜(느린) 알고리즘이더라도 실행 횟수가 적을 때 걸리는 시간은 얼마되지 않아 사용할 때 별로 불편을 느끼지 않을테니까요.
또 최악의 경우(실행 횟수가 엄청나게 많은 경우)를 가정해야, 실행 속도가 최대 어느 정도까지 걸릴지 예측할 수 있고, 예상 시간보다 오래 걸렸을 때의 문제를 보다 빠르게 파악할 수 있을 것입니다.
![](https://velog.velcdn.com/images/iberis/post/37e8db4f-9f21-4045-befc-e2e1c4605f33/image.jpg)

따라서 점근 표기법은 투입되는 데이터의 크기(n)가 엄청 크다고 가정하고,
결과에 유의미한 영향을 미치지 못하는 요소들은 모두 무시해버립니다.
또한 실제로 몇 초가 걸리는지는 중요하지 않고, 데이터 크기가 커짐에 따라 변화되는 성장성이 중요하므로 n 앞의 상수도 무시하게 됩니다.

### 점근 표기법(Big-O)의 표현들의 의미
![](https://velog.velcdn.com/images/iberis/post/1adc5db8-78e7-4901-aa06-a81a6341b010/image.webp)

자주 쓰이는 `O(1)`, `O(n)`, `O(n²)`, `O(lg n)`, `O(nlgn)` 가 있고, 그 외에도 `O(n^m)`, `O(2ⁿ)`, `O(sqrt(n))`, `O(n!)` 등의 표현들이 있습니다.

시간복잡도 빠르기 순서 \
**fast** `O(1) < O( log n ) < O(n) < O(n log n) < O(n^2) < O(n^3)` **slow**

아래 설명의 time은 실행되는 절차의 수을 말합니다.
#### O(1) : 데이터의 크기에 상관없이 항상 1 time이 걸립니다.
- 상수 시간(constant time)이 걸리는 경우는 모두 O(1)으로 표기합니다.
  - 시간 복잡도의 개념인 '얼마나 급격히 증가'가 중요하기 때문입니다.

```javascript
let numbers = [1, 2, 3, 4, 5];

function print(){
  console.log(numbers);
}

// 시간복잡도가 O(1) 입니다.
print(); // [ 1, 2, 3, 4, 5 ]
```
#### O(n) : 데이터의 크기와 비례해서 소요되는 time이 증가합니다.
- 주로 반복문이 있고, 반복되는 횟수가 인풋의 크기와 비례할 때  O(n)의 시간복잡도를 가집니다.
```javascript
let numbers = [1, 2, 3, 4, 5];

function print() {
  for (num of numbers) {
    console.log(num);
  }
}

 // 시간복잡도가 O(n) 입니다.
print(); // 1 2 3 4 5

// 1/2번 반복해도 시간 복잡도는 O(n) 입니다. O(1/2n)아님 주의
function print2(ary) {
  for (i = 0; i < parseInt((ary.length)/2); i++) {
    console.log(ary[i]);
  }
}

print2(numbers); // 1 2
```
#### O(n²) : 데이터의 크기가 증가할 수록 소요되는 time이 제곱해서 증가합니다.
- 주로 반복문이 중첩되어 있는 경우 O(n²) 시간 복잡도를 가집니다.
- 비슷한 원리로 반복문이 세 번 중첩되면 O(n³)이 됩니다.
```javascript
let numbers = [[1, 2], [3, 4], [5, 6]];

function print(){
  for(ary of numbers){
  	for(num of ary){
    console.log(num);
    }
  }
}

// 시간복잡도가 O(n²) 입니다.
print(); // 1 2 3 4 5 6 
```

#### O(lg n) : 데이터가 2배로 증가해도 소요 시간은 1 time만 증가합니다.
- log₂n을 lg n으로 생략해서 표현할 수 있습니다.
- 이진 탐색 알고리즘의 시간 복잡도를 표현할 수 있습니다.
  - 단 이진 탐색 알고리즘은 정렬되지 않은 배열에서는 사용할 수 없습니다. 
```javascript
// 반복문을 돌게 할 지 평가하는 변수 i가 절반씩 줄어듦
function divisionTwo(num) {
  let i = num;
  while (i > 0) {
    console.log(i);
    i = parseInt(i / 2);
  }
}

// 시간복잡도가 O(lg n) 입니다.
divisionTwo(10); // 10 5 2 1
```
```javascript
// 반복문의 변수 i 가 2배씩 증가
let numbers = [1, 2, 3, 4, 5];

function f(n) {
  for (let i = 0; i < n.length; i = i * 2) {
    console.log(n[i]);
    if (i === 0) i++;
  }
}

//시간복잡도가 O(lg n) 입니다.
f(numbers); // 1, 3, 5 
```
#### O(nlgn) : O(n)과 O(lg n)이 중첩되었을 때
```javascript
let numbers = [[1, 2], [3, 4], [5, 6]];

function print(ary) {
  for (let i = 0; i < ary.length; i++) {
    for (let j = 0; j < ary[i].length; j *= 2) {
      console.log(ary[i][j]);
      if (j === 0) j++;
    }
  }
}

print(numbers); // 1 3 5
```
---
### 문제 
로또 번호의 6개의 숫자 중 n개의 숫자를 알아볼 수 없을 때, 당첨이 가능했던 최고 순위와 최저 순위를 반환하는 함수 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/77484

순위 |	당첨 내용|
---|---|
1	| 6개 번호가 모두 일치
2	| 5개 번호가 일치
3 |	4개 번호가 일치
4	| 3개 번호가 일치
5	| 2개 번호가 일치
6(낙첨) |	그 외

### 입출력 예
알아볼 수 없는 숫자는 '0'으로 주어진다.
lottos |	win_nums | result|
---|---|---
[44, 1, 0, 0, 31, 25] |	[31, 10, 45, 1, 6, 19] | [3, 5]
[0, 0, 0, 0, 0, 0] |	[38, 19, 20, 40, 15, 25] |	[1, 6]
[45, 4, 35, 20, 3, 9]	| [20, 9, 3, 45, 4, 35] |	[1, 1]

### 나의 풀이
- 의사 코드
1. 맞춘 숫자의 개수와 알아볼 수 없는 숫자의 개수를 구한다
2. 최저 순위 = 맞춘숫자이고, (알아볼 수 없는 숫자는 모두 낙첨) 
최고 순위 = 맞춘 숫자 + 알아볼 수 없는 숫자의 개수이다. (알아 볼 수 없는 숫자도 모두 당첨)

1-1. 배열의 각 요소를 살펴서 0이 나온 횟수를 세는 zeroCount 변수를 만든다. \
1-2. 요소가 0이 아니면, 로또 당첨 번호와 일치하는 지 살피고, 일치하면 증가하는 win 변수를 만든다.

```javascript
function solution(lottos, win_nums) {
  let win = 0, zeroCount = 0;
    
  lottos.map((el) => {
    if (el === 0) {
      zeroCount++;
    } else {
      win_nums.map((i) => {
        if (el === i) {
          win++;
        }
      });
    }
  });

return win === 0?(zeroCount===0? [6, 6]:[7 - zeroCount, 6]):[7 - (zeroCount + win), 7 - win];
}
```
배열의 반복 메서드인 map 메서드 안에 map 메서드를 중첩하여 사용해셔 시간 복잡도가 O(n²)일 것 같다.

---

참고 \
[대기업 IT직군 코딩테스트 합격을 위한 현실적이고 직관적인 공부 순서](https://www.youtube.com/watch?v=ukkLCl9yBvE) \
[자료구조와 알고리즘 그리고 코딩테스트?](https://www.youtube.com/watch?v=okHGRlgR8ps) \
[개발자라면 이제는 알아야하는 Big O 설명해드림. 10분컷.](https://www.youtube.com/watch?v=BEVnxbxBqi8) \
[[자료구조 알고리즘] 빅오(Big-O)표기법 완전정복](https://www.youtube.com/watch?v=6Iq5iMCVsXA)\
[[알고리즘] Time Complexity (시간 복잡도)](https://hanamon.kr/알고리즘-time-complexity-시간-복잡도/)\
[시간 복잡도(Time Complexity) 및 공간 복잡도(Space Complexity)](https://yoongrammer.tistory.com/79)



