/*Program to add two fractions
Last Updated : 26 Aug, 2022
Add two fraction a/b and c/d and print answer in simplest form.
Examples : 
 

Input:  1/2 + 3/2
Output: 2/1

Input:  1/3 + 3/9
Output: 2/3

Input:  1/5 + 3/15
Output: 2/5 */
const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const lcm = (a, b) => {
    return Math.abs(a * b) / gcd(a, b);
};

const addFractions = (numerator1, denominator1, numerator2, denominator2) => {
    // Find the Least Common Multiple of the denominators
    const commonDenominator = lcm(denominator1, denominator2);
    
    // Convert fractions to have the common denominator
    const adjustedNumerator1 = numerator1 * (commonDenominator / denominator1);
    const adjustedNumerator2 = numerator2 * (commonDenominator / denominator2);
    
    // Add the numerators
    const resultNumerator = adjustedNumerator1 + adjustedNumerator2;
    
    // Simplify the fraction by dividing by the GCD
    const resultGCD = gcd(resultNumerator, commonDenominator);
    
    const simplifiedNumerator = resultNumerator / resultGCD;
    const simplifiedDenominator = commonDenominator / resultGCD;
    
    // Return the result as a string
    return `${simplifiedNumerator}/${simplifiedDenominator}`;
};

// Test cases
console.log(addFractions(1, 2, 3, 2));  // Output: 2/1
console.log(addFractions(1, 3, 3, 9));  // Output: 2/3
console.log(addFractions(1, 5, 3, 15)); // Output: 2/5
