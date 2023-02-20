function solution(people, limit) {
let answer = 0;
// 몸무게 내림차순으로 재정렬
people = people.sort((a,b) => b - a);
    
for (let i = 0, j = people.length - 1; i <= j; i++,answer++) {
        if (people[i] + people[j] <= limit) j--;
    }
    return answer;
}
