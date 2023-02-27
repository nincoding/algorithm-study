/*

    Coplit / Is Subset Of / Section 3 / 00:07:14
    https://urclass.codestates.com/codeproblem/ad556749-8b7c-4487-9760-ac9f733eb886

    ## 문제 ##
    
    - sample이 base의 부분집합인지 확인하기
    - 입력 : base: number[], sample: number[]
    - 출력 : boolean


    ## Pseudo Code ## 
    
    * 시간복잡도 : O(n) => add하는데 걸리는 시간(base크기) + has하는데 걸리는 시간(sample크기)
    * 공간복잡도 : O(n) => add하는데 필요한 공간(base크기)

    - 시간복잡도를 고려하면, 캐시를 이용해 base를 전부 기억한 이후 sample을 하나씩 확인해보면 될 것 같다.
    - base는 배열이고 key:value 형태가 아닌 value 형태니까 Set을 이용

    1. base를 순회하면서 Set 자료구조에 넣기
    2. sample을 순회하면서 Set에 있는지 확인
        ㄴ 있으면 계속 순회
        ㄴ 없으면 바로 종료, return false
        ㄴ 전부 있으면 return true

    - Set을 사용한 이유 : Set의 has() 메소드의 시간복잡도는 O(1)이나 O(logn)이라고 예상되기 때문

*/

const isSubsetOf = function (base, sample, set = new Set()) {
  base.forEach(v => set.add(v));
  return sample.every(v => set.has(v));
};

// 코드 개선
const isSubsetOf2 = function (base, sample, set = new Set(base)) {
  return sample.every(v => set.has(v));
};
