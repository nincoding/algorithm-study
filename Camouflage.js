/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 
 * feat(PGS) : 해시_위장
 * 제한
 * 종류별로, 가짓수별로 옷을 입지만 아무 것도 안입는 일은 없다.
 * 입출력
 * clothes : [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
 * result : 5
 */

function solution(clothes) {
  let clothesType = {}
  let sum = 1

  // clothes에 배열의 요소를 key = 종류, values = 옷이름으로 지정해주는 배열을 만든다.
  for (let i of clothes){  
      if(clothesType[i[1]] === undefined) clothesType[i[1]] = [i[0]]
      else clothesType[i[1]].push(i[0])
  }
  
  // 모든 경우의 수 모든 가지수의 갯수를 곱한다. +1은 입지 않았을 때를 말한다.
  for(let key in clothesType){
  sum *= clothesType[key].length+1
  }
  
  // 모든 옷을 입지 않는 경우의 수는 없으니, 모든 경우의 수에서 1을 뺀다.
  return sum-1

}

//console.log(solution([["a", "headgear"], ["b", "headgear"], ["c", "eyewear"], ["d", "eyewear"], ["e", "face"], ["f", "face"]] ))