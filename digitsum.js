/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:
12
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 
*/


const addDigits=function(n){
    let digit=0;
    let sum=0;
    
    while (n!=0) {
        digit=n%10;
        sum+=digit;
        n=Math.floor(n/10);
    }
    return sum;
}

console.log(addDigits(38))