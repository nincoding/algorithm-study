/*

    Programmers / 완주하지 못한 선수 / Level 2 / 00:07:51
    https://programmers.co.kr/learn/courses/30/lessons/42576


    ## Pseudo Code ##
    
    1. 객체를 생성
    2. 참가자들을 전부 객체에 넣는다.
      ㄴ 중복된 참가자가 있으면 값++, 없으면 값을 1로 설정
    3. 완주자들을 하나씩 확인하면서 객체의 값--
    4. 객체 중에 벨류가 1인 키를 찾아 리턴한다.

*/

function solution(participant, completion) {
  const playerMap = {};

  for (const player of participant) {
    playerMap[player] ? playerMap[player]++ : (playerMap[player] = 1);
  }

  for (const player of completion) {
    playerMap[player]--;
  }

  for (const [player, count] of Object.entries(playerMap)) {
    if (count === 1) return player;
  }
}
