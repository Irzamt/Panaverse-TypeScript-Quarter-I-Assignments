"use strict";
//1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
/******************************************************************************************* */
let tempInCelsius = 36;
let celsiusToFahrenheit = tempInCelsius * (9 / 5) + 32;
console.log(`Temperature in Celsius: ${tempInCelsius}\nTemperature in Fahrenheit: ${celsiusToFahrenheit}`);
let tempInFahrenheit = 0;
let fahrenheitToCelsius = (5 / 9) * (tempInFahrenheit - 32);
console.log(`Temperature in Fahrenheit: ${tempInFahrenheit}\nTemperature in Celsius: ${fahrenheitToCelsius}`);
//2 - Write a program that calculates the percentage.
/******************************************************************************************* */
// let obtainedMarks:number = 550;
// let totalMarks:number = 1100;
// let percentage:number = (obtainedMarks/totalMarks) * 100;
// console.log(`Percentage: ${percentage}`);
//3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
/******************************************************************************************* */
// let numOfDays:number = 49;
// let numOfWeeks:number = Math.floor(numOfDays/7);
// let numOfRemainingDays:number = numOfDays % 7;
// console.log(`There are ${numOfWeeks} weeks and ${numOfRemainingDays} Days in ${numOfDays} Days!!`);
//4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
/******************************************************************************************* */
// let productPrice:number = 55;
// let tenPercentDisc:number = productPrice - (productPrice / 10);
// let fivePercentDisc:number = productPrice - (productPrice / 5);
// if (productPrice > 100){
//     console.log(`You get 10% discount on this Product\nOriginal Price: $${productPrice}\nDiscounted Price: $${tenPercentDisc}`);
// }
// else{
//     console.log(`You get 5% discount on this Product\nOriginal Price: $${productPrice}\nDiscounted Price: $${fivePercentDisc}`);
// }
//5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
/******************************************************************************************* */
// let age:number = 61
// if (age > 0 && age <=12){
//     console.log("Child");
// }
// else if (age >= 13 && age <=19 ){
//     console.log("Teenager");
// }
// else{
//     console.log("Adult");
// }
//6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
/******************************************************************************************* */
// let temp:number = 50;
// if (temp >= 40){
//     console.log("You should wear shorts!");
// }
// else if (temp >= 30){
//     console.log("You should waear full sleeves");
// }
// else if (temp >= 20){
//     console.log("You should wear loose shirts");
// }
// else if (temp >= 10){
//     console.log("You should wear warm clothes");
// }
// else{
//     console.log("You should wear multiple layers and jacket!!");
// }
//7 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
/******************************************************************************************* */
// let num:number = 19;
// if (num % 3 == 0 && num % 5 == 0){
//     console.log(`${num} is divisible by both 3 and 5!`);
// }
// else if (num % 3 == 0){
//     console.log(`${num} is divisible by 3 only!`);
// }
// else if (num % 5 == 0){
//     console.log(`${num} is divisible by 5 only!`);
// }
// else{
//     console.log(`${num} is not divisible by 3 and 5`);
// }
//8 - Write a program that checks if the given year is leap year or not.
/******************************************************************************************* */
// let year:number = 2023;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if (year % 400 === 0){
//             console.log("Leap year!");    
//         }
//         else{
//             console.log("Not Leap year");
//         }
//     }
//     else{
//         console.log("Leap year");
//     } 
// }
// else{
//     console.log("Not Leap year");
// } 
//9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
/******************************************************************************************* */
// var weekDay: number = 3
// if (weekDay == 1) {
//     console.log("today is monday");
// }
// else if (weekDay == 2) {
//     console.log("today is tuesday");
// } else if (weekDay == 3) {
//     console.log("today is wednesday");
// } else if (weekDay == 4) {
//     console.log("today is thursday");
// } else if (weekDay == 5) {
//     console.log("today is friday");
// } else if (weekDay == 6) {
//     console.log("today is sathurday");
// } else if (weekDay == 7) {
//     console.log("today is sunday");
// }
// else {
//     console.log("invalid input");
// }   
//10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax, Where the tax amount will be calculated by the amount of bill.
/******************************************************************************************* */
// let numOfUnits:number = 400;
// let costOfUnit:number = 16;
// let costOfElectricity:number = numOfUnits * costOfUnit;
// if ( numOfUnits > 500){
//     let totalBIll:number = costOfElectricity + (costOfElectricity * 0.25);
//     console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
// }
// else if ( numOfUnits > 400){
//     let totalBIll:number = costOfElectricity + (costOfElectricity * 0.22);
//     console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
// }
// else if ( numOfUnits > 300){
//     let totalBIll:number = costOfElectricity + (costOfElectricity * 0.20);
//     console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
// }
// else if ( numOfUnits > 200){
//     let totalBIll:number = costOfElectricity + (costOfElectricity * 0.15);
//     console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
// }
// else if ( numOfUnits > 100){
//     let totalBIll:number = costOfElectricity + (costOfElectricity * 0.10);
//     console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${totalBIll}`);
// }
// else{
//     console.log(`Units consumed: ${numOfUnits}\nTotal Bill: ${costOfElectricity}`);
// }
