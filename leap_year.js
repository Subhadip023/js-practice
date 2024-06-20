/*A leap year is a year that contains an additional day, February 29th, making it 366 days long instead of the usual 365 days. Leap years are necessary to keep our calendar in alignment with the Earth’s revolutions around the Sun.

A year is a leap year if the following conditions are satisfied: 

1. The year is multiple of 400.
2. The year is a multiple of 4 and not a multiple of 100.*/

const leapYear=(year)=>{
    if (year%400===0) {
        return `${year } is a leap Year`
    }
    else if (year%100!==0 && year%4===0) {
        return `${year} is a leap Year`
    }
    else{
        return `${year} is not  a leap Year`
  
    }
}


// Test cases
console.log(leapYear(2200)); // Output: 2200 is not a leap year
console.log(leapYear(2020)); // Output: 2020 is a leap year
console.log(leapYear(2000)); // Output: 2000 is a leap year
console.log(leapYear(1900)); // Output: 1900 is not a leap year