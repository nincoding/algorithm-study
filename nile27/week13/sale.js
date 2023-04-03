/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127
 * feat(PGS): LV2_할인행사
 */

function solution(want, number, discount) {
    let answer = 0;
    let slice = 0
    let countArr = discount.slice(slice,slice+10) 
    let countNumber = [...number]
    let i = 0
    let sum = 0
    for(let i of number){
        sum += i
    }


    while(want.length <= countArr.length){
        
        if(sum > countArr.length) break
        
        for(let j = 0; j < countArr.length ; j++){
            if(countArr[j] === want[i]) countNumber[i]--
        }
        if(countNumber[i] > 0){
            countNumber = [...number]
            slice++
            countArr = discount.slice(slice, slice+10)
            i = 0
        }
        
        else if (i === want.length-1){
            countNumber = [...number]
            slice++
            countArr = discount.slice(slice, slice+10)
            i = 0
            answer++
        }
        
        else i++

    }

    return answer;
}