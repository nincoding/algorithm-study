/*

    Coplit / Largest Product Of Three / Section 3 / 00:09:33
    https://urclass.codestates.com/codeproblem/2b210f60-2f38-45d6-bfcc-4bf75c5abbb5


    ## Pseudo Code ##
    
    풀이생각 1
    - 조합으로 풀기
    - 순서 상관없이 3개를 뽑아서 최대값을 구하는 것이니까 조합을 이용해 풀 수 있다.

    1. 순서 상관없이 3개씩 넣은 배열을 모은 배열 생성
    2. 모은 배열을 내부 요소들의 곱으로 변경
    3. 곱들 중 가장 큰 수 리턴

*/

const largestProductOfThree = arr => {
  const combinations = getCombinations(arr, 3);
  const multiplications = combinations.map(combination =>
    combination.reduce((a, c) => a * c)
  );

  return Math.max(...multiplications);
};

const getCombinations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) return arr.map(v => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map(combination => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};
