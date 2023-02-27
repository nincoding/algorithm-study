# 📗 가장 큰 수
## 문제 설명
[📝문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42746)

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

## 제한 사항
* numbers의 길이는 1 이상 100,000 이하입니다.
* numbers의 원소는 0 이상 1,000 이하입니다.
* 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

## 입출력 예
|numbers|return|
|-------|------|
|[6, 10, 2]|"6210"|
|[3, 30, 34, 5, 9]|"9534330"|

## 문제 풀이
### 다른 사람 풀이
```javascript
function solution(numbers) {
   let answer = numbers.map(number => String(number)).sort((a, b) => (b + a) - (a + b)).join('');
    
    return answer[0] === '0' ? '0' : answer; 
}
````
입력값 배열의 요소가 number 타입이기 때문에 수 조합을 쉽게 하기 위해 string 타입으로 바꾼다.(**map 메서드**)
**sort(정렬)메서드**를 통해 `a + b` 와 `b + a` 를 비교한다.
예를 들어 [3, 30, 34, 5, 9]에서 a= 3 b = 30일 경우, a와 b는 현재 string 타입이기 때문에 a + b = 330, b + a = 303 이 된다.
이 두 문자열을 비교해 내림차순으로 더 큰게 앞으로 오도록 `(b + a) - (a + b)`를 리턴해준다.(**join메서드**)

만약 입력값이 [0, 0, 0, 0] 이라면 결과값이 "0000" 이기 때문에 "0"을 리턴해줘야한다.
따라서 answer[0] 이 '0' 일 경우 '0'을 리턴한다.

### 느낀점
sort 함수의 인자인 함수를 어떻게 작성하면 내림차순, 오름차순이 되는 줄은 알았으나 막상 그 원리에 대해 이해하지 못했다.
이해한다고 몇 시간 동안 쳐다봤지만 사실 아직도 아리송하긴 하다 .... 🥲

#### 참고한 곳
* https://yeoncoding.tistory.com/276
* [mdn - Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


