# 스택
스택은 "쌓아놓은 더미"라는 뜻으로 쌓여있던 접시, 쌓여 있는 상자가 스택에 해당이 되며 "프링글스"과자가 스택의 대표적인 예시이다. `LIFO(Last-In First-Out)`으로 가장 최근에 들어온 데이터가 가장 먼저 나간다는 의미이다. LIFO의 경우 핸드폰의 `뒤로가기`나 흔히 우리가 문서나 코딩 작업을 할 때 `Ctrl+Z`같이 데이터를 되돌릴 때 이 스택 자료구조를 이용한다.

# JS 사용법
보통 `배열`을 통해 많이 구현하며, `Array.push()`,`Array.pop()`을 이용해서 삽입과 추출을 구현할 수가 있다.

```js
let arr = []
for(let i = 1 ; i <= 3 ; i++){
  arr.push(i)
}

arr.pop() // 3; 
arr.push(4)

console.log(arr) // [1,2,4]
```

![](https://velog.velcdn.com/images/nile27/post/384506d8-22fe-43e3-b0ec-2f3748f00fd6/image.png)



# 예제 (프로그래머스_올바른 괄호)

[문제 링크](https://school.programmers.co.kr/learn/courses/13213/lessons/91074)

괄호가 바르게 짝지어졌는지 확인하여 `boolean`값으로 return 하시오.

- 입출력

|s|answer|
|:--:|:--:|
|"(())()"| true |
|"(()("| false |


```js
function solution(s){
    var answer = true;
    let left = 0
    // 1
    if(s[0] === ')') return false 
  
  	// 2
    for(let i = 0 ; i < s.length; i++){
        if(s [i] === '(') left+=1
        else left -= 1
        if(left < 0) return false
    }
    // 3
    if(left !== 0) return false

    return answer;
}
```

1. 첫 입력값부터 `')'`인 경우 맞지 않기 때문에 `false`값을 리턴한다.
2. 반복문을 통해 `'('` 인 경우 `left`값을 1씩 더해주고, `')'`인 경우 1씩 빼준다. 만일 `left`의 값이 음수인 경우 짝이 맞지 않기 때문에 `false`를 리턴해준다.
3. `left`의 값이 0이 아닌 경우에는 제대로 잘 닫히지 않는 괄호가 남았기 때문에 `false`가 된다.