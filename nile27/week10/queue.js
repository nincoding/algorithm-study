/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 * feat(PGS): queue_다리를 지나는 트럭
 */



function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let pass = []
  let timer = []
  let sum = 0
  while ( truck_weights.length !==0 || pass.length !== 0){

      if(timer[0] === bridge_length){
          if(truck_weights.length !== 0){
              sum = sum  -  pass.shift() 
              timer.shift()
          }
          else if(truck_weights.length === 0){
              pass.shift()
              timer.shift()    
          }            
      }

      if (sum + truck_weights[0] <= weight ){
          sum += truck_weights[0]
          timer.push(0)
          pass.push(truck_weights[0])
          truck_weights.shift()
      }
     
      timer = Array.from( timer ,(v) => v+1)
      answer += 1
  }
  return answer;
}