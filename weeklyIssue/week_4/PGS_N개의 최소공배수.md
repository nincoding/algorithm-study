# N개의 최소공배수
https://school.programmers.co.kr/learn/courses/30/lessons/12953

### 매개변수로 들어오는 자연수로 이루어진 배열안의 요소들의 최소공배수를 구해라

```javascript
function solution(arr) {
  arr.sort((a,b) => a-b)
  let max = arr.pop()
  let basu = 0
  let i = 1
  let count = 0
  while(true){
      basu = max * i
      for (let j = 0 ; j < arr.length; j++){
          if(basu % arr[j] === 0) count++
          else break
      }
      if(count === arr.length) return basu
      else count = 0
      i++
      
  }
}
```
 각각의 변수
```javascript
arr.sort((a,b) => a-b)
let max = arr.pop() //가장 큰 수
let basu = 0 // 가장 큰 수의 배수
let count = 0 // basu가 되는 요소들의 수
```



```javascript
while(true){
      basu = max * i
      for (let j = 0 ; j < arr.length; j++){
          if(basu % arr[j] === 0) count++
          else break
      }
      if(count === arr.length) return basu
      else count = 0
      i++
  }
}
```
- `while`문은 max값에 곱할 수를 1씩 증가시킨다.
- `for`문은 arr의 모든 요소를 나눈 뒤 나머지가 0이면 count를 올리고 아니면 break를 걸어 반복문을 빠져 나온다.
- `if`문은 count가 모든 요소의 수와 같으면 최소공배수임으로 return을 해주고, 아니면 count갯수를 초기화 하고 i값을 1올려준다.

### 노력했던 부분
- 이중 반복문인 만큼 반복을 최소화 시키키 위해서 노력
- 최대값을 이용하여 최소공배수를 구했다.

# 유클리드의 호재법
유클리드의 호제법은 최대공약수를 구하는 방법으로 최소공배수는 비교할 두 값을 곱하고 나누기 최대공약수 ((a*b)/(최대공약수))임을 사용하여 시간을 줄일 수 있는 방식이다.

### 유클리드의 호제법
1. 두 수 중에서 큰 수를 작은 수로 나눈다.
2. 만약 나누고 난 나머지가 0 이라면 작은 수가 최대공약수이다.
3. 만약 나머지가 0이 아니라면, 작은 수를 다시 나머지로 나눈다.
4. 이를 반복해서 나머지가 0 이 될 때, 그 수가 바로 두 수의 최대공약수이다.

```
a = 722 b = 190
722 % 190 = 152
190 % 152 = 38
152 % 38 = 0
최대공약수는 38인 셈이다.
```
722와 190의 최대공약수는 38이다.

```javascript

// 유클리드 호제법을 사용하여 최대 공약수 구하기
const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

//최소공배수 구하기
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = (arr) => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
};
```

```javascript
// 유클리드 호제법을 사용하여 최대 공약수 구하기
const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
```
- 먼저 비교할 두 수를 매개변수로 받아온다.
- while문으로 b가 0보다 크면 계속 돌 수있도록 조건을 단다.
- temp에 나눌 수를 계속해서 저장해준다.
- b는 나머지 값을 저장 
- a는 나누었던 수를 계속해서 저장하여 반복해준다.
- 결국 b가 0이 되면 a의 값이 최대 공약수가 된다.

```javascript
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};
```

두 수를 곱한 값을 최대공약수에 나누어준다.(gcd 함수 호출)

```javascript
const solution = (arr) => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
};
```
- 반복문을 통해 모든 요소를 돌려본다.
