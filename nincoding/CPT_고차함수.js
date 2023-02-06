/*
17번.수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 **새로운**
 배열을 리턴해야 합니다.
  - 변수를 만들 필요가 없다면 그대로 값을 리턴한다. (메모리 효율성)
  - 코드를 작성할때 불필요한 주석은 제거해주는 편이 좋다.
  - 불필요한 console.log도 제거해주자.
 */

function checkEvenOrNot(arr) {
  return arr.map((v) => {
    if(v % 2 !== 0 || v === 0) return 'no';
    if(v % 2 === 0) return 'ok';
  })
}

/*
*19번.개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 이름 전체를 요소로 갖는 배열을 리턴해야 합니다.
* - 문자열을 리턴할때 하드코딩보단 템플릿 리터럴을 활용한다.
*/

function getFullNames(arr) {
  return arr.map((v) => {
   return `${v.firstName} ${v.lastName}`;
  })
}

/*
20번.객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 배열의 각 요소를 제곱한 **새로운**
 배열을 리턴해야 합니다.
*/

function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  if(Array.isArray(obj[property])) return obj[property].map((v) => square(v));
  return [];
}


/*
21번.개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴해야 합니다.
*/

function getOnlyAllowedToDrink(arr) {
  return arr.map((v) => {
    if(v.age >= 18) return v.name;
  }).filter((v) => v !== undefined);
}

// **21번 리팩토링**


function getOnlyAllowedToDrink(arr) {
	const result = [];
  arr.forEach((v) => v.age >= 18 && result.push(v.name));
	return result;
}
/*
굳이 return을 사용하지 않고 반복문 역할이 필요할 땐 map보단 forEach를 사용한다.
새로운 값을 담아낼 빈배열을 변수에 만들고 forEach안에서 push해준다.
조건문을 줄일땐 단축평가를 사용해서 앞에가 참이라면 뒤에가 실행되게 만들어준다.
*/


/*
22번.영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴해야 합니다.
*/

function classicMovies(arr, year) {
  return arr.map((v) => {
    if(v.year < year) return `${v.title} by ${v.director}`
  }).filter((v) => v !== undefined);
}

/*
*22번 리팩토링 단축평가 사용과 if문 사용- 단축평가를 사용하면 if문을 대체할 수 있다.
*/

function classicMovies(arr, year) {
	const result = [];
  arr.forEach(v => v.year < year && result.push(`${v.title} by ${v.director}`));
	return result;
}

function classicMovies(arr, year) {
  const result = [];
  arr.forEach((v) => {
    if(v.year < year) result.push(`${v.title} by ${v.director}`);
  })
  return result;
}
/*
굳이 return을 사용하지 않고 반복문 역할이 필요할 땐 map보단 forEach를 사용한다.
새로운 값을 담아낼 빈배열을 변수에 만들고 forEach안에서 push해준다.
조건문을 줄일땐 단축평가를 사용해서 앞에가 참이라면 뒤에가 실행되게 만들어준다.
forEach는 undefined를 걸러주지만, map은 undefined가 생겨도 그대로 리턴시킨다.
*/


/*
23번.`number`타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.
*/

function computeSumOfAllElements(arr) {
  if(arr.length === 0) return 0;
  return arr.reduce((acc, v) => acc + v);
}

// **23번 리팩토링** 

function computeSumOfAllElements(arr) {
  return arr.reduce((acc, v) => acc + v, 0);
}
//reduce의 특성을 활용해서 초기값 설정을 0으로 받아주면 빈배열일 경우 0을 return 시킬수있다.


/*
24번.`number`타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 곱을 리턴해야 합니다.
*/

function computeProductOfAllElements(arr) {
  if(arr.length === 0) return 1;
  return arr.reduce((acc, v) => acc * v);
}

//**24번 리팩토링** 

function computeSumOfAllElements(arr) {
  return arr.reduce((acc, v) => acc * v, 1);
}
/*
reduce의 특성을 활용해서 초기값 설정을 1으로 받아주면 빈배열일 경우 1을 return 시킬수있다.
곱을 연산할시에 초기값이 0이면 무조건 0이 나오므로 1로 설정해줘야한다.
*/


/*
25번.`number`
 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴해야 합니다.
*/

function computeAverageOfNumbers(arr) {
  if(arr.length === 0) return 0;
  return arr.reduce((acc, v) => acc + v) / arr.length;
}

//**25번 리팩토링** 

