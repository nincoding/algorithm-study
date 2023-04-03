/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 * feat(PGS) : Lv2_괄호 회전하기
 */



const stackfunc = (stack, right) => {
  let left =''
  switch(right){
    case ')' : 
    left = '('
    break;
    case ']' : 
    left = '['
    break;
    case '}' : 
    left = '{'
    break;
  }
  stack.pop()
  return (stack[stack.length-1] === left) ? stack.pop() : false
}

function balancedBrackets (str) {
  let stack = []
  if(str[0] === ')' || str[0] === '}' || str[0] === ']' || str.length %2 !== 0) return false

  for(let i of str){
    stack.push(i)
    if( i === ']' || i === '}' || i=== ')' ){
      if(stackfunc(stack,i) === false) return false
    }
  }

  if (stack.length !== 0)return false
  return true
};

function solution(s) {
    let answer = 0     
    for(let i = 0 ; i < s.length ; i++){
        if(balancedBrackets(s)) answer++
        s = s.slice(1,s.length) + s[0]
    }
    

    return answer
}
