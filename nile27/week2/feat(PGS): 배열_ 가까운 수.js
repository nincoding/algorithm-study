/** 가까운 수 (누적 합)
 * LV.0
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 *  input/output
 * array = [3,10,28] n = 20 result = 28
 */
function solution(array, n) {
    let ans = 0
    let min = 100
    let arr = array.sort()

    for (i of arr){
        let forMin = n - i
        if(forMin <0) {forMin = forMin * (-1)}
        
        if(forMin < min){
            ans = i
            min = forMin
        }
    }

    return ans

}

console.log(solution[3,10,28])
