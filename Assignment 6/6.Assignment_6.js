"use strict";
/******************************************************************************************************************* */
// 1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let n = 100;
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`Sum of first ${n} even numbers: ${sum}`);
/******************************************************************************************************************* */
//2 - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
/******************************************************************************************************************* */
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}
/******************************************************************************************************************* */
//3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
/******************************************************************************************************************* */
function odd(arr2) {
    let arrOfOddNumbers = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 !== 0) {
            arrOfOddNumbers.push(arr2[i]);
        }
    }
    return arrOfOddNumbers;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let arr6 = odd(array);
console.log(arr6);
/******************************************************************************************************************* */
//4 - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
/******************************************************************************************************************* */
function areaOfCircle(radius) {
    const pi = 3.1416;
    let area = Math.floor(pi * radius ** 2);
    return area;
}
let area = areaOfCircle(6);
console.log(`Area of circle : ${area}`);
/******************************************************************************************************************* */
//5 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
/******************************************************************************************************************* */
let grades = [41, 23, 76, 72, 95, 62, 39, 87, 69, 36, 96, 14, 56, 23, 39];
for (let i = grades.length - 1; i >= 0; i--) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
    }
}
console.log(grades);
/******************************************************************************************************************* */
//6 - Write a program that uses a function to find the largest element in an array of numbers.
/******************************************************************************************************************* */
let arr = [15, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largest = arr6[0];
function largestElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
let largestNumber = largestElement(arr6);
console.log(`Largest Number: ${largestNumber}`);
/******************************************************************************************************************* */ 
