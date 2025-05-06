// Leet code Math question number: 69.

// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
    // x is 0 or 1 returns the x
    if (x === 0 || x === 1)
        return x;
    // iterate loop form 1 to x 
    for (let i = 1; i <= x; i++) {
        // defined sq for  sqaure of i for better readability
        const sq = i * i;
        // if sq is equal to x returns sqaure root of x , that is i.
        if (sq === x) {
            return i;
        }
        // if sq is greater than x , then it return i-1 because i-1 to i in between these non-perfect square root lies.
        else if (sq > x) {
            return i - 1
        }
    }
};

// array of test numbes
const testNumbers = [
    0, 1, 2, 3, 4, 5, 9, 10, 15, 16,
    24, 25, 26, 35, 36, 37, 48, 49, 50,
    63, 64, 65, 80, 81, 82, 98, 99, 100, 101,
    120, 121, 122, 999, 1000, 1023, 1024, 1025,
    4095, 4096, 4097, 10000, 12345, 65535, 65536,
    99999, 100000, 2147483647
];

// output
testNumbers.forEach(n => console.log(`sqrt of ${n} is : ` + mySqrt(n)));

