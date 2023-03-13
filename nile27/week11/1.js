/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840#qna
 * feat(PGS): 완전탐색_모의고사
*/


function solution(answers) {
  var answer = [];
  let stack = [0,0,0]
  let a1 = [1,2,3,4,5]
  let a2 = [2,1,2,3,2,4,2,5]
  let a3 = [3,3,1,1,2,2,4,4,5,5]
  
  for (let i = 0 ;i < answers.length ; i++){
      if(answers[i] === a1[i%a1.length]) stack[0]++
      if(answers[i] === a2[i%a2.length]) stack[1]++
      if(answers[i] === a3[i%a3.length]) stack[2]++
  }
  for(let i in stack){
      if(Math.max(...stack) === stack[i]) answer.push(Number(i)+1)
  }
  
  return answer;
}