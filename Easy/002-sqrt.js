// Leet code Math question number: 9.

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    // initating num variable for converting x to string then to array
    let num;
    // checks if x is -ve, if -ve return false, because -ve number cannot be palindrome
    if (x < 0) {
        /*
                a logic to convert -ve number to an array
                * num = (-1 * x).toString().split('');
                * num[0] = "-" + num[0];
                */
        return false;
    }
    // if x  is +ve.now x can be an palindrome if condition satisfies.
    else {
        // convert x to string, then string to array using pre-built function split, and stored in num variable.
        num = x.toString().split("");
    }
    // Total length of array
    const TotalLength = num.length;
    // using for loop it iterates from 0 to  half of TotalLength(logically less than TotalLenght) mid is always same both cases (odd or even).
    for (let i = 0; i < TotalLength / 2; i++) {
        // checking half(from first )  is same as half(from ending). if not equals return false
        if (num[i] !== num[TotalLength - i - 1]) {
            return false;
        }
    }
    // if condition satisfies then return true.
    return true;
};

// test case
const testCases = [
    121, // Positive palindrome
    -121, // Negative number (not palindrome due to '-')
    10, // Ends with zero but not zero itself
    0, // Single zero is a palindrome
    1, // Single digit numbers are palindromic
    22, // Two-digit palindrome
    12321, // Odd number of digits
    123321, // Even number of digits
    1234321, // Larger odd-digit palindrome
    123, // Not a palindrome
    111, // All digits same
    -101, // Negative number
    100, // Leading zero in reverse form would be omitted
    909, // Palindrome with zero in the middle
    914, // Similar digits but not palindrome
    1221, // Even digit palindrome
    1231, // Close but not the same reversed
    1001, // Palindrome with zeros in the middle
    101, // Palindrome with odd number of digits
    1331, // Another even-digit palindrome
];

// output
console.log(`Testcase for ${testCases} \n\n`)
testCases.forEach((num, i) =>
    console.log(`Test Case ${i + 1} ` + isPalindrome(num))
);