function computeAverageOfNumbers(arr) {
  return arr.length !== 0 ? arr.reduce((acc, v) => acc + v, 0) / arr.length : 0;
}
//삼항연산자를 사용해 한줄로 줄일 수 있지만, 가독성은 if문으로 분리하는편이 더 좋은 것 같다.


/*
26번.객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다.
*/

function calculateScore(records, value) {
  if(records.length === 0) return 0;

  const arr = records.map((v) => {
    if(v.animal === value) return v.score;
    if(v.animal !== value) return 0;
  }).filter((v) => v !== undefined);
  
  return arr.reduce((acc, v) => acc + v);
}

//**26번 리팩토링**

function calculateScore(records, value) {
  return records.reduce((acc, v) => {
    if(v.animal === value) return acc + v.score;
    return acc;
  }, 0)
}
//reduce 만을 사용해서 불필요한 반복을 줄이고 코드도 깔끔하게 줄일 수 있다.


/*
27번.문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.
*/

function getLongestElement(arr) {
  if(arr.length === 0) return '';
  let len = arr.map((v) => v.length); // 3, 3, 5
  let maxLen = Math.max(...len); // 5
  let index = len.indexOf(maxLen);
  return arr[index];
}

//리팩토링 - rudece만을 사용해서 누적된 true값을 리턴시키고 초기값을 ''열로 설정해서 비교할 수 있다.

function getLongestElement(arr) {
  return arr.reduce((acc, v) => {
    if(acc.length >= v.length) return acc;
    return v;
  }, '');
}


/*
28번.문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴해야 합니다.
*/

function getLengthOfLongestElement(arr) {
  if(arr.length === 0) return 0;
  let len = arr.map((v) => v.length);
  return Math.max(...len);
}

//리팩토링 - rudece 만을 사용하여 길이를 비교할땐 acc와 curr의 순회되는 값의 타입에 유의해야 한다.

function getLengthOfLongestElement(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => {
    if (acc.length > curr.length) return acc;
    return curr;
  }).length
}


/*
29번.2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.
* - 2차원 배열을 합칠땐 flat을 사용하는것이 좋지만 해당 문제해선 제한했기에 concat을 사용한다.
*/

function joinArrayOfArrays(arr) {
  return arr.reduce((acc, v) => acc.concat(v));
}

/*
30번.배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.
*/

function findShortestWord(arr) {
  if(arr.length === 0) return '';
  const str = arr.filter((v) => typeof v === 'string');
  const strLen = str.map((v) => v.length);
  const index = strLen.indexOf(Math.min(...strLen));
  if(str[index] === undefined) return '';
  return str[index];
}

//30번 리팩토링 - 많은 반복을 할필요없이 reduce안에서 조건문으로 return이 가능하다.

function findShortestWord(arr) {
  return arr.reduce((acc, curr) => {
    if (typeof curr !== 'string') return acc;
    if (acc === '') return curr;
    if(acc.length > curr.length) return curr;
    return acc;
  }, '');
}

/*
31번.학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.
1) 남학생들의 정보는 리턴하는 배열에서 제외합니다.
2) `'grades'` 속성값은 평균값(`number` 타입)으로 바꿉니다.
*/

function studentReports(students) {
  const female = students.filter((v) => v.gender === 'female');
  return female.map((v) => {
    let sum = v.grades.reduce((acc, v) => acc + v);
 
    v.grades = sum / v.grades.length;  
    return v;
  })
}

//리팩토링 - 복사를 할때 원본값이 변경되지 않도록 주의해야한다. 객체의 원본을 변형하지않고 새로운 객체로 리턴해준다.

function studentReports(students) {
  return students.filter((person) => person.gender === 'female')
    .map((obj) => {
    const sum = obj.grades.reduce((acc, v) => acc + v) / obj.grades.length;
    return {
      ...obj,
      grades : sum,
    };
  })
}

/*
32번.2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(`number`)의 합을 리턴해야 합니다.
*/

function sumOfArraysInArray(arr) {
  let nums =  arr.map((v) => {
    return v.filter((i) => typeof i === 'number');
  }).reduce((acc, v) => acc.concat(v));
  if(nums.length === 0) return 0;
  return nums.reduce((acc, v) => acc + v);
}

//리팩토링 - flat을 사용하며 2차원배열을 합치고 rudece한번으로 해결이 가능하다.

function sumOfArraysInArray(arr) {
  return arr
    .flat()
    .reduce((acc, v) => {
      if(typeof v !== 'number') return acc;
      return acc + v;
    }, 0)
}
