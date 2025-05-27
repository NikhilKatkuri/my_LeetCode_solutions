// Leet code Math question number: 66.

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {


    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] < 10) {
            return digits;
        }

        digits[i] = 0;
    }
      
    return [1,...digits] ;
};


console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([1, 2, 9, 1, 2, 9]));
console.log(plusOne([1, 9, 9, 9, 9, 9]));
console.log(plusOne([9, 9, 9, 9, 9, 9]));
console.log(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));