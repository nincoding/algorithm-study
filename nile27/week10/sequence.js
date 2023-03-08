
const solution = (n , arr) => {
  let stack = []
  for(let i of arr){
    if(i === 'top' && stack.length === 0 || i === 'pop' && stack.length === 0)console.log(-1)
      
    else if(i.includes('push') === true) stack.push(i.slice(5, i.length))

    else if(i === 'size') console.log(stack.length)

    else if(i === 'empty') {
      if(stack.length === 0) console.log(1)
      else console.log(0)
    }

    else if( i === 'pop' && stack.length !== 0) console.log(stack.pop())

    else if( i === 'top' && stack.length !== 0) console.log(stack[stack.length-1])

  }

}



solution(14 ,['push 1', 'push 2', 'top', 'size', 'empty', 'pop', 'pop', 'pop', 'size', 'empty', 'pop', 'push 3', 'empty', 'top'])