//누적합을 사용한 구간합쿼리 문제

function solution (n, m, nums, arr) {

  //n까지의 누적합을 담을 배열 psum을 선언
  //누적합배열은 첫번째 요소로 1을 가지고 있음 0 + 1 의 합인 1
  let psum = [1];
  
  //누적합 배열 psum 만들기
  for(let i = 1; i < n; i++) {
    psum[i] = psum[i - 1] + nums[i];
  }

  //m까지의 질문에 답을 해야하므로 사용
  for(let i = 0; i < m; i++) {

    //만약 시작요소가 1이라면 누적합배열에서 그대로 출력
    if(arr[i][0] === 1) console.log(psum[arr[i][1] - 1]);

    //만약 시작요소가 1이 아니라면 누적합배열의 요소들의 차를 가지고 출력함.
    if(arr[i][0] !== 1) {
      console.log(psum[arr[i][1] - 1] - psum[arr[i][0] - 2]);
    }
  }
}

//n까지의 수, m번 답변, 1부터 n까지 이루어진 배열, a부터 b까지의 합을 m번 물어보는 배열
solution(8, 3, [1,2,3,4,5,6,7,8], [[1,4],[1,5],[3,5]]);

