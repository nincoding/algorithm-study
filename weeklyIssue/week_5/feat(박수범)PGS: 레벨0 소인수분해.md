# 프로그래머스_lv0_소인수분해
<br/>

- **문제 설명**<br/>
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
- **제한사항**<br/>
2 ≤ n ≤ 10,000

- **수도코드**<br/>
  1.n이 primeF로 나누어지면 primeF를 배열에 넣는다.
  2.primeF로 나누어 지지 않는다면 primeF+1으로 나누어본다.
  3.나누어질 때 까지  primeF +=1을 한다.
  4.소인수들을 요소로 가지는 divsor에서 중복을 없애준다.
  5.set 이용.
  6.배열로 리턴해야하기 때문에 Array.from으로 감싸주어 배열로 리턴한다.

<br/>

```
function solution(n) {
  //n이 primeF로 나누어지면 primeF를 배열에 넣는다.
  //primeF로 나누어 지지 않는다면 primeF+1으로 나누어본다.
  //나누어질 때 까지  primeF +=1을 한다.
  //소인수들을 요소로 가지는 divsor에서 중복을 없애준다.
  //set 이용.
  //배열로 리턴해야하기 때문에 Array.from으로 감싸주어 배열로 리턴한다.
 const divsor = []
 let primeF = 2  // primeF의 초기값은 2
   while(n !== 1)
       if(n%primeF === 0){ // primeF가 n의 약수라면
           divsor.push(primeF) // 배열에 넣어준다.
           n/=primeF // n을 primeF로 나눠준값을 n에 재할당한다.  
       }else { // primeF가 n의 약수가아니라면
           primeF +=1 // primeF가 n의 약수가 아니라면, 약수를 찾아사 떠난다. 1더해준다.
       }
    return Array.from(new Set(divsor))
```

- **시행착오**<br/>
    - 중복제거를 위해서 요즘 set을 너무 애용하는데, 너무 얕게 배우고 쓰는 것 같아 찝찝했다.
    - 위와 같은 이유로 '중복제거'라는 역할에만 집중하여 set이 어떤 식으로 리턴되는지 몰랐다.
    - 리턴 new Set(divsor)를 하니 빈객체가 반환되어 놀랐다.
    - Array.from은 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드이니까 이걸로 배열 만들어서 리턴했더니 됐다.
  
