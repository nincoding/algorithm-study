function solution(n) {
  //일단 중복제거해줘야하는군
  //Set은 신이야 
  //배열로 리턴해야하는데 set은 객체로 리턴해버리니 배열로만들어주자
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
}
