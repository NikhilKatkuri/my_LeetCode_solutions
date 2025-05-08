// Leet code Math question number: 415.

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0; // to add >9  number to next number 
    let res = "";


    while (i >= 0 || j >= 0) {
        let n1 = i >= 0 ? +num1[i] : 0; // i>=0 flase assigned 0 to n1
        let n2 = j >= 0 ? +num2[j] : 0; // j>=0 flase assigned 0 to n2
        let sum = n1 + n2 + carry;
        res = (sum % 10) + res; // sum % 10 give starting digit eg:"12" 12%10 -> 2 
        carry = Math.floor(sum / 10); // gives last digit eg:"12" 12/10 -> 1.2  converted to decimal that is 1
        i--;
        j--;
    }
    return res;
};

[
    ["11", "123"],
    ["11", "1"],
    ["125", "123"],
].forEach((n) => console.log(addStrings(n[0], n[1])));
