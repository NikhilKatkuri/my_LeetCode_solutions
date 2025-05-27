// Leet code Math question number: 344
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.



// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    if (s == []) return [];

    return s.reverse()


};

const testCases = [
    // Basic cases
    { input: ["h", "e", "l", "l", "o"], expected: ["o", "l", "l", "e", "h"] },
    { input: ["H", "a", "n", "n", "a", "h"], expected: ["h", "a", "n", "n", "a", "H"] },
    { input: ["a"], expected: ["a"] }, // Single character
    { input: [], expected: [] },     // Empty array

    // Even and Odd lengths
    { input: ["1", "2", "3", "4"], expected: ["4", "3", "2", "1"] },
    { input: ["A", "B", "C"], expected: ["C", "B", "A"] },

    // Strings with spaces or special characters
    { input: [" ", "t", "e", "s", "t", " "], expected: [" ", "t", "s", "e", "t", " "] },
    { input: ["!", "@", "#", "$"], expected: ["$", "#", "@", "!"] },

    // Numbers as characters
    { input: ["7", "8", "9", "0", "1", "2", "3"], expected: ["3", "2", "1", "0", "9", "8", "7"] },

    // Longer strings
    { input: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], expected: ["j", "i", "h", "g", "f", "e", "d", "c", "b", "a"] },
    { input: ["L", "o", "n", "g", "S", "t", "r", "i", "n", "g", "T", "e", "s", "t"], expected: ["t", "s", "e", "T", "g", "n", "i", "r", "t", "S", "g", "n", "o", "L"] },


    // Mixed case
    { input: ["M", "i", "X", "e", "D", "c", "A", "s", "E"], expected: ["E", "s", "A", "c", "D", "e", "X", "i", "M"] },

    // Repeating characters
    { input: ["a", "a", "a", "a", "a"], expected: ["a", "a", "a", "a", "a"] }
];

testCases.forEach(e => console.log(reverseString(e.input)))