# JadenCase 문자열 만들기
### 문제
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.


|s|return|
|------|---|
|"3people unFollowed me"|"3people Unfollowed Me"|
|"for the last week"|"For The Last Week"|


```javascript
function solution(s) {
    let first =''
    let ans = ''
    var answer = s.split(' ')
    .map((a) => {
        if(a !== ''){
            first = a[0].toUpperCase()
            a = a.slice(1).toLowerCase()
            return first + a
        }
        else return ''
    })
    ans = answer.join(' ')
    
    return ans
}
```

1. `split(' ')`으로 단어 별로 배열로 정리
2. ```javascript
     .map((a) => {
        if(a !== ''){
            first = a[0].toUpperCase()
            a = a.slice(1).toLowerCase()
            return first + a
        }
        else return ''
    })
    ans = answer.join(' ')
    ```

`.map()`메소드를 통해서 첫번째 자리을 올려주고, 나머지 자리들을 내려 준 후 합쳐준다.

3. `if(a !== '')` 테스트 케이스에 스페이스바가 2번 이상 인 것을 방지
``` javascript
let test1 = "3people unFollowed me"
let test2 = "for   the last week"

test1.split(' ') = ['3people','unFollowed','me']
test2.splitg(' ') = ['for','','','the','last','week']
```
4. `.join()`을 통해서 배열에 적용된 값들을 합쳐서 return 해준다.


