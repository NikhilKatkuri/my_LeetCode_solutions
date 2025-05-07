// Leet code Math question number: 168.

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.


// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...


// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"


// Constraints:

// 1 <= columnNumber <= 231 - 1


/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let cn = columnNumber;  // copy of parameter
    let res = ""; // initilaized a string
    // loop til cn becomes 0
    while (cn > 0) {
        cn--; // decrementing 1 because char index we need from 0-25 like base-26 system
        res = String.fromCharCode(cn % 26 + 65) + res;
        cn = Math.floor(cn / 26);
    }
    return res;
};


[1, 28, 701, 345, 12].forEach(n => console.log(convertToTitle(n)));