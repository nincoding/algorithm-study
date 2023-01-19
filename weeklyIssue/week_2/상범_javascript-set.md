# JS Data Structure - Set

#### `Hash Table`을 학습하는 중에 `HashSet`, `HashMap`을 알게 됐고, 자바스크립트에 `Set`, `Map` 자료구조가 있어서 JS의 `Set`과 `Map` 중 `Set`을 학습했습니다.

[Set 객체 생성하기](#set-객체-생성하기)  
[요소 개수 확인하기 size](#요소-개수-확인하기-size)  
[요소 추가하기 add](#요소-추가하기-add)  
[요소 존재 여부 확인하기 has](#요소-존재-여부-확인하기-has)  
[요소 전체 삭제하기 clear](#요소-전체-삭제하기-clear)  
[단일 요소 삭제하기 delete](#단일-요소-삭제하기-delete)  
[요소 순회하기 forEach, for...of](#요소-순회하기-foreach-forof)  
[Set.forEach & Array.forEach 차이점](#setforeach--arrayforeach-차이점)  
[배열의 중복 요소 제거 구현하기](#배열의-중복-요소-제거-구현하기)  
[다중 컬렉션 교집합 구현하기](#다중-컬렉션-교집합-구현하기)  
[다중 컬렉션 합집합 구현하기](#다중-컬렉션-합집합-구현하기)  
[Set 관련 코딩테스트 문제풀이](#set-관련-코딩테스트-문제풀이)  
[Reference](#reference)

<br>

## Set

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

- **`Set`** 객체는 중복되지 않는 유일한 값들의 집합이다.
- 요소 순서에 의미가 없고, 따라서 인덱스로 요소에 접근할 수 없다.
- 자료형에 관계 없이 **`원시 값`**, **`참조 값`** 모두 저장할 수 있다.
- 사빕 순서대로 요소를 순회할 수 있다. (Set은 이터러블)
- **`NaN`** 과 **`NaN`**, **`+0`** 과 **`-0`** 을 같은 값으로 판단한다.
- 교집합, 합집합, 차집합, 여집합 등 수학적 집합을 구현하기에 적합한 자료구조이다.
- 속성 : **`size`**
- 메서드 : **`add(value)`**, **`delete(value)`**, **`clear()`**, **`has(value)`**, **`forEach()`**, **`keys()`**, **`values()`**, **`entries()`**

<br>

### Set 객체 생성하기

- 이터러블을 인자로 받을 수 있다.
- 인자가 없으면 빈 Set 객체를 만든다.

```js
// new Set()
// new Set(iterable)

const set1 = new Set();
const set2 = new Set([1, 2, 3, 3, 2, 1]); // 배열 => 이터러블 , 중복 제거
const set3 = new Set('HusBumps'); // 문자열 => 이터러블 , 중복 제거

set1; // Set(0) {}
set2; // Set(3) {1, 2, 3}
set3; // Set(6) {'H', 'u', 's', 'B', 'm', 'p'}
```

<br>

### 요소 개수 확인하기 `size`

`size` 프로퍼티

- Set 객체의 요소 개수를 반환
- Set의 유일한 속성
- 접근자 프로퍼티이기 때문에 직접 변경 x

```js
const set3 = new Set('HusBumps'); // Set(6) {'H', 'u', 's', 'B', 'm', 'p'}
console.log(set3.size); // 6

set3.size = 10; // 오류 안남

console.log(set3.size); // 6
```

<br>

### 요소 추가하기 `add`

`add(value)` 메소드

- 모든 타입의 값을 저장할 수 있다.
- 새로운 요소가 추가된 Set 객체를 반환한다. 메서드체이닝 가능!!
- 중복된 요소의 추가는 무시된다.
- **`NaN`** 과 **`NaN`**, **`+0`** 과 **`-0`** 을 같은 값으로 판단한다.

```js
console.log(NaN === NaN); // false
console.log(-0 === +0); // false

const set = new Set();

set
  .add(NaN)
  .add(NaN)
  .add(+0)
  .add(-0)
  .add(true)
  .add([1, 2, 3])
  .add({ a: 1 })
  .add(undefined)
  .add(null);

set; // Set(7) { NaN, 0, true, [ 1, 2, 3 ], { a: 1 }, undefined, null }
```

<br>

### 요소 존재 여부 확인하기 `has`

`has(value)` 메소드

- true or false 리턴

```js
const set = new Set('HusBumps'); // Set(6) {'H', 'u', 's', 'B', 'm', 'p'}

set.has('H'); // true
set.has('h'); // false
set.has(); // false
```

<br>

### 요소 전체 삭제하기 `clear`

- 요소를 전부 삭제해 빈 객체로 만든다.
- `undefined`를 반환한다.

```js
const set = new Set('HusBumps'); // Set(6) {'H', 'u', 's', 'B', 'm', 'p'}

console.log(set.clear()); // undefined
console.log(set); // Set(0) {}
```

<br>

### 단일 요소 삭제하기 `delete`

`delete(value)` 메소드

- 삭제 성공 여부를 리턴한다. (true or false)
- 삭제하려는 요소가 Set 객체에 없으면 무시된다.

```js
const set = new Set('HusBumps');

console.log(set); // Set(6) { 'H', 'u', 's', 'B', 'm', 'p' }

console.log(set.delete('H')); // true
console.log(set.delete('H')); // false
console.log(set.delete('u')); // true

console.log(set); // Set(4) { 's', 'B', 'm', 'p' }
```

<br>

### 요소 순회하기 `forEach`, `for...of`

> `mySet.forEach(callback[, thisArg])`
>
> [Set.prototype.forEach() from MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)

- `Array.prototype.forEach`와 유사한 `forEach` 메서드가 있다.
  - 유사하지만 다르다.
- Set 객체는 이터러블이기 때문에 `for...of`를 사용할 수 있다.

```js
const set = new Set('HusBumps');

// value1, value2는 모두 요소 값이다.
// 아마도 Array의 forEach 메소드와 동일한 형태를 유지하기 위해서다.

set.forEach((value1, value2, set) => {
  console.log(value1, value2, set);
});

// H H Set(6) { 'H', 'u', 's', 'B', 'm', 'p' }
// u u Set(6) { 'H', 'u', 's', 'B', 'm', 'p' }
// s s Set(6) { 'H', 'u', 's', 'B', 'm', 'p' }
// B B Set(6) { 'H', 'u', 's', 'B', 'm', 'p' }
// m m Set(6) { 'H', 'u', 's', 'B', 'm', 'p' }
// p p Set(6) { 'H', 'u', 's', 'B', 'm', 'p' }

for (const value of set) {
  console.log(value);
}

// H
// u
// s
// B
// m
// p
```

<br>

### `Set.forEach` & `Array.forEach` 차이점

> thisArg 매개변수를 forEach()에 제공한 경우 callback을 호출할 때 전달해 this의 값으로 쓰입니다. 전달하지 않으면 undefined를 사용하며, 최종 this 값은 함수의 this를 결정하는 평소 규칙을 따릅니다.
>
> forEach()는 각각의 값을 한 번씩 방문하지만, 순회를 끝내기 전에 제거하고 다시 추가한 값은 예외입니다. 방문하기 전 제거한 값에 대해서는 callback을 호출하지 않습니다. forEach()가 끝나기 전 추가한 요소는 방문합니다.
>
> forEach()는 Set 객체의 요소에 대해 callback을 실행만 하며 값을 반환하지는 않습니다.
>
> [Set.prototype.forEach() from MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)

> `Array.forEach` 는 처리할 요소의 범위를 최초 `callback` 호출 전에 설정된다. 호출을 시작한 뒤 배열에 추가한 요소에 대해서는 `callback`을 실행하지 않는다. 배열의 기존 요소값이 바뀐 경우, `callback`에 전달하는 값은 `forEach`가 요소를 방문한 시점의 값을 사용한다.
>
> [Array.prototype.forEach() from MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```js
const set = new Set('abc');
const arr = [...set];
let count = 0;

arr.forEach((value, index, origin) => {
  console.log(value, index, origin);
});
// a 0 [ 'a', 'b', 'c' ]
// b 1 [ 'a', 'b', 'c' ]
// c 2 [ 'a', 'b', 'c' ]

arr.forEach((value, index, origin) => {
  arr.push(++count);
  console.log(value, index, origin);
});
// a 0 [ 'a', 'b', 'c', 1 ]
// b 1 [ 'a', 'b', 'c', 1, 2 ]
// c 2 [ 'a', 'b', 'c', 1, 2, 3 ]
```

```js
const set = new Set('abc');
let count = 0;

set.forEach((value, index, origin) => {
  console.log(value, index, origin);
});
// a a Set(3) { 'a', 'b', 'c' }
// b b Set(3) { 'a', 'b', 'c' }
// c c Set(3) { 'a', 'b', 'c' }

set.forEach((value, index, origin) => {
  set.add(++count);
  console.log(value, index, origin);
});
// a a Set(4) [ 'a', 'b', 'c', 1 ]
// b b Set(5) [ 'a', 'b', 'c', 1, 2 ]
// c c Set(6) [ 'a', 'b', 'c', 1, 2, 3 ]
// 1 1 Set(7) [ 'a', 'b', 'c', 1, 2, 3, 4 ]
// 2 2 Set(8) [ 'a', 'b', 'c', 1, 2, 3, 4, 5 ]
// ... 무한반복된다.
```

<br>

### 배열의 중복 요소 제거 구현하기

```js
const arr = [1, 2, 2, 3, 3, 4, 5];

const result1 = [];
arr.forEach(v => result1.indexOf(v) === -1 && result1.push(v));

const result2 = [...new Set(arr)];

console.log(result1); // [1, 2, 3, 4, 5]
console.log(result2); // [1, 2, 3, 4, 5]
```

<br>

### 다중 컬렉션 교집합 구현하기

#### 다중 Array 교집합

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 5];
const arr3 = [4, 5, 6, 7];

const intersection1 = (first, ...arrays) => {
  const result = [];

  first.forEach(el => {
    arrays.every(arr => arr.includes(el)) && result.push(el);
  });

  return result;
};
console.log(intersection1(arr1, arr2, arr3)); // [ 4 ]
```

<br>

#### 다중 Set 교집합

```js
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const set3 = new Set([4, 5, 6, 7]);

const intersection2 = (first, ...sets) => {
  let result = [...first];

  for (const set of sets) {
    result = result.filter(value => set.has(value));
  }
  return new Set(result);
};

console.log(intersection2(set1, set2, set3)); // Set(1) { 4 }
```

### 다중 컬렉션 합집합 구현하기

#### 다중 Array 합집합

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 5];
const arr3 = [4, 5, 6, 7];

const union1 = (...arrays) => {
  const result = [];

  arrays.forEach(array => {
    array.forEach(el => {
      result.indexOf(el) === -1 && result.push(el);
    });
  });

  return result;
};
console.log(union1(arr1, arr2, arr3)); // [1, 2, 3, 4, 5, 6, 7]

// flat을 써서 하나의 배열로 만든 후 순회해도 괜찮을 것 같다
const union2 = (...arrays) => {
  const all = [...arrays].flat();
  const result = [];

  all.forEach(el => {
    result.indexOf(el) === -1 && result.push(el);
  });

  return result;
};
console.log(union2(arr1, arr2, arr3)); // [1, 2, 3, 4, 5, 6, 7]
```

<br>

#### 다중 Set 합집합

- 2개의 Set의 합집합을 구하는 건 정말 간단하다.
  - `new Set([...set1, ...set2])`

```js
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const set3 = new Set([4, 5, 6, 7]);

const union = (first, ...sets) => {
  let result = new Set(first);

  sets.forEach(set => {
    result = new Set([...result, ...set]);
  });

  return result;
};

console.log(union(set1, set2, set3)); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }
```

<br>

### Set 관련 코딩테스트 문제풀이

#### 프로그래머스 / 폰켓몬 / 레벨 1

> https://school.programmers.co.kr/learn/courses/30/lessons/1845

```js
// nums 안에 몇 종류의 폰켓몬이 있는지 확인하기 위해, Set에 넣어서 중복을 제거함

function solution(nums) {
  const limitCount = nums.length / 2;
  const monCount = [...new Set(nums)].length;

  return limitCount < monCount ? limitCount : monCount;
}
```

<br>

#### LeetCode / Contains Duplicate / Easy

> https://leetcode.com/problems/contains-duplicate/

```js
// 중복된 요소가 있는지 확인하기위해 Set에 넣어서 중복제거 후 길이와 원본의 길이를 비교

var containsDuplicate1 = function (nums) {
  return nums.length !== new Set(nums).size;
};
```

<br>
<hr>

## Reference

[모던 자바스크립트 Deep Dive](https://product.kyobobook.co.kr/detail/S000001766445)  
[Set from mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)  
[Set.prototype.forEach() from MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)  
[Array.prototype.forEach() from MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
