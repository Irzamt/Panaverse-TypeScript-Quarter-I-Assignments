//1 - Print a message like "Hey Abu Hurairah, I have started learning TYPESCRIPT.
/******************************************************************************************************************* */
console.log("Hey Irzam, I have started learning TYPESCRIPT");
/******************************************************************************************************************* */

//2 - Store your name in a variable and print it.
/******************************************************************************************************************* */
var Myname:string = "Irzam";
console.log(Myname);
/******************************************************************************************************************* */

/*3 - Store 10 numbers in different variables.
- Add all of them and print the SUM.
- Print the Difference (subtraction).
- Print the result after multiplying all.*/
/******************************************************************************************************************* */
let num1:number = 1;
let num2:number = 2;
let num3:number = 3;
let num4:number = 4;
let num5:number = 5;
let num6:number = 6;
let num7:number = 7;
let num8:number = 8;
let num9:number = 9;
let num10:number = 10;

let sum:number = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
console.log(`Sum of Numbers: ${sum}`);
 
let mul:number = num1 * num2 + num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10;
console.log(`Multiplication of Numbers: ${mul}`);

let subtraction:number = num10 - num5;
console.log(`Subtraction of 2 numbers: ${subtraction}`);

/******************************************************************************************************************* */
//4 - Take two numbers and print the division result.
let num11:number = 45;
let num12:number = 15;
let division:number = num11 / num12;
console.log(`Division of 2 numbers: ${division}`);

/******************************************************************************************************************* */
//5 - perform all four operations with the given numbers, print the results, and observe the order in which the operations take place.
let allOperations = num10 + num12 - num2 * num3 / num8;
console.log(allOperations);
