function solution(ingredient) {
  //수도코드
    //i번째 부터 i+3번까지의 문자가 1231이라면
    //문자열을 ''으로 치환하고
    //i의 값을 -3한다.

  let answer = 0;

  ingredient = ingredient.join('');

  for (let i = 0; i < ingredient.length; i++) {
      if (ingredient.slice(i, i + 4) === '1231') {
          count++;
          ingredient.splice(i, 4);
          i -= 3;
      }
  }

  return answer;
}
