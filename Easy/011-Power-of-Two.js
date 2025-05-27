// Leet code Math question number: 27.

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.



// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

//  Constraints:

// -231 <= n <= 231 - 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
   if (n < 1) return false;
    
    while (n % 2 === 0) {
        n /= 2;
    }

    return n === 1;

};


const testCases = [2, 4, 12, 16, 19, 32, 64, 1024, 256, 984]

testCases.forEach(n => console.log(isPowerOfTwo(n)))


 

//  replace  n%2 ===0 by n%m ===0 & n/=2  by n/=m where m is 1-any integer number