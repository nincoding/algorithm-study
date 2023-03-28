/**
 * feat(CPT):재귀_PowerSet
 * 
 * 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴하시오.
 * 알파벳순 정렬
 * 중복된 원소 제거
 */




const dfs = ( arr, ans , depth, result) => {
  let res = [...result]
  if(depth > arr.length){
      return 0
  } 
  for(let i = depth ; i < arr.length ; i++){
      res.push(arr[i])
    ans.push(res.join(''))
    if(i !== arr.length-1) dfs(arr, ans, i+1, res)
      res = [...result]
    
      
  }
  return ans
}


const powerSet = function (str) {
// TODO: 여기에 코드를 작성합니다.
let ans = ['']
let set = new Set(str.split('').sort())
  let arr = [...set]


ans = dfs ( arr, ans, 0, [])
return ans

};
