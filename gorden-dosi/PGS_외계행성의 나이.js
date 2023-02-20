//외계행성의 나이 https://school.programmers.co.kr/learn/courses/30/lessons/120834
function solution(age) {
  var answer = '';
  let ageStr = `${age}`
  let numb = {
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j'
  };
  for (i = 0; i < ageStr.length; i++) {
    answer += numb[ageStr[i]];
  }
  return answer;
}


//다른 사람의 풀이
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
