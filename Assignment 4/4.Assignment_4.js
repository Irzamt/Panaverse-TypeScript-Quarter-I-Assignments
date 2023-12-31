"use strict";
// 1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse using functions.
/******************************************************************************************************************* */
function celToFar(tempInCelsius) {
    let celsiusToFahrenheit = tempInCelsius * (9 / 5) + 32;
    return `Temperature in Celsius: ${tempInCelsius}\nTemperature in Fahrenheit: ${celsiusToFahrenheit}`;
}
function farToCel(tempInFahrenheit) {
    let fahrenheitToCelsius = (5 / 9) * (tempInFahrenheit - 32);
    return `Temperature in Fahrenheit: ${tempInFahrenheit}\nTemperature in Celsius: ${fahrenheitToCelsius}`;
}
console.log(celToFar(0));
console.log(farToCel(0));
/******************************************************************************************************************* */
// 2 - Write a program that calculates the percentage using functions.
/******************************************************************************************* */
function percentCalculator(obtainedMarks, totalMarks) {
    let percentage = Math.round((obtainedMarks / totalMarks) * 100);
    return percentage;
}
let student1 = percentCalculator(750, 1100);
console.log(`Percentage of Student 1: ${student1}`);
let student2 = percentCalculator(939, 1100);
console.log(`Percentageof Student 2: ${student2}`);
/******************************************************************************************************************* */
// 3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days using functions.
/******************************************************************************************* */
function daysCal(numOfDays) {
    let numOfWeeks = Math.floor(numOfDays / 7);
    let numOfRemainingDays = numOfDays % 7;
    return `There are ${numOfWeeks} weeks and ${numOfRemainingDays} Days in ${numOfDays} Days!!`;
}
let test1 = daysCal(57);
console.log(test1);
/******************************************************************************************************************* */
// 4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount using functions.
/******************************************************************************************* */
function discCal(productPrice) {
    let tenPercentDisc = productPrice - (productPrice / 10);
    let fivePercentDisc = productPrice - (productPrice / 5);
    if (productPrice > 100) {
        console.log(`You get 10% discount on this Product\nOriginal Price: $${productPrice}\nDiscounted Price: $${tenPercentDisc}`);
    }
    else {
        console.log(`You get 5% discount on this Product\nOriginal Price: $${productPrice}\nDiscounted Price: $${fivePercentDisc}`);
    }
}
discCal(185);
/******************************************************************************************************************* */
// 5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult" using functions. 
/******************************************************************************************* */
function ageCal(age) {
    if (age > 0 && age <= 12) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(ageCal(25));
/******************************************************************************************************************* */
// 6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather using functions.
/******************************************************************************************* */
function tempCal(temp) {
    if (temp >= 40) {
        console.log("You should wear shorts!");
    }
    else if (temp >= 30) {
        console.log("You should waear full sleeves");
    }
    else if (temp >= 20) {
        console.log("You should wear loose shirts");
    }
    else if (temp >= 10) {
        console.log("You should wear warm clothes");
    }
    else {
        console.log("You should wear multiple layers and jacket!!");
    }
}
let temp1 = tempCal(65);
/******************************************************************************************************************* */
// 7  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly using functions.
/******************************************************************************************* */
function numCal(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(`${num} is divisible by both 3 and 5!`);
    }
    else if (num % 3 == 0) {
        console.log(`${num} is divisible by 3 only!`);
    }
    else if (num % 5 == 0) {
        console.log(`${num} is divisible by 5 only!`);
    }
    else {
        console.log(`${num} is not divisible by 3 or 5`);
    }
    return num;
}
numCal(99);
/******************************************************************************************************************* */
// 8 - Write a program that checks if the given year is leap year or not using functions.
/******************************************************************************************* */
function leapYear(year) {
    let isLeap = "Leap Year";
    let isNotLeap = "Not Leap Year";
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return isLeap;
            }
            else {
                return isNotLeap;
            }
        }
        else {
            return isLeap;
        }
    }
    else {
        return isNotLeap;
    }
}
let leap1 = leapYear(2024);
console.log(leap1);
let leap2 = leapYear(2025);
console.log(leap2);
/******************************************************************************************************************* */
// 9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name using functions.
/******************************************************************************************* */
function weekDayName(weekDay) {
    if (weekDay == 1) {
        console.log("Today is Monday");
    }
    else if (weekDay == 2) {
        console.log("Today is Tuesday");
    }
    else if (weekDay == 3) {
        console.log("Today is Wednesday");
    }
    else if (weekDay == 4) {
        console.log("Today is Thursday");
    }
    else if (weekDay == 5) {
        console.log("Today is Friday");
    }
    else if (weekDay == 6) {
        console.log("Today is Saturday");
    }
    else if (weekDay == 7) {
        console.log("Today is Sunday");
    }
    else {
        console.log("Invalid Input");
    }
}
weekDayName(5);
/******************************************************************************************************************* */
// 10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax, Where the tax amount will be calculated by the amount of bill using functions.
/******************************************************************************************* */
function billCalculator(numOfUnits, costOfUnit) {
    let costOfElectricity = numOfUnits * costOfUnit;
    if (numOfUnits > 500) {
        let totalBIll = costOfElectricity + (costOfElectricity * 0.25);
        console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
    }
    else if (numOfUnits > 400) {
        let totalBIll = costOfElectricity + (costOfElectricity * 0.22);
        console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
    }
    else if (numOfUnits > 300) {
        let totalBIll = costOfElectricity + (costOfElectricity * 0.20);
        console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
    }
    else if (numOfUnits > 200) {
        let totalBIll = costOfElectricity + (costOfElectricity * 0.15);
        console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
    }
    else if (numOfUnits > 100) {
        let totalBIll = costOfElectricity + (costOfElectricity * 0.10);
        console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
    }
    else {
        console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${costOfElectricity}`);
    }
}
let bill1 = billCalculator(55, 16);
let bill2 = billCalculator(555, 16);
/******************************************************************************************************************* */ 
