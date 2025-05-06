// Leet code Math question number: 67.

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}a
 */
function binaryToDecimal(a) {
    // converting a to array and making reverse using pre-built reverse() function and assigned to array variable
    let array = a.split("").reverse();
    //   iniating sum as 0 
    let sum = 0;
    //   using map function updation each array[] value with value multiplied by power of 2's with it's respective index
    array = array.map((n, i) => (n = n * Math.pow(2, i)));
    //   using forloop iterating 0 to less than array length add and update sum variable
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return Number(sum);
}

function decimalToBinary(a) {

    if (a === 0) return "0";
    // initaling binary as string
    let binary = "";
    while (a > 0) {
        // updating with pre-pend of remainder of a divided by 2
        binary = (a % 2) + binary;
        // Updating a by a / 2 and converting it to an integer using Math.floor()
        a = Math.floor(a / 2);  //  using it we get  the quotient after removing the remainder (a % 2) from a

    }
    return binary;
}

var addBinary = function (a, b) {
    const x = binaryToDecimal(a);
    const y = binaryToDecimal(b);
    const sum = x + y;
    return decimalToBinary(sum);
};

// testcases
const testCases = [
    ["11", "1"], // "100"
    ["1010", "1011"], // "10101"
    ["0", "0"], // "0"
    ["1", "0"], // "1"
    ["0", "1"], // "1"
    ["111", "1"], // "1000"
    ["1", "111"], // "1000"
    ["10", "10"], // "100"
    ["100", "110010"], // "110110"
    ["1111", "1111"], // "11110"
    ["10101", "10101"], // "101010"
    ["100000", "1"], // "100001"
    ["111111", "1"], // "1000000"
    ["110", "1010"], // "10000"
    ["101", "1001"], // "1110"
    ["1001", "1001"], // "10010"
    ["110011", "1011"], // "1000110"
    ["0", "1111111111"], // "1111111111"
    ["1111111111", "1"], // "10000000000"
    ["10000000000", "1"], // "10000000001"
];

// output
testCases.forEach((num) => console.log(addBinary(num[0], num[1])));
