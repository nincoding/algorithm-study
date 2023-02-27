function solution(nums) {
    let limitPockets = nums.length / 2;
    let setPockets = new Set(nums);
    return setPockets.size < limitPockets ? setPockets.size : limitPockets;
}
