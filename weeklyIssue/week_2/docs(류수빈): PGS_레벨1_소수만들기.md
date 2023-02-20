# 📗 소수 만들기
## 문제 설명
[📝문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12977)
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

## 제한사항
* nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
* nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

## 입출력 예
|nums|result|
|---|------|
|[1,2,3,4]|1|
|[1,2,7,6,4]|4|

## 입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.

## 문제 풀이
### 내 풀이
```javascript
function solution(nums) {
    let answer = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }
    return answer;
}

function isPrime(sum) {
    for(let i = 2; i <= Math.sqrt(sum); i++) {
        if(sum % i === 0) return false;
    }
    return sum > 1;
}
````

### 알게된 점
![](https://velog.velcdn.com/images/rsuubinn/post/daf4f3a2-e728-41df-aab0-46d773025824/image.png)

한 수의 약수들은 가운데를 중심으로 대칭을 이루고 있다.
1로 나눌 수 있다면 100으로 나눌 수 있고,
2로 나눌 수 있다면 50으로 나눌 수 있다.
중간 지점인 100의 제곱근 10까지 소수를 찾아도 되어 연산횟수를 줄일 수 있다.
**따라서 2부터 제곱근까지 나눠봤을 때, 나눌 수 있는 수가 단 한 개도 존재하지 않는다면 그 수는 소수이다.**
