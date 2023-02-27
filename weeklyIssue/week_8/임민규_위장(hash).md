# 해시(Hash)
고기와 감자를 잘게 다져 요리한 해쉬브라운에서 유래되었다. 입력받은 수를 잘게 다져 입력한 것과 비슷하여 `해시`라는 이름을 가지게 되었다.

데이터를 다루는 기법 중 하나로 검색과 저장이 빠르게 진행을 할 수 있는 선형자료 알고리즘이다.
데이터를 검색할 때 사용할 key와 실제 데이터의 값이 한 쌍으로 존재하고, key값이 배열의 인덱스로 변환되기 떄문에 검색과 저장의 평균적인 시간 복잡도가 O(1)과 같아진다.


![](https://velog.velcdn.com/images/nile27/post/f975da1e-20c4-45fe-990d-2e7c1596766b/image.png)


## 해시 테이블
키와 값을 받아 키를 해싱(Hashing)하여 나온 index에 값을 저장하는 선형 자료구조이며 삽입은 O(1), 키를 알고 있으면 삭제,탐색도 O(1)로 수행이 된다.

## 해시 함수
입력받은 값을 특정 범위 내 숫자로 변경하는 함수, (지정된 방법은 없고 자유롭게 구현 가능)
ex)
- 입력받은 각 문자열을 각 문자열의 아스키코드를 더하는 값 등
- 이름, 나이, 성별 별로 나뉠 때

## 해시의 문제점 (충돌)
`충돌` : 해시 함수의 결과가 동일하여 겹칠 때 생기는 문제 
같은 key를 가지고 있지만 다른 값을 가지고 있을 때 발생하는 현상

