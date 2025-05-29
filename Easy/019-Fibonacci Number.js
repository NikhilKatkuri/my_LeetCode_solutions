// Leet code Math question number: 509

// he Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).



// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// Constraints:

// 0 <= n <= 30

/**
 * @param {number} n
 * @return {number}
 */



var fib = function (n) { 
    if (n === 2 || n === 3) return n - 1;
    function f(m) {
        if (m === 0 || m === 1) return m;
        return f(m - 1) + f(m - 2);
    }

    return f(n);
};

const testCases = [
    // 1. Base cases
    { n: 0, expected: 0 },
    { n: 1, expected: 1 },

    // 2. Small positive integers
    { n: 2, expected: 1 }, // F(2) = F(1) + F(0) = 1 + 0 = 1
    { n: 3, expected: 2 }, // F(3) = F(2) + F(1) = 1 + 1 = 2
    { n: 4, expected: 3 }, // F(4) = F(3) + F(2) = 2 + 1 = 3
    { n: 5, expected: 5 }, // F(5) = F(4) + F(3) = 3 + 2 = 5
    { n: 6, expected: 8 }, // F(6) = F(5) + F(4) = 5 + 3 = 8
    { n: 7, expected: 13 },// F(7) = F(6) + F(5) = 8 + 5 = 13
    { n: 8, expected: 21 },// F(8) = F(7) + F(6) = 13 + 8 = 21

    { n: 10, expected: 55 },
    { n: 15, expected: 610 },
    { n: 20, expected: 6765 },
    { n: 25, expected: 75025 },
    { n: 30, expected: 832040 },
    { n: 35, expected: 9227465 },
    { n: 40, expected: 102334155 },

   
];



testCases.forEach((test, index) => {
    const result = fib(test.n);
    const passed = result === test.expected;
    console.log(`Test Case ${index + 1} (n=${test.n}): ${passed ? 'PASSED' : 'FAILED'}`);
    if (!passed) {
        console.log(`  Expected: ${test.expected}`);
        console.log(`  Got:      ${result}`);
    }
});
