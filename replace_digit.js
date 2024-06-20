/*
Replace all ‘0’ with ‘5’ in an input Integer
Last Updated : 25 Apr, 2023
Given an integer as input and replace all the ‘0’ with ‘5’ in the integer. 

Examples: 

Input: 102 
Output: 152
Explanation: All the digits which are '0' is replaced by '5' 

Input: 1020 
Output: 1525
Explanation: All the digits which are '0' is replaced by '5'
The use of an array to store all digits is not allowed.
*/
const changeDigit = (n) => {
    let digit = 0;
    let num = 0;
    let pow = 0;

   
    if (n === 0) {
        return 5;
    }

    while (n !== 0) {
        digit = n % 10;
        if (digit === 0) {
            digit = 5;
        }
        num += digit * 10 ** pow;
        n = Math.floor(n / 10);
        pow++;
    }
    return num;
};

// Test cases
console.log(changeDigit(102));   // Output: 152
console.log(changeDigit(1020));  // Output: 1525
console.log(changeDigit(0));     // Output: 5
