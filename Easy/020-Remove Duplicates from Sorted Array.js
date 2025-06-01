// Leet code Math question number: 26

// ***  note: test cases take from Gemini ai ***

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    if (!Array.isArray(nums) || nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};


const testCases = [
    // 1. Empty array
    {
        nums: [],
        expectedLength: 0,
        expectedArrayPrefix: []
    },
    // 2. Single element array
    {
        nums: [1],
        expectedLength: 1,
        expectedArrayPrefix: [1]
    },
    // 3. Array with no duplicates
    {
        nums: [1, 2, 3, 4, 5],
        expectedLength: 5,
        expectedArrayPrefix: [1, 2, 3, 4, 5]
    },
    // 4. Array with all duplicates
    {
        nums: [1, 1, 1, 1, 1],
        expectedLength: 1,
        expectedArrayPrefix: [1]
    },
    // 5. Duplicates at the beginning
    {
        nums: [1, 1, 2, 3],
        expectedLength: 3,
        expectedArrayPrefix: [1, 2, 3]
    },
    // 6. Duplicates in the middle
    {
        nums: [1, 2, 2, 3, 4],
        expectedLength: 4,
        expectedArrayPrefix: [1, 2, 3, 4]
    },
    // 7. Duplicates at the end
    {
        nums: [1, 2, 3, 3, 3],
        expectedLength: 3,
        expectedArrayPrefix: [1, 2, 3]
    },
    // 8. Multiple groups of duplicates
    {
        nums: [1, 1, 2, 2, 3, 3],
        expectedLength: 3,
        expectedArrayPrefix: [1, 2, 3]
    },
    // 9. Mixed duplicates and unique elements
    {
        nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
        expectedLength: 5,
        expectedArrayPrefix: [0, 1, 2, 3, 4]
    },
    // 10. Array with negative numbers
    {
        nums: [-3, -3, -2, -1, -1, 0, 0, 0, 1, 1],
        expectedLength: 5,
        expectedArrayPrefix: [-3, -2, -1, 0, 1]
    },
    // 11. Array with zero and positive numbers
    {
        nums: [0, 0, 1, 2, 2, 3, 4, 4, 4],
        expectedLength: 5,
        expectedArrayPrefix: [0, 1, 2, 3, 4]
    },
    // 12. Longer array with various duplicates
    {
        nums: [10, 10, 10, 20, 20, 30, 40, 40, 40, 50, 60],
        expectedLength: 6,
        expectedArrayPrefix: [10, 20, 30, 40, 50, 60]
    },
    // 13. All elements unique, larger range
    {
        nums: [100, 200, 300, 400, 500, 600, 700],
        expectedLength: 7,
        expectedArrayPrefix: [100, 200, 300, 400, 500, 600, 700]
    },
    // 14. Array with only two unique elements
    {
        nums: [5, 5, 5, 5, 5, 5, 5, 8, 8, 8, 8],
        expectedLength: 2,
        expectedArrayPrefix: [5, 8]
    },
    // 15. Array with mixed positive and negative numbers
    {
        nums: [-5, -5, -4, -3, -3, 0, 1, 1, 2, 2, 2],
        expectedLength: 6,
        expectedArrayPrefix: [-5, -4, -3, 0, 1, 2]
    },
    // 16. Just two elements, both duplicates
    {
        nums: [7, 7],
        expectedLength: 1,
        expectedArrayPrefix: [7]
    },
    // 17. Just two elements, unique
    {
        nums: [7, 8],
        expectedLength: 2,
        expectedArrayPrefix: [7, 8]
    },
    // 18. Longer array with all elements same except last one
    {
        nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        expectedLength: 2,
        expectedArrayPrefix: [1, 2]
    },
    // 19. Longer array with all elements same except first one
    {
        nums: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        expectedLength: 2,
        expectedArrayPrefix: [1, 2]
    },
    // 20. Array with a slightly larger range of numbers
    {
        nums: [1000, 1000, 1001, 1002, 1002, 1003],
        expectedLength: 4,
        expectedArrayPrefix: [1000, 1001, 1002, 1003]
    }
];




testCases.forEach((test, index) => {
    // Create a deep copy of the input array because `removeDuplicates` modifies in-place
    const numsCopy = [...test.nums];
    const newLength = removeDuplicates(numsCopy);

    // Check if the returned length is correct
    const lengthPassed = newLength === test.expectedLength;

    // Check if the array content up to the new length is correct
    // Slice numsCopy to compare only the relevant part
    const arrayContentPassed = JSON.stringify(numsCopy.slice(0, newLength)) === JSON.stringify(test.expectedArrayPrefix);

    const overallPassed = lengthPassed && arrayContentPassed;

    console.log(`Test Case ${index + 1}: ${overallPassed ? 'PASSED' : 'FAILED'}`);
    if (!overallPassed) {
        console.log("  Input array:", test.nums);
        console.log("  Expected Length:", test.expectedLength);
        console.log("  Got Length:", newLength);
        console.log("  Expected Array Prefix:", test.expectedArrayPrefix);
        console.log("  Got Array Prefix:", numsCopy.slice(0, newLength));
        console.log("  Full Array After Mod:", numsCopy); // Show full modified array for debugging
    }
});

