//피자 나눠 먹기(1)https://school.programmers.co.kr/learn/courses/30/lessons/120814
function solution(n) {
    var answer = 0;
    let plate = n/7;
    answer = Math.ceil(plate);
    
    return answer;
}
// 다른 사람 풀이
function solution(n) {
    return Math.ceil(n / 7)
}

//피자나눠먹기 (2) 봐도 이해가 안가는 나의 코드ㅠ https://school.programmers.co.kr/learn/courses/30/lessons/120815
function solution(n) {
    var answer = 0;
    let plate = {};
    if( n <= 3){
        answer = 1;
    }else{for( let i = n+1; i > 0; i--){
        let ii = 1;
        if( Number.isInteger(i*n/6)=== true ){
            plate[ii] = i*n/6;
            ii++;
        }
    }
    answer = plate[1]
    }
    
    return answer;
}


// 한번에 이해가 가는 다른사람의 코드.
const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}
function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}


// 피자 나눠먹기(3) https://school.programmers.co.kr/learn/courses/30/lessons/120816
// 쉬운게 있었는데...
function solution(slice, n) {
    var answer = 0;
    let plate = {};
    if( n <= 3){
        answer = 1;
    }else{for( let i = n+1; i > 0; i--){
        let ii = 1;
        if( Number.isInteger(i*n/slice)=== true ){
            plate[ii] = Math.ceil(n/slice);
            ii++;
        }
    }
    answer = plate[1]ㅁ
    }
    console.log(answer)
    
    return answer;
}
//다른사람
function solution(slice, n) {
    return Math.ceil(n / slice)
}

function solution(slice, n) {
    let i = 1;
    while(slice*i<n){
        i++
    }
    return i;
}