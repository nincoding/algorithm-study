# 모스부호 번역(1)

`"docs(${Gorden-Dosi}): ${PGS}_${Level  0}_${모스부호(1)}`

우선 0레벨 부터 차근히 올라가는 중이라서 흥미 위주로 선정했습니다.

```jsx
function solution(letter) {
    // 공백을 단위로 끊어 문자를 읽어야한다.
    // 공백 단위로 나온 문자를 대입해서 해석
    var answer = '';
    let checkSpace = 0;
    let startLetter = 0;
    let length = letter.length
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }

    for( let i = 0; i < length; i++){
        if( letter[i] === ' '){ // 공백을 찾는다.
            checkSpace = i //공백의 좌표를 변수에 할당한다.
            answer += morse[`${letter.slice(startLetter,checkSpace)}`]
            //첫글자에는 공백이 없어 첫 기호와 공백 전까지의 좌표를 1단어로 설정하고 대입한다.
            startLetter = i+1 // 공백 다음 글자의 좌표를 변수에 할당 및 반복
        }
    }
        answer += morse[`${letter.slice(startLetter,length)}`]
        // 마지막에는 공백이 없어 마지막 글자에는 별도의 좌표 지정
    return answer;
}
```

제가 푼 풀이를 보면 복잡해서 한 눈에 들어오지 않지만 사실상 번역기에 가까운 코드라고 생각했습니다.
단순하지만 단어의 나열도 이런 식으로 나중에는 응용할 수 있을 것 같습니다.

아래는 다른사람의 풀이이지만 저번주에 배운 reduce를 활용해 풀 수 도 있다는 점이 흥미로웠습니다.

```jsx
morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}
// 공백을 단위로 하나씩 대입해서 반복.
```

익숙해지면 간단하게 풀수 있는 문제이지만, 데이터를 활용한다는 측면에서 재미있었고,
실제로 활용될수 있을 것 같아 소개해 드립니다. 감사합니다.