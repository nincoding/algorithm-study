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

const balancedBrackets = function (str) {
  let stack = []
  if(str[0] === ')' || str[0] === '}' || str[0] === ']' || str.length %2 !== 0) return false

  for(let i of str){
    stack.push(i)
    if( i === ']' || i === '}' || i=== ')' ){
      if(stackfunc(stack,i) === false) return false
    }
  }
  return true
};
