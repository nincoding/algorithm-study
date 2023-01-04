function solution(order) {
  let answer = 0;
  String(order).split('').forEach((v) => {
    if(v === '3') answer += 1;
    if(v === '6') answer += 1;
    if(v === '9') answer += 1;
  })
  return answer;
}

//다른풀이 - 정규표현식을 사용한 풀이
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
