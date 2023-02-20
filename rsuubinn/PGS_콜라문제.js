function solution(a, b, n) {
    let answer = 0;
    while(n >= a) {
        answer =answer + Math.floor(n / a) * b;
        n = (n % a) + Math.floor(n / a) * b;
    }

    return answer;
}


// 실패
// function solution(a, b, n) {
//     var answer = 0;
//     while(n >= a) {
//         answer = Math.floor(answer + (n / a) * b);
//         n = Math.floor((n % a) + (n / a) * b);
//     }

//     return answer;
// }
