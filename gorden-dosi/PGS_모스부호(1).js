//PGS_모스부호(1) https://school.programmers.co.kr/learn/courses/30/lessons/120838

function solution(letter) {
    // 공백을 단위로 끊어 문자를 읽어야한다.
    var answer = '';
    let checkSpace = 0;
    let startLetter = 0;
    let length = letter.length
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }

    for( let i = 0; i < length; i++){
        if( letter[i] === ' '){
            checkSpace = i
            answer += morse[`${letter.slice(startLetter,checkSpace)}`]
            startLetter = i+1
        }
    }
        answer += morse[`${letter.slice(startLetter,length)}`]
    return answer;
}

// 다른사람 풀이 -- 리듀스를 썼다
morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}