// Leet code Math question number: 58.


// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    // trims leading space from the string
    let str = s.trim();
    // using split function splitting the space and it become array
    str = str.split(' ');
    // length of array
    const length = str.length;
    // returns the lenght last positon of string in array
    return str[length - 1].length;
};


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));