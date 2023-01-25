/*

Programmers / 베스트앨범 / Level 3 / 00:32:50
https://programmers.co.kr/learn/courses/30/lessons/42579


## Pseudo Code ##

  1. 장르배열을 돌면서 맵에 추가
    ㄴ 데이터 인터페이스
    ㄴ 장르 : {
              전체재생 수 : number,
              노래 : {
                고유번호 : number,
                재생 수 : number,
              }
            }
            
  2. Map으로 장르를 키로 묶어서 총 재생수, 노래모음 배열을 value로 넣음
  3. 장르별로 최다 재생 수로 정렬 후 2개까지 자름
  4. 장르별로 2개까지 얻은 노래를 1차원 배열로 고유번호로 리턴

*/

function solution(genres, plays) {
  const map = new Map();

  genres.forEach((genre, index) => {
    const play = plays[index];
    const currentGenreData = map.get(genre) || { total: 0, songs: [] };
    const updatedGenreData = {
      total: currentGenreData.total + play,
      songs: [...currentGenreData.songs, { index, play }],
    };
    map.set(genre, updatedGenreData);
  });

  return [...map.values()]
    .sort((a, b) => b.total - a.total) // 많이 재생된 장르 정렬
    .map(
      ({ _, songs }) =>
        songs
          .sort((a, b) => b.play - a.play) // 많이 재생된 노래 정렬
          .slice(0, 2) // 최대 2곡까지 자르기
          .map(({ index }) => index) // 고유번호로 변경
    )
    .flat(); // 2차원 배열 => 1차원 배열
}
