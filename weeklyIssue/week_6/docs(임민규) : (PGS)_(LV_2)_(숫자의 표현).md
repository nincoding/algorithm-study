# 숫자의 표현
- 입출력
```
Input : n = 15 
Output : return 4
1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
```
```javascript
function solution(n) {
    var answer = 0;
    
    for(let i = 1 ; i <= n ; i++){
        let sum = 0
        let j = i
        while(sum < n){
            sum = j + sum
            if(sum === n) answer += 1
            j++
        }
    }
    return answer;
}
```

- 첫 번째 반복문을 통해 받아온 값 보다 작은 수에서의 시작 값을 반복한다.
- 두 번째 반복문을 통해 시작 값 + 1을 더한 값을 n의 값보다 작을 때 까지 반복한다.
- 만일 sum의 값이 받아온 매개변수와 같으면 answer++ 통해서 연속된 자연수로 표현한 값을 출력해준다.
