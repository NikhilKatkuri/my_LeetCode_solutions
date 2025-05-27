// Leet code Math question number: 28

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// 1 <= haystack.length, needle.length <= 104

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // if (!haystack.includes(needle)) return -1;
    return haystack.search(needle);
};

const testcases = [
    { haystack: "sadbutsad", needle: "sad" },
    { haystack: "leetcode", needle: "leeto" },
    { haystack: "hello", needle: "ll" },
    { haystack: "aaaaa", needle: "bba" },
    { haystack: "mississippi", needle: "issip" },
    { haystack: "abc", needle: "c" },
    { haystack: "abracadabra", needle: "cad" },
    { haystack: "aaaaab", needle: "aab" },
    { haystack: "programmingisawesome", needle: "isawesome" },
    { haystack: "apple", needle: "app" },
    { haystack: "banana", needle: "nan" },
    { haystack: "octopus", needle: "pus" },
    { haystack: "testingisfun", needle: "fun" },
    { haystack: "zzzaaccc", needle: "aac" },
    { haystack: "abcdefghijklmnopqrstuvwxyz", needle: "xyz" },
    { haystack: "thequickbrownfox", needle: "quick" },
    { haystack: "supercalifragilisticexpialidocious", needle: "fragi" },
    { haystack: "a", needle: "a" },
    { haystack: "longstringwithmanywords", needle: "words" },
    { haystack: "thisisatest", needle: "notfound" }
];

testcases.forEach(a => console.log(strStr(a.haystack, a.needle)));