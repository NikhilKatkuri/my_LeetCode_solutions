//  Leet code Math question number: 283

//  Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j+=1;
        }

    }
    while (j < nums.length) {
        nums[j] = 0;
        j+=1;
    }
    return nums;
};

const testCases = [
    // 1. Basic case: Zeros in the middle
    {
        input: [0, 1, 0, 3, 12],
        expected: [1, 3, 12, 0, 0]
    },
    // 2. All zeros
    {
        input: [0, 0, 0, 0, 0],
        expected: [0, 0, 0, 0, 0]
    },
    // 3. No zeros
    {
        input: [1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4, 5]
    },
    // 4. Zeros at the beginning
    {
        input: [0, 0, 1, 2, 3],
        expected: [1, 2, 3, 0, 0]
    },
    // 5. Zeros at the end
    {
        input: [1, 2, 3, 0, 0],
        expected: [1, 2, 3, 0, 0]
    },
    // 6. Single element - zero
    {
        input: [0],
        expected: [0]
    },
    // 7. Single element - non-zero
    {
        input: [5],
        expected: [5]
    },
    // 8. Empty array
    {
        input: [],
        expected: []
    },
    // 9. Two elements - zero, non-zero
    {
        input: [0, 7],
        expected: [7, 0]
    },
    // 10. Two elements - non-zero, zero
    {
        input: [7, 0],
        expected: [7, 0]
    },
    // 11. Mixed zeros and non-zeros
    {
        input: [4, 0, 2, 0, 5, 0, 1],
        expected: [4, 2, 5, 1, 0, 0, 0]
    },
    // 12. Array with consecutive zeros
    {
        input: [1, 2, 0, 0, 0, 3, 4],
        expected: [1, 2, 3, 4, 0, 0, 0]
    },
    // 13. Array with alternating zeros
    {
        input: [0, 1, 0, 2, 0, 3, 0],
        expected: [1, 2, 3, 0, 0, 0, 0]
    },
    // 14. Long array with few zeros
    {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    },
    // 15. Long array with many zeros
    {
        input: [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    // 16. Zeros interspersed with identical non-zero values
    {
        input: [5, 0, 5, 0, 5, 0, 5],
        expected: [5, 5, 5, 5, 0, 0, 0]
    },
    // 17. Zeros at the beginning and end, and middle
    {
        input: [0, 1, 2, 0, 3, 4, 0],
        expected: [1, 2, 3, 4, 0, 0, 0]
    },
    // 18. Array of a moderate length with mixed values
    {
        input: [0, 1, 2, 3, 0, 4, 5, 0, 6, 7, 8, 0, 9, 0, 10],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0]
    },
    // 19. All non-zero values are identical
    {
        input: [0, 7, 0, 7, 0, 7, 0, 7],
        expected: [7, 7, 7, 7, 0, 0, 0, 0]
    },
    // 20. Large array with zeros scattered
    {
        input: [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
];

testCases.forEach(a => console.log(moveZeroes(a.input)));