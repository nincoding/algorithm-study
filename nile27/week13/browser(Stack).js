/**
 * feat(CPT) : stack_브라우저 뒤로가기 앞으로가기
 *  
 */


function browserStack(actions, start) {
  if(typeof(start) !== 'string') return false

  let prevStack = [];
  let nextStack = [];
  let answer = []

  for(let i = 0 ; i < actions.length; i++){
    if (typeof(actions[i]) !== 'number'){
      prevStack.push(start)
      start = actions[i]
      nextStack = []
    }
    else if (actions[i] === -1 && prevStack.length !== 0){
      nextStack.push(start)
      start = prevStack.pop()
    }
    else if (actions[i] === 1 && nextStack.length !== 0){
      prevStack.push(start)
      start = nextStack.pop()
    }

  }
  answer.push(prevStack)
  answer.push(start)
  answer.push(nextStack)

  return answer
  

}

/**
 * ["B", "C", -1, "D", "A", -1, 1, -1, -1]
 * prev [a]
 * still [b]
 * next [a,d]
 * next 새로운 페이지에 접속할 때 마다 비워준다.
 */