# 문제
- XYZ마트는 10일 동안 멤버십을 부여하는데 이 때 10일동안 하루에 한 가지 제품을 할인하는 행사를 한다.
- 할인하는 물품은 최대 1개만 구매 가능하다.
- 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원 가입을 할 때 최대 몇 가지의 경우의 수가 있는지 출력
- 만일 한 번도 맞지 않는다면 0을 출력


## 입출력 예시
|want<br/>(원하는 제품)|number<br/>(원하는 제품의 수량)|discount<br/>(매장 할인 리스트)|결과|
|:--:|:--:|:--:|:--:|
|["banana", "apple", "rice", "pork", "pot"]|[3, 2, 2, 2, 1]|["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]|3|
|["apple"]|[10]|["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]|0|


## 의사 코드
- `countArr` : 10일 안에 다 사야되니까 매장 할인 리스트를 10개씩 짜른다.
- `want` : 배열의 요소 하나씩 기준으로 `countArr`와 비교하여 몇 개 인지 확인한다.
- 만일 원하는 제품의 수량보다 적을 경우 반복문의 break를 걸어 반복문을 종료하고, 원하는 제품의 count값을 초기화 해주고, `countArr`의 초기 값을 1씩 증가 시켜준다.



## 코드 
```js
function solution(want, number, discount) {
    let answer = 0; //출력값
    let slice = 0 // slice 기준값 지정
    let countArr = discount.slice(slice,slice+10)  //할인 제품 10개 배열
    let countNumber = [...number] // 수량 초기화 값
    let i = 0
    let sum = 0 // 원하는 제품의 총 수량
    for(let i of number){
        sum += i
    }
    
    //want의 배열보다 countArr의 값이 더 작을 경우 무조건 false이다.
    while(want.length <= countArr.length){ 
        // 총 수량의 갯수보다 countArr가 작을 경우 무조건 수량 부족이니까 반복문을 종료해준다.
        if(sum > countArr.length) break
        // countArr와 want의 요소가 같다면 countNumber을 1씩 빼준다.
        for(let j = 0; j < countArr.length ; j++){
            if(countArr[j] === want[i]) countNumber[i]--
        }
      
      // countNumber가 0보다 클 경우 수량이 부족하니까 전부 초기화를 시켜주고, slice의 값을
	  // 1 더하여 그 다음 요소부터의 10개를 짤라준다.
	 //i를 초기화하여 비교 대상의 초기값도 초기화 시켜준다.
        if(countNumber[i] > 0){
            countNumber = [...number]
            slice++
            countArr = discount.slice(slice, slice+10)
            i = 0
        }
        
      // 위의 if문에 걸리지 않고 i가 마지막 요소일 경우 원하는 제품을 모두 구매 할 수 있기 때문에
      // 다시 초기화 시켜주고, 출력 값인 answer에 1을 더해준다.
        else if (i === want.length-1){
            countNumber = [...number]
            slice++
            countArr = discount.slice(slice, slice+10)
            i = 0
            answer++
        }
        
      // 원하는 제품들의 비교를 아직 진행하고 있을 때 i++
        else i++
   
    }
    
    return answer;
}
```


