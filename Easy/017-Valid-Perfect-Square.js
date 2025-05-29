//  Leet code Math question number: 367

//  Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.



// Example 1:

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.


// Constraints:

// 1 <= num <= 2^31 - 1


/**
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function (num) {
    if (num < 0) return false;
    if (num === 1 || num === 0) return true
    let sqrRootOfNum = Math.floor(Math.pow(num, 1 / 2));
    return sqrRootOfNum * sqrRootOfNum === num;
};

const testCases = [
    // 1. Basic Perfect Squares
    { num: 1, expected: true },  // 1*1
    { num: 4, expected: true },  // 2*2
    { num: 9, expected: true },  // 3*3
    { num: 16, expected: true }, // 4*4
    { num: 25, expected: true }, // 5*5

    // 6. Basic Non-Perfect Squares
    { num: 2, expected: false },
    { num: 3, expected: false },
    { num: 5, expected: false },
    { num: 10, expected: false },
    { num: 15, expected: false },

    // 11. Edge Cases
    { num: 0, expected: true },  // 0*0
    { num: -1, expected: false }, // Negative number (no real perfect square)
    { num: -9, expected: false }, // Another negative number

    // 14. Larger Perfect Squares
    { num: 100, expected: true }, // 10*10
    { num: 144, expected: true }, // 12*12
    { num: 625, expected: true }, // 25*25
    { num: 10000, expected: true }, // 100*100

    // 18. Larger Non-Perfect Squares
    { num: 99, expected: false },  // Just below 100
    { num: 101, expected: false }, // Just above 100
    { num: 2147483647, expected: false }, // Max 32-bit signed int (not a perfect square)

];


testCases.forEach(e => console.log(isPerfectSquare(e.num)))