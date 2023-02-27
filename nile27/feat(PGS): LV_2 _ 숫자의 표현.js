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
