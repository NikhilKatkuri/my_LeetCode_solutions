// Leet code Math question number: 405

// Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.



// Example 1:

// Input: num = 26
// Output: "1a"
// Example 2:

// Input: num = -1
// Output: "ffffffff"


// Constraints:

// -231 <= num <= 231 - 1


/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num === 0) return "0";
    const hexaCodes = "0123456789abcdef";
    let res = "";
    num = num >>> 0;
    while (num) {
        let rem = num % 16;
        res = hexaCodes[rem] + res;
        num = Math.floor(num / 16);
    }
    return res;
};

const testCases = [
    // --- Basic Positive Conversions ---
    { num: 0, expected: "0" },
    { num: 1, expected: "1" },
    { num: 9, expected: "9" },
    { num: 10, expected: "a" },
    { num: 15, expected: "f" },

    // --- Two-Digit Hex Conversions ---
    { num: 16, expected: "10" },
    { num: 255, expected: "ff" },

    // --- Multi-Digit Hex Conversions ---
    { num: 256, expected: "100" },
    { num: 257, expected: "101" },
    { num: 4095, expected: "fff" },  // 16^3 - 1
    { num: 4096, expected: "1000" }, // 16^3
    { num: 65535, expected: "ffff" }, // 16^4 - 1
    { num: 65536, expected: "10000" },// 16^4
    { num: 12345, expected: "3039" },
    { num: 987654321, expected: "3ade68b1" },

    // --- Negative Numbers (32-bit Two's Complement) ---
    // Note: JavaScript numbers are 64-bit floats, but bitwise operations
    // treat them as 32-bit signed integers.
    // -1 in 32-bit two's complement is all ones.
    { num: -1, expected: "ffffffff" },
    // -10 in 32-bit two's complement.
    // 10 is 0000...1010. Invert: 1111...0101. Add 1: 1111...0110.
    { num: -10, expected: "fffffff6" },
    // -256 in 32-bit two's complement.
    // 256 is 0000...0001 0000 0000. Invert: 1111...1110 1111 1111. Add 1: 1111...1111 0000 0000.
    { num: -256, expected: "ffffff00" },
    // Minimum 32-bit signed integer (-2^31)
    { num: -2147483648, expected: "80000000" }, // Min Int32
    // Maximum 32-bit signed integer (2^31 - 1)
    { num: 2147483647, expected: "7fffffff" }
];

testCases.forEach((e, index) => console.log(toHex(e.num) === e.expected ? true : e.num))