# 완주하지 못한 선수
### 마라톤 선수들 중 완주하지 못한 단 한명의 선수를 찾아라
### 입출력
|입력|출력|result|
|---|---|---|
|participant|completion|result|
|["leo", "kiki", "eden"]|["eden", "kiki"]|"leo"|



```javascript
function solution(participant, completion) {
    var answer = '';
    participant.sort()
    completion.sort()
    participant.push('')
    for(let i = 0 ; i < participant.length ; i++){
        if (participant[i] !== completion[i]){
            return participant[i]
            
        }
            
    }

}
```

- sort메서드를 통해 동명이인을 가진 선수들을 같은 곳에 배치 해주고
  participant배열과 completion배열의 순서들을 맞췄다.
  
- 입출력 배열들이 서로 맞지 않으면 통과하지 못한 선수이기 때문에 return을 해준다.
