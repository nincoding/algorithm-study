# 코플릿 17_computeSquareRoot

## 문제

number 타입의 정수(num >= 2)를 입력받아 제곱근 값을 소수점 두 자리까지(소수점 셋째 자리에서 반올림) 리턴해야 합니다.

- Math.sqrt 사용 금지

## 입출력 예시

```javascript
let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45
```

## 레퍼런스

```javascript
function computeSquareRoot(num) {
  const diffs = [1, 0.1, 0.01, 0.001];
  let a = 1;
  for (d of diffs) {
    while (a * a < num) {
      //  a의 제곱이 num보다 작은 경우
      a = a + d; // a에 d를 더해준다
    }

    if (a * a === num) {
      return a;
    } else {
      a = a - d; // 마지막에 a에 한번 더 d가 더해졌기 때문에 다시 빼준다
    }
  }
  return Number(base.toFixed(2)); // a의 세번째 소숫점에서 반올림
}
```

## 수도 코드

1. 처음에는 a=0으로 두고 num이 a와 a+1 사이의 값인지 확인한다.
   1. a<num<a+1을 만족하는 a를 찾으면 해당 num의 근삿값은 a와 a+1 사이가 된다.
   2. a<num<a+1을 만족하지 않으면, a에 1을 더하고, 1)로 돌아간다.
2. 정수 부분을 확인했으니 이제 소숫점 첫번째 자리를 찾는다. num이 a와 a+0.1 사이의 값인지 확인한다.
   1. a<num<a+0.1을 만족하는 a를 찾으면 해당 num의 근삿값은 a와 a+0.1 사이가 된다.
   2. a<num<a+0.1을 만족하지 않으면, a에 0.1을 더하고, 1)로 돌아간다.
3. 소숫점 두번째 자리를 찾는다. num이 a와 a+0.01 사이의 값인지 확인한다.
   1. a<num<a+0.01을 만족하는 a를 찾으면 해당 num의 근삿값은 a와 a+0.01 사이가 된다.
   2. a<num<a+0.01을 만족하지 않으면, a에 0.01을 더하고, 1)로 돌아간다.
4. 소숫점 세번째 자리를 찾는다. num이 a와 a+0.001 사이의 값인지 확인한다.
   1. a<num<a+0.001을 만족하는 a를 찾으면 해당 num의 근삿값은 a와 a+0.001 사이가 된다.
   2. a<num<a+0.001을 만족하지 않으면, a에 0.001을 더하고, 1)로 돌아간다.
5. 소숫점 세번째 자리에서 반올림을 한다.

<br/>

## 바빌로니아 법의 점화식(recurrence formula)

루트a의 근사값 Xn을 찾고 다음으로 Xn+1을 아래와 같은 점화식으로 찾아나가는 방식이다.
​
![](https://velog.velcdn.com/images/on002way/post/74729708-7048-4109-8c6f-53a70f02bf34/image.png)

```javascript
function computeSquareRoot(num) {
  let approx = 1;

  while (approx ** 2 !== num) {
    if (Number((approx * approx).toFixed(2)) === num) {
      break;
      // 무한루프 지옥에 빠지지 않기 위해 approx의 제곱을 소수점 둘째 자리 이하에서 반올림 했을 때 num과 같다면 break
    }
    approx = (approx + num / approx) / 2;
  }

  return Number(approx.toFixed(2)); // toFixed()메서드는 숫자를 문자열로 변환하면서 지정된 소수점 이하 숫자를 반올림하여 출력하므로, Number() 함수 한번 더 사용
}
```

## [제곱근을 구하는 다양한 다른 방법](https://suhak.tistory.com/228)

<br/>

참고 : https://velog.io/@nittre/알고리즘JavaScript-제곱근-구하기 \
https://velog.io/@seungsang00/JavaScript-바빌로니아-방법으로-제곱근-구하기
