// Leet code Math question number: 50.

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).


// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25


// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */


var myPow = function (x, n) {
  //  initating multiplier = 1
  let multiplier = 1;
  // using Math.abs function it converts -ve number to +ve number  or returns absolute value of n
  const absN = Math.abs(n);
  // using iteration from 0 absolute of n multiplying multiplier by x to get power of n with respect to base x
  for (let i = 0; i < absN; i++) {
    multiplier *= x;
  }
  // using shorthand property , if n > 0 assign multiplier to ans , else assign  1/multiplier to ans
  const ans = n > 0 ? multiplier : (1 / multiplier);
  return ans;
};

// testCases
const testCases = [
  [2, 10],      // 1024
  [2.1, 3],     // ~9.261
  [2, -2],      // 0.25
  [0, 5],       // 0
  [5, 0],       // 1
  [1, 1000],    // 1
  [-1, 1001],   // -1
  [-1, 1000],   // 1
  [2, 1],       // 2
  [2, -1],      // 0.5
  [10, 2],      // 100
  [3, 3],       // 27
  [5, -3],      // 0.008
  [0.5, 2],     // 0.25
  [0.5, -2],    // 4
  [100, 0],     // 1
  [2, 30],      // 1073741824
  [1.00001, 123456], // ~3.43684 (large exponent)
  [2, 31],      // 2147483648
  [2, -2147483648] // very small (~0)
];

// output
testCases.forEach((num) => {
  console.log(myPow(num[0], num[1]))
});