![](https://velog.velcdn.com/images/nile27/post/74a0f815-065e-4ea2-a1a3-ec9985583727/image.png)


### 선형 탐사법
- 충돌이 발생하면 옆으로 한 칸씩 이동한다.
- 테이블의 크기가 늘어나면 늘어날 수록 연산속도가 느려진다는 단점을 가지고 있다.

![](https://velog.velcdn.com/images/nile27/post/8bc3d20d-4920-4904-bee3-e8f0da1b12fb/image.png)

### 제곱 탐사법
- 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.
- 테이블의 크기가 늘어나면 늘어날 수록 연산속도가 느려진다는 단점을 가지고 있다.
- 사용되지 않는 데이터 즉, 불필요한 데이터들이 생겨 날 수가 있다.
- 처음 충돌한 위치가 같으면 다음 충돌 위치에서도 반복적오르 충돌이 일어날 수가 있다. 
(ex: 충돌한 곳의 key가 0이나 1일 경우 제곱을 해도 같은 자리에서만 맴돈다.)

![](https://velog.velcdn.com/images/nile27/post/3daa4c21-3979-4972-b68b-26de1af8542c/image.png)

### 이중 해싱
- 충돌이 발생하면 다른 해시 함수를 이용한다.
- 충돌이 발생하면 2번째 해시 함수를 이용해서 새로운 인덱스를 만들고, 충돌하지 않을 때까지 인덱스를 계속해서 만들어서 저장한다.

![](https://velog.velcdn.com/images/nile27/post/82d16402-7c6d-4848-ba9f-64fe9e4e1d0b/image.png)

### 분리 연결법
- 충돌이 발생할 경우 연결 리스트로 사용해서 리스트에 값을 추가한다. 
- 최악의 경우에는 하나의 리스트에 무한정으로 늘어 날 수가 있다.

![](https://velog.velcdn.com/images/nile27/post/72bb734f-0703-4cde-b3b9-1ba2bd17dcb0/image.png)

### 어디에 사용이 되는가
 예를 들어 출석부 처럼 번호와 이름이 한 쌍으로 이뤄져있는 경우 유리하다. 번호는 키, 이름은 value값으로 지정 해주어 탐색이나, 삭제 기능을 쉽고 간편하게 사용할 수 있는 장점이 있다.

![image](https://user-images.githubusercontent.com/114140840/221487492-dd6dceea-d679-4ee2-83f1-6ace55f7beea.png)


## 해쉬 테이블 코드

### 객체
```js
const table = {}
table['key'] = 100;
table['key2'] = 'hello';
table['key3'] = 1
delete table['key'] ;
// table = { 'key2' : 'hello', 'key3' : 1}
```

### Map Object
- 객체는 정수가 아닐 경우 모두 문자열로 바꾸기 때문에, Map을 통해서 다양한 타입으로 넣어 줄 수 있는 장점이 있다.
- `set, get, delete, keys() ...` 다양한 메소드를 통해서 쉽게 데이터를 입출력 해 줄수가 있다.
```js
const table = new Map()
table.set ("key", 100);
table.set ("key2", 'hello'); 
table.set ('obj', {"a": 3}); //Map(3) {'key' => 100, 'key2' => 'hello', 'obj' => {'a': 3}}
table.get ('obj') // {'a' : 3}
table.keys() // {'key', 'key2', 'obj'}
table.delete('obj') Map(2) {'key' => 100, 'key2' => 'hello'}
table.clear() {}
```
### Set Object
- 키와 값이 동일하게 저장되는 방법을 채택하고 있고, 중복된 내용을 전부 제거할 때 유용하게 사용할 수가 있다.
```js
const table = new Set()
table.add ("key");
table.add ("key2"); 
table.has('key') //true
table.delete('key') // ['key']
```

# 프로그래머스 LV_2 위장
### 문제 설명
스파이는 매일 다른 옷을 조합하여 입어 자신을 위장합니다. 

|종류|이름|
|:--|:--|
|얼굴|동그란 안경, 검정 선글라스|
|상의|파란색 티셔츠|
|하의|청바지|
|겉옷|긴 코드|
위의 표처럼 옷이 있다고 하면 `[(동그란 안경, 파란색 티셔츠) , (파란색 티셔츠, 청바지)(청바지)...]` 이런 씩으로 종류별로 하나씩 혹은 입지 않고 입었을 때의 총 조합의 갯수를 구하는 것이다. 단, `아무 것도 입지 않는 경우는 없다.`

### code
```js
function solution(clothes) {
  let clothesType = {}
  let sum = 1

  // 1. clothes에 배열의 요소를 key = 종류, values = 옷이름으로 지정해주는 배열을 만든다.
  for (let i of clothes){  
      if(clothesType[i[1]] === undefined) clothesType[i[1]] = [i[0]]
      else clothesType[i[1]].push(i[0])
  }
  
  // 2. 모든 경우의 수 모든 가지수의 갯수를 곱한다. +1은 입지 않았을 때를 말한다.
  for(let key in clothesType){
  sum *= clothesType[key].length+1
  }
  
  // 모든 옷을 입지 않는 경우의 수는 없으니, 모든 경우의 수에서 1을 뺀다.
  return sum-1

}
```
#### 입출력

|clothes|return|
|:--|:--:|
|[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]|5|

### 설명
```js
// 해시 테이블
 const clothesType = {'headgear' : 'yellow_hat',
					  'eyewear' : 'blue_sunglasses', ...
					}
```
- 위의 반복문을 통해서 하나의 객체에 `{종류: 옷이름}`으로 해시 테이블을 만들어준다.
- 2번의 반복문 같은 경우 각 키값 즉, 종류별로 옷의 갯수 별로 모두 곱하면 모든 경우의 수가 나오게 된다.
- 위의 제한 사항에서 모든 옷을 안 입는 경우는 없으니 -1을 빼야한다. 
(제한 사항을 읽지 않아서 시간이 좀 걸렸다... 제한 사항에 중요성을 다시 한번 깨달았다...)

( [순열](https://blog.naver.com/PostView.nhn?blogId=noela70&logNo=221126034317):  만일 집에서 학교까지 가는 길이 3가지이고, 도서관에 가는 길이 2가지이면, 집에서 학교를 거쳐 도서관에 가는 길은 3*2=6 이 된다.)

### Map.object를 이용한 풀이
```js
function solution(clothes) {
    const map = new Map()
    let sum = 1
	// 1
    for (let i of clothes){
        if(map.get(i[1]) === undefined) map.set(i[1] , [i[0]])
        else map.get(i[1]).push(i[0])
    }
    
    // 2
    for(let key of map.keys()){
    	sum *= map.get(key).length+1
    }
    
    return sum-1

}
```
객체로 풀었던 것과 거의 같은 느낌이지 해시에서 `Set,Map`으로 많이 풀기 때문에 `Map`으로도 풀어 보았고, 만일 입력값이 더욱 많아지는 경우에는 map을 통해서 시간 단축 및 데이터를 자유롭게 찾고, 넣을 수 있는 장점이 있어서 `map`을 이용해 풀어보았다.

### 설명
-  1번째 반복문은 `map.get`을 통해서 옷의 종류가 없을 경우 `map.set`을 통해 Map(해시테이블)에 넣어준다.
- 만일 있을 경우 `map.get`을 통해 해당되는 옷 종류의 배열을 가져와 담아준다.
(`map.set()`을 통해 담는 시도를 하게 되면 배열이 계속해서 초기화가 된다.)
- 2번 반복문은 map의 key의 값 들을 가져와 모든 경우의 수의 값을 출력한다.

> 이번 해시를 통해 Map,Set의 사용의 편리함을 많이 느꼈고, Map,Set을 조금 더 공부해서 다양하게 써먹으면 편리할 것 같다!
