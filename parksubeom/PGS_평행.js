function solution(dots) {
   //dots를 .flat()을 이용하여 1차원배열로 평탄화한다.
   //평탄화 한 1차원 배열을 Set 객체에 넣는다.
   //Set은 중복되는값을 허용하지 않는다는 점을 이용한다.
   //원본 배열의 길이와 set.size가 같다면 중복되는 값이 없었으니 1을 리턴
   //원본 배열의 길이와 set.size가 다르다면 중복되는 값이 제거되었다는 것이니 0을 리턴
   //엣지케이스로 두 직선이 겹치는경우?  4개의 정수가 같다는 뜻? <<여기가 이해가 안가요 ㅠㅠ
   const flatdots = dots.flat() // 2차원 배열 평탄화
    const set = new Set(flatdots);
    if(set.size  === flatdots.length) // set.size와 .flatdots의 길이가 같다면 중복되는 점들이 없었다는 것.
        return 1
    else if(set.size !== flatdots.length) // set.size와 flatdots의 길이가 다르다면 중복되는 점들이 있어서 중복요소를 제거했다는 것.
        return 0
    else if(set.size  === 6)
        return 1
}
