// Leet code Math question number: 258.

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

// Constraints:

// 0 <= num <= 231 - 1Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

// Constraints:

// 0 <= num <= 231 - 1

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    // converting num to string to make it as array of string and join "+" for adding digits num it passed to pre-built eval function which slove and return number
    let n = eval(num.toString().split("").join("+"));
    // if n> 9 it becomes 2 digits we need add that digits again
    if(n>9){
        // recursive call
        return addDigits(n)
    }
    return n;
};

[38, 0, 12].forEach((n) => console.log(addDigits(n)));
