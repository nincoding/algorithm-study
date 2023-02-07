날짜 메서드가 항상 어렵고, 날짜 관련 문제는 잘 못 풀어서 이번 문제로 날짜 메서드를 정리하면서 뿌셔보자는 생각으로 풀어봤습니다 👊🏻 \
(..근데 그냥 제가 뿌셔진 것 같아요...)

# 자바스크립트에서 날짜 계산하는 다양한 방법

> [참고] 어느 지역 기준으로 시간대가 설정되어 있는지 확인하는 코드

```javascript
let 기준지역 = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(기준지역); // Asia/Seoul
```

## 🗓 문자형 날짜 → Date 객체로 변환

```javascript
let date1 = "2023-02-06";
let date2 = "2023-02-07";
let date3 = "2023.02.08";

let date2Ary = date2.split("-"); // ['2023', '02', '07']
let date3Ary = date3.split("."); // ['2023', '02', '08']

date1 = new Date(date1);
date2 = new Date(date2Ary[0], date2Ary[1] - 1, date2Ary[2]);
date3 = new Date(date3Ary[0], date3Ary[1] - 1, date3Ary[2]);

console.log(date1.toLocaleString()); // 2/6/2023, 9:00:00 AM
console.log(date2.toLocaleString()); // 2/7/2023, 12:00:00 AM
console.log(date3.toLocaleString()); // 2/8/2023, 12:00:00 AM
```

`new Date()` : 년, 월은 필수, 나머지는 옵션

- 아규먼트를 전달하지 않으면 현재 날짜와 시간 인스턴스 객체를 반환한다.
- 숫자 타입을 전달하면 1970년 1월 1일 00:00(UTC)을 기점으로 밀리초만큼 경과한 날짜와 시간 인스턴스 객체를 반환한다.
  - 단, 월이 0(= 1월) ~ 11(=12월)로 표현되므로 -1을 해줘야 한다.
- 문자열을 전달하면 지정된 날짜와 시간 인스턴스 객체를 반환한다.
  - 단, 문자열이 Date.parse 메소드에 의해 해석 가능한 형식이어야 한다.
  ```javascript
  let date4 = new Date("12/15/1999 05:25:30");
  let date5 = new Date("December 15, 1999 05:25:30");
  let date6 = new Date("Dec 15 1999 05:25:30");
  ```
- new 없이 호출할 경우 문자열을 반환한다.
  - Date.prototype 메서드를 사용할 수 없다.
  ```javascript
  let date7 = Date();
  console.log(typeof date7); // string
  console.log(date7); // Tue Feb 07 2023 21:56:57 GMT+0900 (Korean Standard Time)
  date7.getDay(); // TypeError: date4.getDay is not a function
  ```

## 🗓 년(year) 더하고 빼기

```javascript
/* 1년 더하기 */
date1.setFullYear(date1.getFullYear() + 1);
console.log(date1.toLocaleString()); // 2/6/2024, 9:00:00 AM

/* 1년 빼기 */
date2.setFullYear(date2.getFullYear() - 1);
console.log(date2.toLocaleString()); // 2/7/2022, 12:00:00 AM
```

`getFullYear()` 년도를 나타내는 4자리 숫자를 반환/설정한다. \
`setFullYear()` 년도는 필수 옵션으로 월, 일도 설정 가능하다.

## 🗓 월(month) 더하고 빼기

```javascript
/* 1개월 더하기 */
date1.setMonth(date1.getMonth() + 1);
console.log(date1.toLocaleString()); // 3/6/2024, 9:00:00 AM

/* 1개월 빼기 */
date2.setMonth(date2.getMonth() - 1);
console.log(date2.toLocaleString()); // 1/7/2022, 12:00:00 AM
```

`getMonth()` 월을 나타내는 0 ~ 11의 정수를 반환/설정한다. \
`setMonth()` 월은 필수 옵션으로 일도 설정 가능하다.

## 🗓 일(day) 더하고 빼기

```javascript
/* 1일 더하기 */
date1.setDate(date1.getDate() + 1);
console.log(date1.toLocaleString()); // 3/7/2024, 9:00:00 AM

/* 1일 빼기 */
date2.setDate(date2.getDate() - 1);
console.log(date2.toLocaleString()); // 1/6/2022, 12:00:00 AM
```

`getDate()` `setDate()` 날짜(1 ~ 31)를 나타내는 정수를 반환/설정한다.

| 요일   | 일요일 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 | 토요일 |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| 반환값 | 0      | 1      | 2      | 3      | 4      | 5      | 6      |

`getDay()` 요일(0 ~ 6)를 나타내는 정수를 반환한다.

- **setDay** 는 없다.

## 📆 월의 마지막 날짜 찾기

```javascript
let lastDay = new Date(2024, 2, 0);
console.log(lastDay.toLocaleString()); // 2/29/2024, 12:00:00 AM
```

음수(-1, -2 ...)를 입력하면 전 달의 마지막날의 1일 전, 2일 전... 을 확인할 수 있다.

## 📆 31일이 넘어가는 월 계산

```javascript
function addMonth(date, month) {
  // month달 후의 1일
  let addMonthFirstDate = new Date(
    date.getFullYear(),
    date.getMonth() + month,
    1
  );

  // month달 후의 말일
  let addMonthLastDate = new Date(
    addMonthFirstDate.getFullYear(),
    addMonthFirstDate.getMonth() + 1,
    0
  );

  // 계산한 달의 마지막 날짜가 기준 날짜보다 작으면 그 달의 마지막 날짜 반환
  let result = addMonthFirstDate;
  if (date.getDate() > addMonthLastDate.getDate()) {
    result.setDate(addMonthLastDate.getDate());
  } else {
    result.setDate(date.getDate());
  }
  return result;
}

// 3월 31일의 11개월 후
let date1 = new Date("2023-03-31");
let monthLater = addMonth(date1, 11);
console.log(monthLater.toLocaleString()); // 2/29/2024, 12:00:00 AM
```

