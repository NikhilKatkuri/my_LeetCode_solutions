// Leet code Math question number: 2535.
// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

/**
 * @param {number[]} nums
 * @return {number}
 */

var differenceOfSum = function (nums) {
    let elementSum = 0;
    let digitSum = 0;
    elementSum = nums.reduce((a, b) => a + b)
    digitSum = nums.join('').split('').map(Number).reduce((a, b) => (a + b));
    return Math.abs(elementSum - digitSum);
};

const testCases = [
    [1, 15, 6, 3],
    [1, 2, 3, 4],
    [3, 2, 2, 3],
]

testCases.forEach(n => console.log(differenceOfSum(n)));