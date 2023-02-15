/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924 
 */

function solution(n) {
    var answer = 0;
    
    for(let i = 1 ; i <= n ; i++){
        let sum = 0
        let j = i
        while(sum < n){
            sum = j + sum
            if(sum === n) answer += 1
            j++
        }
    }
    return answer;
}

//재귀를 이용한 함수

const Sum = (start , n, sum)=> {
    if(sum > n) return 0
    else if (sum === n) return 1
    else return Sum(start+1, n, sum+start)

}


function solution(n) {
    let answer = 0;
    for (let i = 1 ; i <= n ; i++){ // 시작점 반복문
        answer = answer + Sum(i, n, 0)
    }
    return answer;
}