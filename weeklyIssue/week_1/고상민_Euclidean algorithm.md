# 유클리드 호제법


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11 22 03](https://user-images.githubusercontent.com/115977201/211332752-fe30d2df-1068-4f18-8669-2bfbc974bcf1.png)

```jsx
//분수의 덧셈 level 0
// https://school.programmers.co.kr/learn/courses/30/lessons/120808
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    return answer;
}
```

을 풀다가 최대 공약수라는 중학교 때 배웠던 것 같은 개념을 접하게 되었습니다.

유클리드 호제법을 들고 온 이유는 인류 최초의 알고리즘이라는 타이틀에 혹해서 입니다.

단순하고 반복적인 알고리즘으로 최대 공약수를 아래와 같이 구할수 있었다는 것에 감탄하면서 소개드립니다.

물론 아래의 최대 공약수를 구해  분수의 덧셈을 해봤습니다.

```jsx
function solution(denum1, num1, denum2, num2) {
    function gcd(a, b) {
        while (b != 0) {
            let r = a%b;
            a = b;
            b = r;
            };
        return a;
        }

    let denum = denum1*num2 + denum2*num1;
//각 분자를 반대의 분와 교차해서 곱하고,
    let num = num1*num2;
//분모끼리 곱한다.
    let g = gcd(denum, num);
분모와 분자의 최대공약수를 확인해
    return [denum/g, num/g];
각각의 최대 공약수로 나눈값을 리턴.
}
```

일견 쉬워보이지만 최대 공약수를 구하는 과정이 한 번에 이해가 되지 않았고,
가끔 쓸모가 있어보여 소개해 드리고자 가져왔습니다.
