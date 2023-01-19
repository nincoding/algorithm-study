//중앙값 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120811/solution_groups?language=javascript

function solution(array) {
    var answer = 0;
    // 입력 = 1, 2, 7, 10, 11
    // 출력 = 7
    // 배열의 길이 확인
    // sort로 배열 정렬
    // 중간값 확인
    // 배열의 중간값 반환.
    let medn = Math.floor(array.length / 2);
    console.log(medn)
    let soar = array.sort(function(a,b){
        return a - b;
    })
    console.log(soar[medn])
    return answer = soar[medn]
}
console.log(solution([1,2,3,4,5]))


function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

//최빈값 구하기

function solution(array) {
  var answer = 0;
  let freq = {};
  let countstr = {};
for( i in arr ){
  if( freq[arr[i]] >= 1 ){
    freq[arr[i]] += 1
  }else{freq[arr[i]] = 1;
  }
}
const max=Math.max.apply(Math, array.map(i => { return i.value; }));
return answer = max{freq};
}

console.log(1, 2, 3, 3, 3, 4)

//홀수만 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120813
function solution(n) {
  var answer = [];
  let odd = ''
  for(i = 1; i <= n; i++){
      if( i % 2 !== 0){
          answer.push(i);
      }
  }
  return answer;
}

// 최빈값 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120812
function solution(array) {
  let map = new Map();
  
  // Map 객체 초기화
  for(let i = 0; i <= Math.max(...array); i++){
      map.set(i, 0);    
  }
  
  // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
  for(let i = 0; i < array.length; i++){
      map.set(array[i], map.get(array[i]) + 1);
  }
  
  // Map 객체의 value만 모아서 배열로 만든다
  let arr = Array.from(map.values());
  
  // 최대값 산출
  let max = Math.max(...arr);
  
  // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
  if(arr.indexOf(max) !== arr.lastIndexOf(max)){
      return -1;
  } else {
      return arr.indexOf(max);
  }
}

// 최빈값구하기
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0)+1);
  m = [...m].sort((a,b)=>b[1]-a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
// 최빈값 구하기 실패
function solution(array) {
  var answer = 0;
  let countstr = {};
  let comp = 0;
  let compre = 0;
  //배열 -> 객체로 하여 값과 빈도를 나누어 관리
  //빈도가 가장 높은 것을 리턴
  //같은 빈도일경우 -1
  for( i = 0; i < array.length; i++){
  if( countstr[array[i]] >= 1 ){
    countstr[array[i]] += 1
  }else{countstr[array[i]] = 1;
  }
}
let arr = Object.keys(countstr)
if(arr.length === 1){
  answer = array[0]
}else{
for( i = 0; i < arr.length; i++){
    if(countstr[arr[i]] > countstr[arr[i-1]]){
      answer = arr[i+1]
      compre = countstr[arr[i+1]]
      console.log(answer)
  }else if(countstr[arr[i+1]] > countstr[arr[i]]){
      answer = arr[i]
  }
}
}
// countstr[arr[i+1] 
// i가 0 일때  - arr[0+1], arr[1]= 1
 
 for(ii = 0; ii < arr.length; ii++){
  if( answer !== arr[ii] && compre === countstr[arr[ii+1]]){
       answer = -1;
  }
 }
 console.log(arr)
 console.log(countstr);
  console.log(arr);
  console.log(answer)
  return answer
}
console.log(solution([1,1,2,2,2,3]))