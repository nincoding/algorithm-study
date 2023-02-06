/*문제-
계좌에 들어있는 돈 일부를 은행에서 출금하고자 한다. 돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받는다.

돈의 액수 money가 매개변수로 주어질 때, 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return 하도록 solution 메서드를 완성하라.

### 제한사항

- money는 1 이상 1,000,000 이하인 자연수이다.

### 실행 결과 예시

| money | result |
| 50237	| [1, 0, 0, 0, 0, 2, 0, 3, 7] |
| 15000	| [0, 1, 1, 0, 0, 0, 0, 0, 0] |
*/


function solution(money) {
  //화폐의 종류
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 몇 번 거슬러 줘야하는지 담을 배열
  let result = [];

  // 화폐에 맞게 순서대로 반복돌림
  for (let i = 0; i < currency.length; i++) {
    // 각 화폐의 양 만큼 나눈 몫의 양
    let currCount = Math.floor(money / currency[i]);
    // 만약 나눌 수 있는 경우 배열에 담아주고 money에서 해당 금액을 빼준다.
    if (currCount !== 0) {
      result.push(currCount);
      money -= currency[i] * currCount;
    }
    // 나눌 수 없는 경우엔 0을 배열에 넣어준다.
    else {
      result.push(0);
    }
  }
  // 최종적으로 result에는 각 화폐에 맞게 최대한 담을 수 있는 값이 배열에 담겨있다.
  return result;
}
