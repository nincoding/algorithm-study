//1. 앞에서부터 차례대로 원소를 확인하며 갯수를 카운팅한다
//2. 최빈값을 그떄그때 기록한다.
function solution(array) {
    let sortArray = array.sort((a,b)=> a-b); //정렬을 해줘야 편함.
    let cnt = 0;
    
    let mode = -1  //최빈값
    let modeRepeatCnt = 0; //최빈값이 되기까지 몇번이나 중복됐는지
    let repeatCnt = 0;     // 현재 똑같은 숫자가 몇 번 등장했는지
    let beforeNumber = -1; // 지금 보고있는 숫자의 이전 숫자
    while(cnt < array.length){
        if(beforeNumber !== array[cnt]) { //-1은 array의 원소값으로 오지 않는 수이기 때문에 반복문을 시작하는 순간
            repeatCnt = 1; // 중복된 횟수.(이 숫자를 1번봤다.)
        }else{ //같은숫자가 반복되고있는 경우
            repeatCnt = repeatCnt + 1; //반복횟수에 1을 더해준다.
        }
        if (repeatCnt > modeRepeatCnt) { // 반복횟수가 최빈값의 반복횟수보다 크다면
            mode = array[cnt] // 최빈값은 현재 배열의 값.
            modeRepeatCnt = repeatCnt //현재 반복횟수가 최빈값의 반복횟수
        }
        beforeNumber = array[cnt] // 현재 배열의 값이 이전 숫자로 할당됨.
        cnt = cnt+1 // 카운트를 1 해준다.
       }return mode

}
