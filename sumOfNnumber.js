/*
Program to find sum of first n natural numbers
Last Updated : 19 Apr, 2023
Given a number n, find the sum of the first natural numbers.


 

Examples : 

Input: n = 3
Output: 6
Explanation:
Note that 1 + 2 + 3 = 6

Input  : 5
Output : 15 
Explanation :
Note that 1 + 2 + 3 + 4 + 5 = 15
*/
function sum(n) {
    return n*(n+1)/2
}

console.log(sum(5))