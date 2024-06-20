/*Find all factors of a Natural Number in sorted order
Given a natural number n, print all distinct divisors of it.

Examples: 

 Input : n = 10       
 Output: 1 2 5 10

 Input:  n = 100
 Output: 1 2 4 5 10 20 25 50 100

 Input:  n = 125
 Output: 1 5 25 125 
 
 */

// const factors=(n)=>{
//     let factors=[1];
//     for(let i=2;i<=n/2;i++){
//         if(n%i===0){
//             factors.push(i)
//         }
//     }
//     factors.push(n)
//     return factors
// }
const factors = (n) => {
    let factors = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            if (i !== n / i) { 
                factors.push(n / i);
            }
        }
    }
    
    // Sort the factors array to ensure the factors are in sorted order
    factors.sort((a, b) => a - b);
    
    return factors;
}



console.log(factors(16))