function solution(today, terms, privacies) {
    // 모든 달은 28일까지 있다고 가정
    // 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return
    let answer = [];
    
    // 1. terms 객체로 변경
    let termsObj = {};
    for(let i = 0; i < terms.length; i++) {
        termsObj[terms[i].split(" ")[0]] = terms[i].split(" ")[1]
    }
    // 2. privacies 배열 길이만큼 for문 돌리기
    for(let i = 0; i < privacies.length; i++) {
        // 3. 약관 종류 찾기
        const type = privacies[i].split(" ")[1]; // ["2021.05.052 A"];
        // 4-1. termsObj에서 약관 종류의 유효 개월 수 찾기, 그리고 28 곱하기, 그리고 더하기
        // 4-2. 찾은 개월 수 28 곱하기 (모든 달은 28일 까지 있다고 가정)
        // 4-3. 개인정보 수집 일자를 '일'로 합산하고 4-2와 더하기
        // 4-4. 오늘 날짜도 '일'로 합산하고 4-3보다 크거나 같다면 파기해야 하는 개인정보 이므로 answer에 index + 1 push
        if (convertDate(today) >= (termsObj[type] * 28) + convertDate(privacies[i].split(" ")[0])) {
            answer.push(i + 1);
        };
    }
    return answer;
}

function convertDate(date) {
    // '2021.05.02';
    const year =  Number(date.split(".")[0]); // 년
    const month = Number(date.split(".")[1]); // 월
    const day = Number(date.split(".")[2]); // 일
    const sum = day + (month * 28) + (year * 12 * 28);
    return sum
}
