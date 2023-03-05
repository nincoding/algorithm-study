/** 
 * https://school.programmers.co.kr/learn/courses/30/lessons/64065
 * 
 * 입출력 예시
 * s ="{{2},{2,1},{2,1,3},{2,1,3,4}}" result [2,1,3,4]
 * s = "{{20,111},{111}}" result = [111,20]
 */



function solution(s) {
  var answer = [];
  let table = {}
  let arr = s.slice(2,s.length-2).split("},{").join(',').split(',')

  for(let i = 0 ; i < arr.length ; i++){
      if(table[arr[i]] === undefined) table[arr[i]] = 1
      else {
          table[arr[i]] += 1
      }
  }
  answer = Object.keys(table).sort( (a ,b) => table[b] -table[a])
  answer = Object.values(answer).map((item) => Number(item))
  return answer
}