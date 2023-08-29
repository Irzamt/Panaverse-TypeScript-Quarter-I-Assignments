// 1 - Write a program that uses filter to remove all negative numbers from an array of numbers
/********************************************************************************************************************** */
let arry: number[] = [12, 56 ,48, -79, 52, -96, -65, 2, -61]

let updatedArr:number[] = arry.filter (n => n > 0);
console.log(updatedArr);
/********************************************************************************************************************** */

// 2 - Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
/********************************************************************************************************************** */
let array2:number[] = [1,2,3,4,5];

let updatedArr2:number[] = array2.map(n => n * 2);
console.log(updatedArr2);
/********************************************************************************************************************** */

// 3 - Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters
/********************************************************************************************************************** */
let array3:string[] = ["apple", "banana", "cherry", "date", "grape"];

let updatedArr3:string[] = array3.filter(n => n.length > 5);
console.log(updatedArr3);
/********************************************************************************************************************** */

// 4 - Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
/********************************************************************************************************************** */
let array4:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let updatedArr4:number[] = array4
    .filter(n => n % 2 === 0)
    .map(n => n * n);

console.log(updatedArr4);
/********************************************************************************************************************** */

// 5 - Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
/********************************************************************************************************************** */
let arrOfTempInCel = [0, 10, 20, 30, 40];

let arrOfTempInFar = arrOfTempInCel.map (n => (n * (9/5)) + 32);
console.log(arrOfTempInFar);
/********************************************************************************************************************** */

// 6 - Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
/********************************************************************************************************************** */

/********************************************************************************************************************** */

// 7 - Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
/********************************************************************************************************************** */

/********************************************************************************************************************** */