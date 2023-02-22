# LRU 캐시 교체 알고리즘

> **LRU 란?** \
> LRU(Least Recently Used)는 가장 오랫동안 참조되지 않은 페이지를 교체하는 방식입니다. \
> 많이 나온 횟수와는 상관 없이 최근(cache size 이내)에 나오지 않았다면 삭제합니다.\
> 사용된지 가장 오래된 페이지는 앞으로도 사용될 확률이 낮다는 가설에 의해 만들어진 알고리즘입니다.

> **💡 Cache Hit & Cache Miss**\
> **Cache Hit** : CPU 가 참조하고자 하는 메모리가 캐시에 존재하고 있을 경우\
> **Cache Miss** : CPU 가 참조하고자 하는 메모리가 캐시에 존재하지 않을 경우

> **💡 Hit Ratio & Miss Ratio** \
> **Hit Ratio** : Cache Hit / (Cache Hit + Cache Miss) \
> 아래 예시에서 9번 중 6번이므로, 2/3 \
> **Miss Ratio** : Cache Miss / (Cache Hit + Cache Miss)\
> 아래 예시에서 9번 중 3번이므로, 1/3

![](https://velog.velcdn.com/images/iberis/post/ec6632aa-6964-4fe6-8cbe-19cfe40a3606/image.jpg)

![](https://velog.velcdn.com/images/iberis/post/159d6451-9cbd-4f3f-bfe9-9cec86528b2a/image.jpg)

## 문제 설명

DB 캐시를 적용할 때 **캐시 교체 알고리즘 LRU(Least Recently Used)를 사용해서,** 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

## 입력형식

- 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
- cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
- cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
- 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.

## 조건

- cache hit일 경우 실행시간은 1이다.
- cache miss일 경우 실행시간은 5이다.

## 입출력 예제

| 캐시 크기 </br>(cache size) | 도시 이름                                                                                                         | 실행 시간 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------- |
| 3                           | ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]                          | 50        |
| 3                           | ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]                                 | 21        |
| 2                           | ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"] | 60        |
| 5                           | ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"] | 52        |

## 수도코드

0. 도시 이름이 대문자, 소문자 섞여서 나오므로 모두 소문자로 정리

1. 배열의 요소를 순회하면서, cache size 만큼 뒤에 있는 요소들 중 같은 요소가 있으면 Hit, 없으면 Miss

   1-1. 배열의 요소 순회 → forEach \
   1-2. cache size 만큼 뒤 → slice(index - cacheSize, index) 안에 있는 지 \
   1-3. 있으면 (Hit) → time + 1, 없으면 (Miss) → time + 5

2. cache size 를 다 채우기 전에 Hit이 나오는 경우

- index - cacheSize가 음수인 경우 slice(-1, index)가 음수가 되어서 배열의 뒤에서 부터 복사해서 확인하므로 문제가 된다. \
  2-1. 0부터 index 까지 중 중복되는 요소가 있는 지 확인

### 예외처리

1.  cacheSize가 0인 경우 \
     1-1. 배열 요소의 개수 x Miss 시간
2.  cacheSize가 배열 요소의 개수보다 크거나 같은 경우 \
     2-1. 위의 2번 처럼, 0부터 index 까지 중 중복되는 요소가 있는 지 확인

## 나의 풀이

65점으로 실패했는데, 통과 못하는 테스트 케이스가 어떤 경우일 지 모르겠습니다...**교수님 헲미..plz...!👩🏻👩🏻‍💻**

```javascript
function solution(cacheSize, cities) {
  const HIT = 1, MISS = 5;
  let time = 0;
  cities = cities.map((city) => city.toLowerCase());

  // cacheSize가 0인 경우
  if (!cacheSize) cities.length * MISS;

  // cacheSize가 배열 요소의 개수보다 크거나 같은 경우
  if (cacheSize >= cities.length) {
    cities.forEach((city, i, obj) => {
      let cache = obj.slice(0, i);
      cache.includes(city) ? (time += HIT) : (time += MISS);
    });
    return time;
  }

  cities.forEach((city, i, obj) => {
    if (i >= cacheSize) {
      let cache = obj.slice(i - cacheSize, i);
      cache.includes(city) ? (time += HIT) : (time += MISS);
    } else {
      cache = obj.slice(0, i);
      cache.includes(city) ? (time += HIT) : (time += MISS);
    }
  });

  return time;
}
```

## 풀이

1. cache 빈 배열 생성
2. 만약 캐시 배열 안에 이미 있는 값이라면, answer(HIT 실행시간)에 1 더한다.\
   2-1. 캐시 배열에서 해당 값을 삭제한다.
   2-2. 캐시 배열의 가장 마지막에 해당 값을 추가한다.

3. 캐시 배열에 없는 값이라면, answer에 (Miss 실행시간) 5를 더한다.\
   3-1. 캐시 배열의 가장 마지막에 해당 값을 추가한다.

4. cache 배열의 길이가 주어진 cacheSize보다 크다면 가장 오래된(가장 앞의) 값을 삭제한다.

```javascript
function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  cities.forEach((e) => {
    e = e.toLowerCase();
    if (cache.includes(e)) {
      answer++;
      cache.splice(cache.indexOf(e), 1);
    } else {
      answer += 5;
    }
    cache.push(e);
    if (cache.length > cacheSize) cache.shift();
  });

  return answer;
}
```

---

참고 [[홀인원 1.03.15] LRU - 교체 전략](https://youtu.be/6wulDqi6z-s) \
[LRU 알고리즘 (Least Recentely Used) 개념 및 구현방법](https://dailylifeofdeveloper.tistory.com/355)
