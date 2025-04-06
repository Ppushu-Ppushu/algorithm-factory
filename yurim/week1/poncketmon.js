function solution(nums) {
    const differentNums = new Set(nums);
    const nums_length = nums.length;

    const pickableNumber = nums_length / 2;
    let answer = 0;

    if(pickableNumber >= differentNums.size) {
        return differentNums.size;
    }

    // pickableNumber < differentNums.
    else return pickableNumber;
}