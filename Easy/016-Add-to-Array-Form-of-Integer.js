// Leet code Math question number: 989

// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.



// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021


// Constraints:

// 1 <= num.length <= 104
// 0 <= num[i] <= 9
// num does not contain any leading zeros except for the zero itself.
// 1 <= k <= 104

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let res = [];
    let i = num.length - 1;
    let carry = k;

    while (i >= 0 || carry > 0) {
        if (i >= 0) carry += num[i--];
        res = [...res, (carry % 10)]
        carry = Math.floor(carry / 10);
    }
    res.reverse();

    return res
};

const testCases = [
    {
        num: [1, 2, 0, 0],
        k: 34,
        expected: [1, 2, 3, 4]
    },
    {
        num: [2, 1, 5],
        k: 8,
        expected: [2, 2, 3]
    },
    {
        num: [9, 9, 9],
        k: 1,
        expected: [1, 0, 0, 0]
    },
    {
        num: [1, 2],
        k: 987,
        expected: [9, 9, 9]
    },
    {
        num: [0],
        k: 123,
        expected: [1, 2, 3]
    },
    {
        num: [5],
        k: 7,
        expected: [1, 2]
    },
    {
        num: [3],
        k: 99,
        expected: [1, 0, 2]
    },
    {
        num: [1, 2, 3, 4, 5],
        k: 0,
        expected: [1, 2, 3, 4, 5]
    },
    {
        num: [0],
        k: 0,
        expected: [0]
    },
    {
        num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        k: 111,
        expected: [1, 2, 3, 4, 5, 6, 9, 0, 0]
    },
    {
        num: [9, 9, 9, 9, 9, 9, 9],
        k: 2,
        expected: [1, 0, 0, 0, 0, 0, 0, 1]
    },
    {
        num: [5, 0],
        k: 950,
        expected: [1, 0, 0, 0]
    },
    {
        num: [1],
        k: 1000,
        expected: [1, 0, 0, 1]
    },
    {
        num: [0, 0, 0, 0, 0],
        k: 54321,
        expected: [5, 4, 3, 2, 1]
    },
    {
        num: [1, 0, 9],
        k: 2,
        expected: [1, 1, 1]
    },
    {
        num: [1, 2, 3],
        k: 70,
        expected: [1, 9, 3]
    },
    {
        num: [1, 2, 0],
        k: 30,
        expected: [1, 5, 0]
    },
    {
        num: [7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        k: 1234567890,
        expected: [7, 9, 0, 3, 5, 8, 0, 2, 4, 6, 7, 9]
    },
    {
        num: [0, 0, 1, 2],
        k: 5,
        expected: [1, 7]
    },
    {
        num: [1, 9, 9, 9],
        k: 25,
        expected: [2, 0, 2, 4]
    }
];

// testCases.forEach((test, index) => {
//     const result = addToArrayForm(test.num, test.k);
//     const passed = JSON.stringify(result) === JSON.stringify(test.expected);
//     console.log(`Test Case ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
//     if (!passed) {
//         console.log(`  Input num: ${test.num}, k: ${test.k}`);
//         console.log(`  Expected:  ${test.expected}`);
//         console.log(`  Got:       ${result}`);
//     }
// });

testCases.forEach(e => console.log(addToArrayForm(e.num, e.k)))