/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * feat(PGS): 해시 _ 폰켓몬
 */

function solution(nums) {
  let arr = new Set(nums)
  let answer = 0
  let count = 0
  for (let a of arr){
      count++
  }
  if(count < nums.length/2) return count
  return nums.length/2
          
      
  
  
}

