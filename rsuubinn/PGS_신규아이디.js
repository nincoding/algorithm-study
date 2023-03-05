// 아이디의 길이는 3자 이상 15자 이하여야 합니다.
// 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
// 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

function solution(new_id) {
    let answer = new_id.toLowerCase(); // 1단계
    answer = answer.replace(/[^a-z0-9-_.]/gi, ""); // 2단계
    answer = answer.replace(/[.]{2,}/gi, "."); // 3단계
    answer = answer.replace(/^[.]|[.]$/gi, ""); // 4단계
    if(answer === "") answer = "a"; // 5단계
    if(answer.length >= 16) { // 6단계
        answer = answer.substring(0, 15).replace(/[.]$/gi, "");
    }
    while(answer.length < 3) answer += answer[answer.length - 1]; // 7단계
    
    return answer;
}
