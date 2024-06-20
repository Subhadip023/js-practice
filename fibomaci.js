/*Nth Fibonacci Number
Last Updated : 03 Oct, 2023
Given a number n, print n-th Fibonacci Number. 

The Fibonacci numbers are the numbers in the following integer sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..

Input  : n = 1

Output : 1

Input  : n = 9

Output : 34

Input  : n = 10

Output : 55
*/

const fibonacci=(n)=>{
   let output=[0,1]
    for(let i=2;i<=n;i++){
        output[i]=output[i-1]+output[i-2];
    }
    return output[n]
}

console.log(fibonacci(3))