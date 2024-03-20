function isLeapYear(year) {
    // Check if the year is divisible by 400
    if (year % 400 === 0) {
        return true;
    }
    // Check if the year is divisible by 100
    else if (year % 100 === 0) {
        return false;
    }
    // Check if the year is divisible by 4
    else if (year % 4 === 0) {
        return true;
    }
    // If none of the above conditions are met, it's not a leap year
    else {
        return false;
    }
}

// Test cases
console.log(isLeapYear(2000));  // Output: true
console.log(isLeapYear(1900));  // Output: false
console.log(isLeapYear(2024));  // Output: true
console.log(isLeapYear(2100));  // Output: false
console.log(isLeapYear(2400));  // Output: true
console.log(isLeapYear(2023));  // Output: false
