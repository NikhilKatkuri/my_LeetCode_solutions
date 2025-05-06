// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -2^31 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // using Constraints
  const Min = -1 * 2 ** 31;
  const Max = 2 ** 31 - 1;
  // initating absX for absolute value of x
  let absX = Math.abs(x);
  // now converting absX to string. using string methods , by splitting it using split function converts to array then converted to reverse array using reverse function
  // and using join function convert array back to string and passed this value to Number function so , it writtens number.
  absX = Number(absX.toString().split("").reverse().join(""));
  // according to question value out of 32-bit integer is 0 using conditional statement it return true value .
  // (x > 0 ? absX : -1 * absX) using it converted backto +ve ot -ve value of it's acutal sign.
  return absX > Min && absX < Max ? (x > 0 ? absX : -1 * absX) : 0;
};

//  ***** below Test cases are taken from Chatgpt *****

// Array of test cases
const testCases = [
  { input: 123, expected: 321 },
  { input: -123, expected: -321 },
  { input: 120, expected: 21 },
  { input: 0, expected: 0 },
  { input: 1534236469, expected: 0 }, // Overflow case
  { input: 2147483647, expected: 0 }, // Overflow case (max 32-bit signed integer)
  { input: -2147483648, expected: 0 }, // Overflow case (min 32-bit signed integer)
  { input: 100, expected: 1 },
  { input: -100, expected: -1 },
  { input: 9, expected: 9 },
  { input: -9, expected: -9 },
  { input: 1000, expected: 1 },
  { input: 5000, expected: 5 },
  { input: 321, expected: 123 },
  { input: -321, expected: -123 },
];

// Running test cases
testCases.forEach(({ input, expected }) => {
  const result = reverse(input);
  console.log(
    `Input: ${input}, Expected: ${expected}, Result: ${result}, Test Passed: ${result === expected}`
  );
});
