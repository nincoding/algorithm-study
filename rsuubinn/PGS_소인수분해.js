function solution(n) {
    let answer = [];
    for(let i = 2; i <= n; i++) { // 2부터 시작 n === 12
        let count = 0;
        if(n % i === 0) { // n과 i가 나누어 떨어지는지 확인 
            for(let j = 1; j <= i; j++) { // i == 2
                if(i % j === 0) {
                    count = count + 1;
                }
            }
            if(count === 2) { // 소인수?
                answer.push(i);
            }
        }
    }
    return answer;
}
