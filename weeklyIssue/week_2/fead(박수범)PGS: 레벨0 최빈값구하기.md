# 프로그래머스_lv0_최빈값구하기
<br/>

- **문제 설명**<br/>
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
최빈값이 여러 개면 -1을 return 합니다.

- **유의사항**<br/>
0 < array의 길이 < 100
0 ≤ array의 원소 < 1000

- **수도코드**<br/>

    - 이전숫자와 현재 반복문이 돌고있는 요소의 값을 비교한다
    - 같으면 현재 반복횟수에 1을 더해주고, 다르다면 1을 할당해준다.
    - 현재 반복횟수가 최빈값의 반복횟수와 비교한다.
    - 현재반복횟수가 더 크다면, 현재 요소의 값이 최빈값이된다 
    - 현재 반복횟수가 최빈값의 반복횟수가 된다.
    - 현재 요소의 값이 이전 숫자로 할당된다.
    - 카운트를 1 더해준다.
    - 반복.
    - 끝나면 최빈값 리턴.

<br/>

```

function solution(array) {
    let sortArray = array.sort((a,b)=> a-b); //compareFn를 지정해줘야 유니크드 문자열로 읽지않는다.
    let cnt = 0;
    
    let mode = 1 //최빈값, 최소 1
    let modeRepeatCnt = 0; //최빈값의 중복횟수
    let repeatCnt = 0;     // 현재값의 중복횟수
    let beforeNumber = -1; // 지금 보고있는 숫자의 이전 숫자
    
    while(cnt < array.length){ //배열의 길이만큼 반복한다.
        if(beforeNumber !== array[cnt]) { //-1은 array의 원소값으로 오지 않는 수이기 때문에 반복문을 시작하는 순간
            repeatCnt = 1; // 현재 반복 횟수.(이 숫자는 초면이오.)
        }else{ //같은숫자가 반복되고있는 경우
            repeatCnt = repeatCnt + 1; //현재 반복횟수에 1을 더해준다.
        }
        if (repeatCnt > modeRepeatCnt) { // 반복횟수가 최빈값의 반복횟수보다 크다면 새로운 최빈값의 나타난 것.
            mode = array[cnt] // 현재 배열의 요소값이 새로운 최빈값으로 할당된다.
            modeRepeatCnt = repeatCnt //현재 반복횟수가 최빈값의 반복횟수로 할당된다.
        }
        beforeNumber = array[cnt] // 현재 배열의 값이 이전 숫자로 할당됨.
        cnt = cnt+1 // 카운트를 1 해준다.
        
       }return mode

}

```

- **시행착오**<br/>
    - 중복된 최빈값을 어떻게 판별할것인가. (x) 
    - 다른메서드를 이용해 좀 더 간결하게 작성 할 수 없는가
    - 반복횟수,이전숫자 등을 기록해줘야하는데 머리가 너무 복잡했다.
