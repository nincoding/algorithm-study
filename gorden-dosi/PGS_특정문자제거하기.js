//특정 문자 제거하기 https://school.programmers.co.kr/learn/courses/30/lessons/120826
function solution(my_string, letter) {
    var answer = '';
    for( i = 0; i < my_string.length; i++){
        if(my_string[i] !== letter){
        answer += my_string[i]
     }
    }
    return answer;
}

// 다른사람 풀이
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}