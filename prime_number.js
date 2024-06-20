/*Question: Prime Number Checker
Write a function isPrime(num) that takes an integer num as an argument and returns true if num is a prime number, and false otherwise. Prime numbers are numbers greater than 1 that have no positive divisors other than 1 and themselves. */

const isPrime=(num)=>{
    if (num<=1) {
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if (num%i===0){
            return false
        }
    }
    return true
}


// Test cases
console.log(isPrime(5));  // Output: true (5 is a prime number)
console.log(isPrime(9));  // Output: false (8 is not a prime number