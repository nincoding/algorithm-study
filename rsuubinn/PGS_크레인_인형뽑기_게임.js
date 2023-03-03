

// 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
// [0,0,0,0,0]
// [0,0,1,0,3]
// [0,2,5,0,1]
// [4,2,4,4,2]
// [3,5,1,3,1]

// [1,5,3,5,1,2,1,4]	
// 4 3 1 1 3 2 패스 4

/*
1. moves for문 돌리기
2. moves[i] 부터 시작해서 2차원배열 board[i] 요소들만 탐색
3. 0이 아닌 경우 맨 위에 있는 인형을 찾은거니 return, 0으로 재할당
4. 지금 추가한 요소와 바로 직전 추가한 요소가 같다면 둘 삭제
5. answer += 1
6. return answer * 2;
*/

function solution(board, moves) {
    let dollStore = []; // 인형 저장소
    let answer = 0;
    // 1. moves for문
    moves.forEach(value => {
        let doll = findDoll(board, value);
        if(doll) { // undefined 일 경우 패스해야됨
            if(dollStore[dollStore.length - 1] === doll){ // 직전에 추가한 인형이 지금 추가한 인형과 같은지 확인
                dollStore.pop()
                answer += 1; // 삭제 횟수 추가
            }else {
                dollStore.push(doll);
            }
        }
    })
    return answer * 2; // 인형의 개수 리턴
}

const findDoll = (board, index) => {
    for(let i = 0; i < board.length; i++) {
        if(board[i][index - 1] !== 0) {
            const doll = board[i][index - 1];
            board[i][index - 1] = 0;
            return doll;
        }
    }
}
