// 문자열 뒤집기 https://school.programmers.co.kr/learn/courses/30/lessons/120822


function solution(my_string) {
    var answer = '';
    for (i = 0; i < my_string.length; i++) {
        answer += my_string[my_string.length - i - 1]
    }
    return answer;
}
// 다른사람 풀이

function solution(my_string) {
    return my_string.split('').reverse().join('');
}


// 문자 반복출력하기 https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
    var answer = '';
    for (i = 0; i < my_string.length; i++) {
        for (ii = 1; ii <= n; ii++) {
            answer += my_string[i];
        }
    }
    return answer;
}

// 다른 사람 풀이 
// map , repeat, join
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}
//확실한 제한사항 설정

function solution(my_string, n) {
    if (!my_string || my_string.length <= 0 || my_string.length > 50) return;
    if (!n || n.length <= 0 || n.length > 50) return;

    var answer = '';

    for (let i = 0; i < my_string.length; i++) {
        const character = my_string[i];
        for (let l = 0; l < n; l++) {
            answer += character;
        }
    }
    return answer;
}

//짝수 홀수 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
    var answer = [];
    let odd = 0;
    let even = 0;
    for (i = 0; i <= num_list.length - 1; i++) {
        if (num_list[i] % 2 === 0) {
            even += 1;
        } else if (num_list[i] % 2 === 1) {
            odd += 1;
        }
    }
    answer = [even, odd];
    return answer;
}
// 다른사람 풀이

function solution(num_list) {
    var answer = [0, 0];

    for (let a of num_list) {
        answer[a % 2] += 1
    }

    return answer;
}

function solution(num_list) {
    return [
        num_list.filter((num) => num % 2 === 0).length,
        num_list.filter((num) => num % 2 === 1).length,
    ];
}
function solution(num_list) {
    return num_list.reduce(([even, odd], curr) => {
        return [
            curr % 2 === 0 ? even + 1 : even,
            curr % 2 === 1 ? odd + 1 : odd
        ]
    }, [0, 0])
}

//직각삼각형 출력하기 https://school.programmers.co.kr/learn/courses/30/lessons/120823
// readline 을 왜 어떻게 사용하는 지 아직 이해가 안감.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0]);
    
    for(let i = 0 ; i < num; i++) {
        let logStr = ''
        for(let j = 0 ; j <= i; j++) {
            logStr+='*'
        }
        console.log(logStr)
    }
});

// 다른사람 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}

//
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 1; i <= +input[0]; i++) {
        console.log('*'.repeat(i));
    }
});

//양꼬치 https://school.programmers.co.kr/learn/courses/30/lessons/120830
function solution(n, k) {
    var answer = 0;
    let ramb = 12000
    let bev = 2000
    answer = (ramb * n) + (bev * k) - (Math.floor(parseInt(n / 10)) * bev)
    return answer;
}
// 다른사람 풀이

function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}