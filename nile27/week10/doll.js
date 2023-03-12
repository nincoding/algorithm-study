/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/64061#qna
 * feat(PGS): stack_크레인 인형뽑기 게임
 */
function solution(board, moves) {
  let stack = [];
  let answer = 0
  for(let i = 0 ; i < moves.length ; i++){
      for(let j = 0 ; j < board.length ; j++){
          if(board[j][moves[i]-1] !==0) {
              stack.push(board[j][moves[i]-1]);
              board[j][moves[i]-1] = 0
              break;
      }
  }
      if(stack.length  >1 && stack[stack.length-1] === stack[stack.length-2]) {
          stack.pop(); 
          stack.pop();
          answer+=2
          
      }
  }
  return answer;
}