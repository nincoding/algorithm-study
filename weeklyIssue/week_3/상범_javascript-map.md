# JS Data Structure - Map

#### `Hash Table`을 학습하는 중에 `HashSet`, `HashMap`을 알게 됐고, 자바스크립트에 `Set`, `Map` 자료구조가 있어서 JS의 `Set`과 `Map` 중 `Map`을 학습했습니다.

[Map 객체 생성하기](#map-객체-생성하기)  
[요소 개수 확인하기 size](#요소-개수-확인하기-size)  
[요소 추가하기 set](#요소-추가하기-setkey-value)  
[요소 값 얻기 get](#요소-값-얻기-getkey)  
[요소 존재 여부 확인하기 has](#요소-존재-여부-확인하기-has)  
[요소 전체 삭제하기 clear](#요소-전체-삭제하기-clear)  
[단일 요소 삭제하기 delete](#단일-요소-삭제하기-deletekey)  
[요소 순회하기 forEach, for...of](#요소-순회하기-foreach-forof)  
[Map.forEach & Array.forEach 차이점](#mapforeach--arrayforeach-차이점)  
[Map 관련 코딩테스트 문제풀이](#map-관련-코딩테스트-문제풀이)  
[Reference](#reference)

<br>

## Map

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

- **`Map`** 객체는 **`key-value pairs`**로 구성된 **`collection`**이다.
- 객체와 유사하다. (`Set`은 배열과 유사)
- 자료형에 관계 없이 **`원시 값`**, **`참조 값`** 모두 키가 될 수 있다.
- 삽입 순서대로 요소를 순회할 수 있다. (Set은 이터러블)
- **`Map`**의 **`Key`**는 유니크하다.
  - 중복된 키의 경우 **`value`**가 덮어씌운다.
- **`NaN`** 과 **`NaN`**, **`+0`** 과 **`-0`** 을 같은 값으로 판단한다.
- 속성 : **`size`**
- 메서드 : **`get(key)`**, **`set(key, value)`**, **`has(key)`**, **`clear()`**, **`delete()`**, **`keys()`**, **`values()`**, **`entries()`**

<br>

### Map 객체 생성하기

- 이터러블을 인자로 받을 수 있다.
- 인자가 없으면 빈 Map 객체를 만든다.
- 중복된 키는 값을 덮어씌운다.

```js
// new Map()
// new Map(iterable)

const map1 = new Map();
const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  ['key1', 'value4'],
]); // 이터러블

map1; // Map(0) {}
map2; // Map(3) { 'key1' => 'value4', 'key2' => 'value2', 'key3' => 'value3' }
```

<br>

### 요소 개수 확인하기 `size`

`size` 프로퍼티

- Map 객체의 요소 개수를 반환
- 접근자 프로퍼티이기 때문에 직접 변경 x
  - 직접 변경 시도해도 오류나지 않음

```js
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  ['key1', 'value4'],
]); // Map(3) { 'key1' => 'value4', 'key2' => 'value2', 'key3' => 'value3' }

console.log(map.size); // 3

map.size = 10; // 오류 안남

console.log(map.size); // 3
```

<br>

### 요소 추가하기 `set(key, value)`

- 모든 값을 키로 사용할 수 있다!!
  - 객체는 문자열, 심벌만 키로 사용할 수 있다.
- 새로운 요소가 추가된 Map 객체를 반환한다. 메서드체이닝 가능!!
- 중복된 요소의 추가는 value가 덮어써진다.
- **`NaN`** 과 **`NaN`**, **`+0`** 과 **`-0`** 을 같은 값으로 판단한다.

```js
console.log(NaN === NaN); // false
console.log(-0 === +0); // true

const map = new Map();

map
  .set(NaN, 1)
  .set(NaN, 2)
  .set(+0, 1)
  .set(-0, 2)
  .set('0', 3)
  .set(true, 1)
  .set([1, 2, 3], 1)
  .set({ a: 1 }, 1)
  .set(undefined, 1)
  .set(null, 1)
  .set(() => console.log('map'), 1);

console.log(map);
// Map(9) {
//   NaN => 2,
//   0 => 2,
//   '0' => 3,
//   true => 1,
//   [ 1, 2, 3 ] => 1,
//   { a: 1 } => 1,
//   undefined => 1,
//   null => 1,
//   [Function (anonymous)] => 1
// }
```

<br>

### 요소 값 얻기 `get(key)`

- 키를 갖는 값을 반환

```js
const map = new Map();

map.set(+0, 1).set(-0, 2).set('0', 3);

// Map(2) {
//   0 => 2,
//   '0' => 3,
// }

console.log(map.get(0)); // 2
console.log(map.get('0')); // 3
```

<br>

### 요소 존재 여부 확인하기 `has`

- true or false 리턴

```js
const map = new Map();

map.set(+0, 1).set(-0, 2).set('0', 3);

// Map(2) {
//   0 => 2,
//   '0' => 3,
// }

console.log(map.has(0)); // true
console.log(map.has('0')); // true
console.log(map.has(-0)); // true
console.log(map.has(NaN)); // false
```

<br>

### 요소 전체 삭제하기 `clear()`

- 요소를 전부 삭제해 빈 객체로 만든다.
- `undefined`를 반환한다.

```js
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

console.log(map.clear()); // undefined
console.log(map); // Map(0) {}
```

<br>

### 단일 요소 삭제하기 `delete(key)`

- 해당 키를 갖는 요소를 삭제한다.
- 삭제 성공 여부를 리턴한다. (true or false)
- 삭제하려는 요소가 Map 객체에 없으면 무시된다.

```js
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

console.log(map.delete('a')); // true
console.log(map.delete('a')); // false

console.log(map); // Map(2) { 'b' => 2, 'c' => 3 }
```

<br>

### 요소 순회하기 `forEach`, `for...of`

> `Map.forEach(callback[, thisArg])`
>
> [Map.prototype.forEach() from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

- `Array.prototype.forEach`와 유사한 `forEach` 메서드가 있다.
  - 유사하지만 다르다.
- Map 객체는 이터러블이기 때문에 `for...of`를 사용할 수 있다.

```js
// value, key, map, thisArg 전부 Optional

// Arrow function
forEach(() => { doSomething... } )
forEach((value) => { doSomething... } )
forEach((value, key) => { doSomething... } )
forEach((value, key, map) => { doSomething... } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function() { doSomething... })
forEach(function(value) { doSomething... })
forEach(function(value, key)  {doSomething...  })
forEach(function(value, key, map) { doSomething... })
forEach(function(value, key, map) { doSomething... }, thisArg)
```

```js
const map = new Map();

map.set('김', '개발자');
map.set('이', '디자이너');
map.set('박', '프로덕트매니저');
map.set('최', '프로덕트오너');

map.forEach((value, key, map) => {
  console.log(key, value);
});
// 김 개발자
// 이 디자이너
// 박 프로덕트매니저
// 최 프로덕트오너

for (const person of map) {
  console.log(person);
}
// [ '김', '개발자' ]
// [ '이', '디자이너' ]
// [ '박', '프로덕트매니저' ]
// [ '최', '프로덕트오너' ]

for (const [key, value] of map) {
  console.log(key, value);
}
// 김 개발자
// 이 디자이너
// 박 프로덕트매니저
// 최 프로덕트오너
```

<br>

### `Map.forEach` & `Array.forEach` 차이점

> thisArg 매개변수를 forEach()에 제공한 경우 callback을 호출할 때 전달해 this의 값으로 쓰입니다. 전달하지 않으면 undefined를 사용하며, 최종 this 값은 함수의 this를 결정하는 평소 규칙을 따릅니다.
>
> forEach()는 각각의 값을 한 번씩 방문하지만, 순회를 끝내기 전에 제거하고 다시 추가한 값은 예외입니다. 방문하기 전 제거한 값에 대해서는 callback을 호출하지 않습니다. forEach()가 끝나기 전 추가한 요소는 방문합니다.
>
> forEach()는 Set 객체의 요소에 대해 callback을 실행만 하며 값을 반환하지는 않습니다.
>
> [Map.prototype.forEach() from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

> `Array.forEach` 는 처리할 요소의 범위를 최초 `callback` 호출 전에 설정된다. 호출을 시작한 뒤 배열에 추가한 요소에 대해서는 `callback`을 실행하지 않는다. 배열의 기존 요소값이 바뀐 경우, `callback`에 전달하는 값은 `forEach`가 요소를 방문한 시점의 값을 사용한다.
>
> [Array.prototype.forEach() from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```js
const map = new Map();

map.set('김', '개발자');
map.set('이', '디자이너');

map.forEach((value, key, map) => {
  console.log(value, key, map);
});
// 개발자 김 Map(2) { '김' => '개발자', '이' => '디자이너' }
// 디자이너 이 Map(2) { '김' => '개발자', '이' => '디자이너' }

let count = 0;

map.forEach((value, key, map) => {
  map.set(++count, '추가인원');
  console.log(value, key, map);
});
// 개발자 김 Map(3) { '김' => '개발자', '이' => '디자이너', 1 => '추가인원' }
// 디자이너 이 Map(4) { '김' => '개발자', '이' => '디자이너', 1 => '추가인원', 2 => '추가인원' }
// 추가인원 1 Map(5) {
//   '김' => '개발자',
//   '이' => '디자이너',
//   1 => '추가인원',
//   2 => '추가인원',
//   3 => '추가인원'
// }
// ... 무한반복된다.
```

```js
const map = new Map();

map.set('김', '개발자');
map.set('이', '디자이너');

arr = [...map];

let count = 0;

arr.forEach(([key, value], index) => {
  arr.push(++count);
  console.log(key, value, index);
});
// 개발자 김 Map(2) { '김' => '개발자', '이' => '디자이너' }
// 디자이너 이 Map(2) { '김' => '개발자', '이' => '디자이너' }

console.log(arr);
// [ [ '김', '개발자' ], [ '이', '디자이너' ], 1, 2 ]
```

<br>

### Map 관련 코딩테스트 문제풀이

#### 프로그래머스 / 완주하지 못한 선수 / 레벨 1

> https://school.programmers.co.kr/learn/courses/30/lessons/42576

```js
/*

    Programmers / 완주하지 못한 선수 / Level 2 / 00:07:51
    https://programmers.co.kr/learn/courses/30/lessons/42576


    ## Pseudo Code ##
    
    1. 객체를 생성
    2. 참가자들을 전부 객체에 넣는다.
      ㄴ 중복된 참가자가 있으면 값++, 없으면 값을 1로 설정
    3. 완주자들을 하나씩 확인하면서 객체의 값--
    4. 객체 중에 벨류가 1인 키를 찾아 리턴한다.

*/

// 1. 객체 사용
function solution(participant, completion) {
  const playerMap = {};

  for (const player of participant) {
    playerMap[player] ? playerMap[player]++ : (playerMap[player] = 1);
  }

  for (const player of completion) {
    playerMap[player]--;
  }

  for (const [player, count] of Object.entries(playerMap)) {
    if (count === 1) return player;
  }
}

// 2. Map 사용
function solution(participant, completion) {
  const map = new Map();

  for (const player of participant) {
    if (map.get(player) === undefined) map.set(player, 0);
    map.set(player, map.get(player) + 1);
  }

  for (const player of completion) {
    map.set(player, map.get(player) - 1);
  }

  for (const [player, count] of map) {
    if (count === 1) return player;
  }
}

// 3. for문 적게 사용
function solution(participant, completion) {
  const map = new Map();
  const length = participant.length;

  for (let i = 0; i < length; i++) {
    const _participant = participant[i];
    const _completion = completion[i];

    map.set(_participant, (map.get(_participant) || 0) + 1);
    map.set(_completion, (map.get(_completion) || 0) - 1);
  }

  for (const [player, count] of map) {
    if (count === 1) return player;
  }
}
```

<br>

#### 프로그래머스 / 위장 / 레벨 2

> https://school.programmers.co.kr/learn/courses/30/lessons/42578

```js
/*

    Programmers / 위장 / Level 2 / 00:09:32
    https://school.programmers.co.kr/learn/courses/30/lessons/42578


    ## Pseudo Code ##
    
    종류 별로 각각 3, 4, 5개의 옷이 있다면 경우의 수 곱의 법칙을 이용
    => 총 경우의 수는 3*4*5 = 60개

    1. (종류 : 개수) 형태의 맵 객체 생성
    2. 종류의 개수들을 전부 곱하기
      ㄴ 개수+1 => 안입는 것도 하나의 경우
      ㄴ 
    3. ㄴ 있으면 찾은 값의 인덱스와 i를 리턴한다.
    4. ㄴ 없으면 map에 {nums[i]: i} 추가한다.

*/

// 1. 객체 사용
function solution(clothes) {
  const map = {};

  for (const [_, kind] of clothes) {
    map[kind] ? map[kind]++ : (map[kind] = 1);
  }

  return Object.values(map).reduce((a, c) => a * (c + 1), 1) - 1;
}

// 2. Map 사용
function solution(clothes) {
  const map = new Map();

  for (const [_, kind] of clothes) {
    if (!map.get(kind)) map.set(kind, 0);
    map.set(kind, map.get(kind) + 1);
  }

  return [...map.values()].reduce((a, c) => a * (c + 1), 1) - 1;
}
```

<br>

#### 프로그래머스 / 베스트앨범 / 레벨 3

> https://school.programmers.co.kr/learn/courses/30/lessons/42579

```js
/*

Programmers / 베스트앨범 / Level 3 / 00:32:50
https://programmers.co.kr/learn/courses/30/lessons/42579


## Pseudo Code ##

  1. 장르배열을 돌면서 맵에 추가
    ㄴ 데이터 인터페이스
    ㄴ 장르 : {
              전체재생 수 : number,
              노래 : {
                고유번호 : number,
                재생 수 : number,
              }
            }
            
  2. Map으로 장르를 키로 묶어서 총 재생수, 노래모음 배열을 value로 넣음
  3. 장르별로 최다 재생 수로 정렬 후 2개까지 자름
  4. 장르별로 2개까지 얻은 노래를 1차원 배열로 고유번호로 리턴

*/

function solution(genres, plays) {
  const map = new Map();

  genres.forEach((genre, index) => {
    const play = plays[index];
    const currentGenreData = map.get(genre) || { total: 0, songs: [] };
    const updatedGenreData = {
      total: currentGenreData.total + play,
      songs: [...currentGenreData.songs, { index, play }],
    };
    map.set(genre, updatedGenreData);
  });

  return [...map.values()]
    .sort((a, b) => b.total - a.total) // 많이 재생된 장르 정렬
    .map(
      ({ _, songs }) =>
        songs
          .sort((a, b) => b.play - a.play) // 많이 재생된 노래 정렬
          .slice(0, 2) // 최대 2곡까지 자르기
          .map(({ index }) => index) // 고유번호로 변경
    )
    .flat(); // 2차원 배열 => 1차원 배열
}
```

<br>
<hr>

## Reference

[모던 자바스크립트 Deep Dive](https://product.kyobobook.co.kr/detail/S000001766445)  
[Map from mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)  
[Map.prototype.forEach() from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)  
[Array.prototype.forEach() from MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
