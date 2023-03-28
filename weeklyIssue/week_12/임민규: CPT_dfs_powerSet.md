# 문제
문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해라

## 제한
- 알파벳 순으로 정렬
- 중복된 원소 허용안됨
- 부분집합은 빈 문자열을 포함해야한다.

## 입출력 예시
```js
powerSet('abc') = ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
powerSet('jjump') = ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
```


## 의사코드
- 매개변수 `str`문자열을 배열로 바꾸고 `Set`오브젝트를 사용하여 중복을 제거 해주고, 오름차순(`sort`)으로 정렬해준다.
- 재귀를 통해서 depth(깊이)를 한 단계씩 늘려 가면서 모든 경우의 부분 집합수를 정답에 담아 리턴해준다. (DFS)



```js
const dfs = ( arr, ans , depth, result) => {
	// 그냥 배열만 같다고 하는 경우에는 주소값을 참조하여 계속해서 값이 바뀌기 때문에 스프레드를 사용하여 그 값만 이용한다.
    let res = [...result]
    // depth가 배열의 길이보다 길면 리턴을 해준다.
    if(depth > arr.length){
        return 0
    } 
  // 반복문을 통해 부분 집합들을 전부 ans에 문자열 형식으로 담아준다.
    for(let i = depth ; i < arr.length ; i++){
      res.push(arr[i])
      ans.push(res.join(''))
      // 깊이가 마지막일 경우에는 또다시 재귀를 하지 않아도 되니 마지막 원소가 아닐 경우 다시 재귀를 해주고 depth의 경우에만 i+1로 넘겨준다.
      if(i !== arr.length-1) dfs(arr, ans, i+1, res)
      // res의 주소값에도 영향이 있으니 result에 값만 다시 초기화 시켜준다.
        res = [...result]
      
        
    }
    return ans
}


const powerSet = function (str) {
  // 처음에 빈 문자열을 입력해준다.
  let ans = ['']
  // 중복 및 오름차순 작업
  let set = new Set(str.split('').sort())
  // 다시 iterable형 배열로 바꾸어준다.
    let arr = [...set]
  

  ans = dfs ( arr, ans, 0, [])
  return ans

};

```

- 마지막 `res = [...result]`로 초기화 시켜주는 이유는 [a,b,c]가 있다고 가정했을 때 만일 [a,b]까지 진행이 되었다고 하자, 그러고 다시 [a,b,c]가 되었고 다시 돌아와서 [a,c]가 되어야 하는데, `res = result`로 코드를 짰을 경우에는 [a,b,c,c]가 된다. 즉 배열은 주소값을 참조하는 참조형이기 때문에 값을 가르키는 것이 아닌 `result의 주소값`을 참조하게 되버려 result의 값에 혼동이 오게 된다.