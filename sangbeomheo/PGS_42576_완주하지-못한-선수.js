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

// 1. 객체 사용
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

// 2. Map 사용
function solution(participant, completion) {
  const map = new Map();

  for (const player of participant) {
    if (map.get(player) === undefined) map.set(player, 0);
    map.set(player, map.get(player) + 1);
  }

  for (const player of completion) {
    map.set(player, map.get(player) - 1);
  }

  for (const [player, count] of map) {
    if (count === 1) return player;
  }
}

// 3. for문 적게 사용
function solution(participant, completion) {
  const map = new Map();
  const length = participant.length;

  for (let i = 0; i < length; i++) {
    const _participant = participant[i];
    const _completion = completion[i];

    map.set(_participant, (map.get(_participant) || 0) + 1);
    map.set(_completion, (map.get(_completion) || 0) - 1);
  }

  for (const [player, count] of map) {
    if (count === 1) return player;
  }
}
