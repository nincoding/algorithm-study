function solution(denum1, num1, denum2, num2) {
    //?? 왜 갑자기 분수 계산이 생각이안나지
    //분모 * 분모 / (분자1 * 분모2) + (분자2 * 분모1)
    //num1*num2 / (denum1*num2) + (denum2*num1)
    //근데 기약분수로 나타내야 한다.   
 /* var answer = [(denum1*num2)+(denum2*num1),(num1*num2)];   
    if(answer[0]%2 ===0){ // 분자가 나누어 지는 수면
        return answer.map(x => x / 2); // 2로 나눠줘라 
    }     
    return answer;
    //테스트케이스만 통과하지 다른 값이 들어오면 에러가 날 단편적인 코드.
    //answer[] 값으로 [58,12]가 나오면 틀린값이 된다.
}*/
 //-------------------------------------------------------------------- 
    //1. 입력받은 분수를 덧셈해준다
    //2. 덧셈해서 나온 분수를 기약분수로 나눠준다 => 최대공약수로 나누어준다.
    let topNum = (denum1*num2)+(denum2*num1) // 분모의 덧셈 결과 값
    let botNum = num1*num2 // 분자의 덧셈 결과 값
    let maxdiv = 1 // 최대공약수
    
    for(let i = 1; i <= topNum; i++){ // 분모를 돌면서
        if(topNum%i === 0 && botNum%i === 0){ //분모와 분자 모두 나누어떨어지는 수 = 공약수, 반복문을 돌면서 가장 마지막에 할당 된 값 = 최대공약수
            maxdiv = i // maxdiv에 그 i값을 할당해준다.
            
        }
    }return [topNum/maxdiv, botNum/maxdiv] // 분자와 분모를 최대공약수로 나누어서 배열에 담아 return한다.
}
