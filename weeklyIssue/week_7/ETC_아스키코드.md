<h2 id='1'>📌 아스키 코드 ASCII</h2>



> **미국정보교환표준부호(American Standard Code for Information Interchange) 줄여서 ASCII는 영문 알파벳을 사용하는 대표적인 문자 인코딩입니다.**

아스키는 컴퓨터와 통신 장비를 비롯한 문자를 사용하는 많은 장치에서 사용되며, 대부분의 문자 인코딩이 아스키에 기초를 두고 있습니다.

![](https://velog.velcdn.com/images/ninto_2/post/21f1cb16-286d-4303-85dc-6f6af343b92b/image.png)



아스키는 7비트 인코딩으로, 33개의 출력 불가능한 제어 문자들과 공백을 비롯한 95개의 출력 가능한 문자들로 총 128개로 이루어져 있습니다.


이 중 가장 대표적으로 많이 사용하는 **숫자, 대문자, 소문자, 공백 아스키 코드**는 알아두면 상당히 유용합니다.

자바스크립트에서 아스키코드를 사용하기 위해선, 

아스키코드로 변환하는 `charCodeAt()`과 아스키코드를 문자로 변환하는 `String.fromCharCode()`을 사용하면 됩니다.

<br>

<h3 id='1.1'>🔗 숫자 아스키코드 0~9까지</h3>

> 숫자 : (0)**48** ~ (9)**57** (10개)

```js
const arr = [0,1,2,3,4,5,6,7,8,9];

// 문자타입을 아스키코드로 변환 가능
const askii = arr.map((v) => String(v).charCodeAt());

console.log(askii); // [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]


// 문자타입으로 변환되어 나옴
const askiiStr = askii.map((v) => String.fromCharCode(v));

console.log(askiiStr); // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


// 아스키코드를 이용해서 0-9까지의 배열 만들기
const arr = Array.from({length:10}, (v, i) => {
	return v = String.fromCharCode(i + 48)
});

console.log(arr); // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

<br>

<h3 id='1.2'>🔗 영어 대문자 아스키코드 A~Z까지</h3>

> 대문자 영어 : (A)**65** ~ (Z)**90**까지 (26개)

```js
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// 문자타입을 아스키코드로 변환 가능
const askii = arr.map((v) => v.charCodeAt());

console.log(askii); // [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]

askii.length; // 26

// 아스키코드를 문자타입으로 변환시키기
const askiiStr = askii.map((v) => String.fromCharCode(v));

console.log(askiiStr); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


// 아스키코드를 이용해서 A-Z까지의 대문자 배열 만들기
const arr = Array.from({length:26}, (v, i) => {
	return v = String.fromCharCode(i + 65)
});

console.log(arr); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

```

<br>

<h3 id='1.3'>🔗 영어 소문자 아스키코드 a~z까지</h3>

> 소문자 영어 : (a)**97** ~ (z)**122**까지 (26개)

```js
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// 문자타입을 아스키코드로 변환 가능
const askii = arr.map((v) => v.charCodeAt());

console.log(askii); // [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]

askii.length; // 26

// 아스키코드를 문자타입으로 변환시키기
const askiiStr = askii.map((v) => String.fromCharCode(v));

console.log(askiiStr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// 아스키코드를 이용해서 A-Z까지의 대문자 배열 만들기
const arr = Array.from({length:26}, (v, i) => {
	return v = String.fromCharCode(i + 97)
});

console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

```

<br>


<h3 id='1.4'>🔗 공백(space) 아스키코드</h3>

> 공백 : **32**

```js
const space = ' ';

space.charCodeAt(); // 32
String.fromCharCode(32); // ' '
```

<br>

---

<h2 id='2'>📌 아스키코드 활용문제 </h2>

![](https://velog.velcdn.com/images/ninto_2/post/c0406434-7f91-495a-bd81-53383139776f/image.png)

```js
function solution(word) {
  
  const askiiNum = [], askiiStr = [];
  
  
  for (let i = 0; i < word.length; i++) {
    askiiNum.push(word.charCodeAt(i)); // [73, 32, 108, 111, 118, 101, 32, 121, 111, 117]
  }
  
  
  for (let i = 0; i < askiiNum.length; i++) {
    
    if (askiiNum[i] >= 65 && askiiNum[i] <= 90) {
      askiiStr.push(String.fromCharCode(155 - askiiNum[i]));
      
    } else if (askiiNum[i] >= 97 && askiiNum[i] <= 122) {
      askiiStr.push(String.fromCharCode(219 - askiiNum[i]));
      
    } else {
      askiiStr.push(String.fromCharCode(askiiNum[i]));
    }
  }
  return askiiStr.join("");
}
```

<br>

**[프로그래머스 시저암호](https://school.programmers.co.kr/learn/courses/30/lessons/12926)**

![](https://velog.velcdn.com/images/ninto_2/post/4c1671d3-dba8-4f3b-8a94-1d6f03c65d4f/image.png)


```js
function solution(s, n) {
  let result = "";
  
  for (let i = 0; i < s.length; i++) {
    // 반복문을 통해 아스키코드로 변환
    let charCode = s.charCodeAt(i);
    
    // 공백일때 문자에 공백으로 추가
    if (charCode === 32) result += String.fromCharCode(charCode);
    
    // 공백이 아닌 문자인 경우 대문자와 소문자 구분
    else {
 
      if (charCode <= 90) {
        charCode += n;
        // 대문자인데 이동 후 아스키코드값이 90(Z)보다 크다면
        if (charCode > 90) charCode -= 26;
      }
     
      else {
        charCode += n;
        // 소문자인데 이동 후 아스키코드값이 122(z)보다 크다면
        if (charCode > 122) charCode -= 26;
      }
      
      // 변경된 아스키코드를 모두 문자로 변환 후 추가하기
      result += String.fromCharCode(charCode);
    }
  }
  
  return result;
}
```
