// Leet code Math question number: 35.

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let n = [...nums, target];
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            if (n[i] < n[j]) {
                [n[i], n[j]] = [n[j], n[i]]
            }
        }

    }
    let ary = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== n[i + 1]) {
            ary = [...ary, n[i]]
        }
    }
    return ary.indexOf(target);
};
const testCases = [
    { nums: [1, 3, 5, 6], target: 5, expected: 2 },
    { nums: [1, 3, 5, 6], target: 2, expected: 1 },
    { nums: [1, 3, 5, 6], target: 7, expected: 4 },
    { nums: [1, 3, 5, 6], target: 0, expected: 0 },
    { nums: [1, 2, 4, 6, 8, 10], target: 3, expected: 2 },
    { nums: [10, 20, 30, 40, 50], target: 25, expected: 2 },
    { nums: [1], target: 0, expected: 0 },
    { nums: [1], target: 2, expected: 1 },
];

testCases.forEach(e => console.log(searchInsert(e.nums, e.target) === e.expected));
