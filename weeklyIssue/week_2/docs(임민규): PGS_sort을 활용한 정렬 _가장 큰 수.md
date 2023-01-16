# Array.prototype.sort().메소드

### sort 메소드
- sort() 메소드는 기본적으로 유니코드 값으로 정렬하기 때문에 예상과는 다르게 정렬이 됩니다.
예를 들어 `['b','a','c']`라는 배열에 .sort를 적용하면 [a,b,c]로 정렬이 된다.

- 또한 아래의 코드를 통해 sort를 사용해 예상한 [2,4,5,11,20]으로 정렬이 되어야 하지만 [11,2,20,4,5]로 정렬이 되는 것을 확인할 수 있다.
<img width="220" alt="image" src="https://user-images.githubusercontent.com/114140840/212676976-42642e52-091f-4013-b658-df6c6f52b4a7.png">

### 올바른 정렬 방법

- 오름차순
```javascript
let arr = [2,4,5,11,20]

arr.sort(function(a,b) {
return a-b} 
```
- 내림차순
```javascript
let arr = [2,4,5,11,20]

arr.sort(function(a,b) {
return b-a} 
```
<img width="220" alt="image" src="https://user-images.githubusercontent.com/114140840/212677509-f5bf33ad-cdf4-4e72-8060-5ba9294b34d6.png">

- 조건부 정렬
```javascript
let arr = [2,4,5,11,20]

arr.sort((a,b) => { //오름차순
  if(a > b) return 1;
  else if (a < b) return -1;
  else return 0
  })
```
<img width="246" alt="image" src="https://user-images.githubusercontent.com/114140840/212677877-d102031f-88bd-4a8d-97ee-e68902a7cccb.png">

### sort 메소드의 원리
**a-b 는 이전 요소(a)와 다음 요소(b)의 차가 음수이면, 서로 바꿔주고 양수면 그대로 넘어가는 방법을 가지고 있다**

### 프로그래머스 LV2 가장큰수 (정렬)
- 문제 
정수형 배열인 numbers를 받아서 배열의 요소들을 합쳤을때 가장 큰 수를 string값으로 return을 하시오.

- 입출력 예시
numbers =['6','10','2'] reslut = '6210'
numbers = ['3','30','34','5','9'] result = '9534330'

```javascript
  function solution(numbers) {
  var answer = '';
  
  answer = numbers.map(el => String(el)).sort((a,b)=>(b+a)-(a+b)).join('')
  //( '3', '30' => ('303')-('330'))
  if(answer[0] ==='0') return '0'

  return answer
  ```
  `numbers.map(el => String(el)).sort((a,b)=>(b+a)-(a+b))`
  - map메소드를 통해서 모든 요소를 string값으로 변환을 한다.
  - sort함수를 통해 스트링 값으로 바꾼 값들을 합친 값이 큰지 작은지 비교후 정렬
ex) 이전요소 '6' 다음요소 '10' => '610' - '106'
- `join('')`메소드를 통해서 정렬된 배열을 string값으로 합쳐서 전환 후 answer의 변수에 저장을 한다.
- `if(answer[0]==='0' return '0'` 만일 전부 정렬한 값의 맨 앞이 '0'인 경우 모든 요소가 '0'이기 때문에 '0'을 반환해준다.

