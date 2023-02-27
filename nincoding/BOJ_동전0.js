const fs = require('fs');
let [N, ...nums] = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

let money = nums.shift();
nums.reverse();

let count = 0;

for (let i = 0; i < nums.length; i++) {
  if (money < nums[i]) {
    continue;
  } else {
    const value = Math.floor(money / nums[i]);
    money -= value * nums[i];
    count += value;

    if (money === 0) {
      break;
    }
  }
}

console.log(count);
