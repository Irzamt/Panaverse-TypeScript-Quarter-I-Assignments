"use strict";
// Ex-1: Write a program that calculates the area of a rectangle
/******************************************************************************************************************* */
let width = 65;
let height = 50;
let areaOfRectangle = width * height;
console.log(`Area of rectangle is ${areaOfRectangle}`);
/******************************************************************************************************************* */
// Ex-2: Write a program that takes input and calculates the volume of a cube
/******************************************************************************************************************* */
var lengthOfSide = 4;
let volumeOfCube = lengthOfSide ** 3;
console.log(`Volume of the cube is ${volumeOfCube}`);
/******************************************************************************************************************* */
//Ex-3: Checks if a given number is positive, negative or zero
/******************************************************************************************************************* */
let num = 0;
if (num == 0) {
    console.log("The given number is zero");
}
else if (num > 0) {
    console.log("Given number is positive");
}
else {
    console.log("Given number is negative");
}
// By using Ternary Operators
// num == 0 ? console.log("The given number is zero") : num > 0 ? console.log("Given number is positive") : console.log("Given number is negative")
/******************************************************************************************************************* */
//Ex-4: Check if a given number is odd or even
/******************************************************************************************************************* */
let num1 = 65;
if (num1 % 2 == 0) {
    console.log(`${num1} is an even number`);
}
else {
    console.log(`${num1} is an odd number`);
}
/******************************************************************************************************************* */
//Ex-5: Check if a person is able to vote
let age = 19;
if (age >= 18) {
    console.log("You are able to vote");
}
else {
    console.log("You are not able to vote");
}
//Ex-6: calculate (10+5)*3-2/(4%3)-7
console.log((10 + 5) * 3 - 2 / (4 % 3) - 7);
