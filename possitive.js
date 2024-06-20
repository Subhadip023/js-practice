// JavaScript Code to check if a number is
// Positive, Negative, Odd, Even, Zero
// Using if...else if...else

const positive_and_even=(num)=>{

if (num > 0) {
	console.log("Positive number");
} else if (num === 0) {
	console.log("Zero");
} else {
	console.log("Negative number");
}

// Checking for odd and even
if (num % 2 === 0) {
	console.log(`${num} is Even`);
} else {
	console.log(`${num} is Odd`);
}

}

positive_and_even(5)