/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973#qna
 * feat(PGS): stack_짝지어 제거하기
 */

function solution(s){
    //let arr = s.split('')
    let stack = []
    if(s.length % 2 !== 0) return 0
    stack.push(s[0])
    s = s.slice(1)
    while(s.length !== 0 ){
        stack.push(s[0])
        s = s.slice(1)
        if(stack[stack.length-1] === stack[stack.length-2]){
            stack.pop()
            stack.pop()
        }

    }

    return (stack.length === 0) ? 1 : 0;
}