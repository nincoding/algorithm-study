function solution(numbers) {
  var answer = 0;
  
  let arr = Array.from( {length: 10} , (v,i) => i)
  
  for(let i of arr){
      if(!numbers.includes(i)) answer += i
  }
  
  
  return answer;
}