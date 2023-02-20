// 나이 출력 https://school.programmers.co.kr/learn/courses/30/lessons/120820
function solution(age) {
    return new Date().getFullYear() - age + 1;
} // 년 구하기

// 각도기 https://school.programmers.co.kr/learn/courses/30/lessons/120829
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
} // 필터 사용법
function solution(angle) {
    return angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
}// 3항 연산자 사용법

// 정수 올림 // Math.ceil
function solution(num1, num2) {
    var answer = 0;
    answer = Math.ceil((num1 / num2) * 1000);
    return answer;
}

// 정수 내림 Math.floor
function solution(num1, num2) {
    var answer = 0;
    answer = Math.floor((num1 / num2) * 1000);
    return answer;
}
// Math.trunc
function solution(num1, num2) {
    return Math.trunc(num1 / num2 * 1000);
}
//
function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}
// 유클리드 호제법, 최대 공약수 구하는 식
let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

// 유클리드 호제법, 최소 공배수 구하는 식

let getLCM = (num1, num2) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}