---

## 문제 설명

개인정보가 담긴 약관의 유효기간(계약 시점 + 약관에 정해진 개월 수)이 오늘 날짜와 같거나 오늘 날짜보다 이전인 경우 파기해야합니다.
파기해야 할 약관의 번호(1번부터 시작)가 담긴 배열을 리턴하세요.

## 제한 사항

- today는 "YYYY.MM.DD" 형태로 오늘 날짜를 나타냅니다.
- 1 ≤ terms의 길이 ≤ 20
  - terms 배열에서 약관 종류는 중복되지 않습니다.
  - 유효기간은 개인정보를 보관할 수 있는 달 수를 나타내는 정수이며, 1 이상 100 이하입니다/
- 1 ≤ privacies의 길이 ≤ 100
  - today 이전의 날짜만 주어집니다.
  - 월과 달이 한 자릿 수인 경우 앞에 0이 붙습니다.
  - 모든 월은 28일 입니다.
- 파기해야 할 개인정보가 하나 이상 존재하는 입력만 주어집니다.

## 입출력 예

| today        | terms                  | privacies                                                                        | result    |
| ------------ | ---------------------- | -------------------------------------------------------------------------------- | --------- |
| "2022.05.19" | ["A 6", "B 12", "C 3"] | ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]                 | [1, 3]    |
| "2020.01.01" | ["Z 3", "D 5"]         | ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"] | [1, 4, 5] |

## 풀이

1. 데이터가 String으로 주어져서 활용이 어려우니 형변환 필요한데... 어떻게?
2. **today** : 날짜끼리 비교 >, < 가 가능하니, string으로 주어진 날짜를 Date 객체로 변환해 비교해야겠다.
3. **terms** : terms 배열에서의 약관의 종류와 privacies 에서의 약관의 종류를 비교해야하니, 꺼내기 쉽도록 String → 중첩배열로 분리시키기
4. **privacies** : 중첩배열로 분리 + String → Date 객체로 변환 둘 다 하기
5. privacies 중첩 배열을 돌면서 약관 종류가 같으면, 계약 날짜에 약관의 개월수 더한 날짜 계산
6. 유효기간 (계약날짜 + 약관의 개월 수) 과 현재 날짜 비교 해서 현재 날짜와 같거나 지났으면(더 작으면) answer에 (요소의 인덱스 번호 + 1) 추가

```javascript
function solution(today, terms, privacies) {
  const todayAry = today.split(".");
  let current = new Date(todayAry[0], todayAry[1] - 1, todayAry[2]);
  // current : 현재 날짜 2022-05-19

  let termsAry = terms.map((el, i) => {
    return (terms[i] = el.split(" "));
  });
  // termsAry : 배열 [ [ 'A', '6' ], [ 'B', '12' ], [ 'C', '3' ] ]

  let privaciesAry = privacies.map((el, i) => {
    return (privacies[i] = el.split(" "));
  });

  privaciesAry.forEach((element) => {
    let pastAry = element[0].split(".");
    let past = new Date(pastAry[0], pastAry[1] - 1, pastAry[2]);
    element[0] = past;
  });
  // privaciesAry : 날짜 배열 [ [ '2021-05-02', 'A' ],  [ '2021-07-01', 'B' ], ...]

  let answer = [];
  privacies.forEach((pr, i) => {
    termsAry.forEach((te) => {
      if (pr[1] === te[0]) {
        let pastMonth = pr[0].getMonth();
        let contractMonth = te[1];
        // 월 더하기, 숫자로 안바꾸고 그냥 더하면 엄청 큰 수가 나옴
        let newMonth = Number(pastMonth) + Number(contractMonth);
        // 더한 개월수로 바꾸기
        pr[0].setMonth(newMonth);

        if (current >= pr[0]) {
          answer.push(i + 1);
        }
      }
    });
  });

  return answer;
}

let result = solution(
  "2022.05.19",
  ["A 6", "B 12", "C 3"],
  ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
);
console.log(result); // [1, 3]

result = solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
  ]
);
console.log(result); // [1, 4, 5]
```

## 다른 풀이

모든 월이 28일이니, 구조분해할당을 활용하여 일(day) 수를 계산하면, \
복잡하게 Date 객체를 사용하지 않아도 간단하게 비교할 수 있다.

```javascript
function solution(today, terms, privacies) {
  let answer = [];

  // 오늘 날짜를 일(day) 수로 바꿈
  let [year, month, date] = today.split(".").map(Number); // [year = 2022, month = 5, date = 19]
  let todates = year * 12 * 28 + month * 28 + date; // 679551

  // 약관을 객체로 만듦 {A: 6, B: 12, C: 3}
  let t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });

  // 날짜를 일(day)수로 바꾸고, 약관의 프로퍼티 네임으로 개월 수 호출하여 더함
  privacies.forEach((e, i) => {
    let [day, term] = e.split(" "); // [day = 2021.05.02, term = A ], 
    day = day.split(".").map(Number);
    let dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;

    // 오늘 날짜보다 작은 경우 번호(인덱스 + 1) 추가
    if (dates <= todates) answer.push(i + 1);
  });

  return answer;
}
```
