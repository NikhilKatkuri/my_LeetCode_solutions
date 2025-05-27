// Leet code Math question number: 27.

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.


// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    
    let k=0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==val){
            nums[k]=nums[i];
            k++
        }
    }
     return k

};

const testCases = [
    { nums: [3, 2, 2, 3], val: 3 },                        // Expected output: [2, 2]
    { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 },            // Expected output: [0, 1, 3, 0, 4]
    { nums: [1, 1, 1, 1], val: 1 },                        // Expected output: []
    { nums: [4, 5, 6, 7], val: 8 },                        // Expected output: [4, 5, 6, 7]
    { nums: [], val: 0 },                                  // Expected output: []
    { nums: [2, 2, 3, 3, 4, 4], val: 3 },                  // Expected output: [2, 2, 4, 4]
    { nums: [1, 2, 3, 4, 5], val: 5 },                     // Expected output: [1, 2, 3, 4]
    { nums: [7, 7, 7, 7, 7], val: 7 },                     // Expected output: []
    { nums: [0, 1, 0, 1, 0], val: 0 },                     // Expected output: [1, 1]
    { nums: [10, 20, 30, 40, 50], val: 10 },               // Expected output: [20, 30, 40, 50]
];

testCases.forEach(({ nums, val }) => {
    console.log(removeElement(nums, val))
});

