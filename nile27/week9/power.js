/**
 * feat : 분할계산 _ power
 */

function power(base, exponent) {
  let ans = 1

  if (exponent === 0) return 1

  if(exponent % 2 === 0){
    let half = power(base ,(exponent / 2)) % 94906249
    return (half * half) % 94906249
  }

  else{
    let half = power (base , (exponent-1)/2)% 94906249
    return (((half * half) % 94906249 )* base)  % 94906249
  }

}
