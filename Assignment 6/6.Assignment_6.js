"use strict";
//1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
/******************************************************************************************************************* */
// let n:number = 100;
// let sum:number = 0;
// for (let i:number = 1; i <= n; i++){
//     if (i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(`Sum of first ${n} even numbers: ${sum}`);
/******************************************************************************************************************* */
//2 - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= arr.length; i++) {
    if (arr % 2 === 0) {
        console.log(arr[i]);
    }
}
