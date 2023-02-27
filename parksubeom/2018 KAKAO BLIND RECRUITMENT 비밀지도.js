//function solution(n, arr1, arr2) {

    //1차풀이  
    //2중포문을 돌려서 두배열의 i번째 요소를 비트연산자로 비교하여 나온값을 2진수로 바꾼다.
    //2진수 값을 내부 반복문에 넣고 2진수의[x]번째 인덱스가 1이면 '#' 0이면 " "을 빈배열에 푸쉬해준다.
    //n이 6이 들어 올 경우에 테스트케이스가 통과하지않았다.
    //상은님과 디버깅을 해보니, 비트연산자를 통해 나온 값을 이진수로 만들면 , 자릿수가 n자릿수로 나오지 않고 제각각으로나옴.    
   /*let result3 =[]
    for(let i =0; i<n;i++){
        let result = (arr1[i] | arr2[i]).toString(2)
        // result에는 arr1 과 arr2의 요소들을 비트연산자로 비교한 값을 이진수로 바꾼값이 들어간다
        // 여기서 result값은 111111 
        let result2 =[] // 출력값도 배열이기 때문에 배열선언
        for(let x=0;x<result.length;x++){  // <<< x값 0으로하면 테스트2 통과 왜안하는지아시는분 ㅠㅠㅠ
            if(result[x] === '1') //1이면 #을 넣어주고
                result2.push('#') 
            else {
                result2.push(' ') // 조건을 만족 안하면 ' ' 푸쉬
           }
        }
        result3.push(result2.join(''))
    }  return result3 */ 
    //=======================================================================//
    //2차풀이
    //이진수의 자릿수가 n자릿수가 되도록 0을 붙여준다.
function solution(n, arr1, arr2) {
    let result3 =[]
    for(let i =0; i<n;i++){
        let result = (arr1[i] | arr2[i]).toString(2)
        while(result.length !== n){
            result = "0" + result
        }
        let result2 =[] 
        for(let x=0;x<result.length;x++){  
            if(result[x] === '1') 
                result2.push('#') 
            else {
                result2.push(' ') 
           }
        
        }result3.push(result2.join(''))  
     }  return result3 
    }
    
