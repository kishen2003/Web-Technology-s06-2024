// a. Check if an input is a Date object
function isDate(input) {
    return input instanceof Date && !isNaN(input.valueOf());
}

// b. Get the last day of a month
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// c. Get the maximum date from an array of dates
function getMaxDate(dates) {
    return new Date(Math.max.apply(null, dates.map(date => new Date(date))));
}

// d. Convert a number from one base to another
function convertBase(number, fromBase, toBase) {
    return parseInt(number, fromBase).toString(toBase);
}

// e. Check if an input year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usages
console.log("a. isDate:");
console.log(isDate(new Date())); // true
console.log(isDate("2021-01-01")); // false

console.log("b. getLastDayOfMonth:");
console.log(getLastDayOfMonth(2024, 0)); // 31
console.log(getLastDayOfMonth(2024, 1)); // 29

console.log("c. getMaxDate:");
const dates = ["2023-07-23", "2024-01-15", "2022-05-12"];
console.log(getMaxDate(dates)); // 2024-01-15T00:00:00.000Z

console.log("d. convertBase:");
console.log(convertBase("A", 16, 2)); // "1010"
console.log(convertBase("1010", 2, 16)); // "a"

console.log("e. isLeapYear:");
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
