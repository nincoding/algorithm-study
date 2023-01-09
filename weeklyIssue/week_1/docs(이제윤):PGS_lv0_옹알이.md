# 프로그래머스_lv0_옹알이
<br/>

- **문제 설명**<br/>
머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

- **유의사항**<br/>
네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

- **수도코드**<br/>
1.파라미터 배열의 길이만큼 반복합니다.<br/>
2.파라미터 배열의 반복횟수번째(i) 요소에 접근합니다.<br/>
3.만약 해당 요소가 "aya", "ye", "woo", "ma"로만 구성이 되어 있다면 answer를 증가시킵니다.<br/>

<br/>

```
function solution(babbling) {
    var answer = 0;
    let regex = /aya|ye|woo|ma/gi;

    for(let i in babbling){
        if(babbling[i].replace(regex,'') === ''){
            answer++
        }
    }
    return answer;
}
```

- **시행착오**<br/>
    - 해당 요소가 "aya", "ye", "woo", "ma"로만 구성이 되어 있다면을 어떻게 판별을 할 것인가. 
    - 첫번째 방안 includes로 판별(x)
    - 두번째 방안 "aya", "ye", "woo", "ma" 이외의 문자열로 판별(x)
    - 최종 방안 "aya", "ye", "woo", "ma" 일 때 판별(o)
