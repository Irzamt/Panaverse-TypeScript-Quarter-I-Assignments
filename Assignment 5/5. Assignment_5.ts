//1 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
/****************************************************************************************************************** */
function arr (array:number[], index:number, val:number):number[]{
    array.splice(index, 0, val)
    return array;
}

const myArray:number[] = [1, 2, 3, 4, 5];
console.log(arr(myArray, 3, 10));
/****************************************************************************************************************** */

//2- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
/****************************************************************************************************************** */
let shoppingCart:object[] = [];

function shoppingAdd(item:string, quantity:number ):object[]{
    shoppingCart.splice(0, 0, {name: item, Quanitity: quantity});
    return shoppingCart;
}
function shoppingRemove(){
    shoppingCart.splice(0, 1);
    return shoppingCart;
}
function shoppingUpdate(item:string, quantity:number, id: number){
    shoppingCart.splice(id, 1, {name: item, Quantity: quantity});
    return shoppingCart;
}

console.log(shoppingAdd("orange", 2));
console.log(shoppingAdd("apple", 6));
console.log(shoppingRemove());
console.log(shoppingUpdate("Banana", 8, 1));
/****************************************************************************************************************** */

//3 - Write a program that uses a while loop to print the first 25 integers.
/****************************************************************************************************************** */
let integers = 25;
let index2 = 1;
while (index2 <= integers){
    console.log(index2);
    index2++;
}
/****************************************************************************************************************** */

//4 - Write a program that uses a while loop to print the first 10 even numbers.
/****************************************************************************************************************** */
let index1 = 1;
while (index1 <= 20){
    if (index1 % 2 === 0){
        console.log(index1);
    }
    index1++;
}
/****************************************************************************************************************** */

//5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
/****************************************************************************************************************** */
function factorial(integer:number):string{
    let i:number = 1;
    let factorial = 1;

    if(integer < 0){
        return "Factorial of a negative number cannot be Calculated";
    }
    else{
        while (i <= integer){
            factorial *= i;
            i++;
        }
        return `The factorial of ${integer}! = ${factorial}`;
    }
}

console.log(factorial(3));
/****************************************************************************************************************** */

//6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
/****************************************************************************************************************** */

function removeNegNumbers(arr:number[]) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

let OrgArr:number[] = [1, 2, -5, 72, -52, 64];
console.log("Original Array: " , OrgArr);
let ReqArray = removeNegNumbers(OrgArr);
console.log("Array w/o Negative Numbers: " , ReqArray);
/****************************************************************************************************************** */

//7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
/****************************************************************************************************************** */
function calSum(arr:number[]):number{
    let i:number = 0;
    let sum:number = 0
    while (i < arr.length){
        sum += arr[i];
        i++;
    }
    return sum; 
}
console.log(calSum([1, 2, 3]));
/****************************************************************************************************************** */

// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
/****************************************************************************************************************** */
let tempInCel:number[] = [33, 65, 72];
let tempInFar:number[] = [];

let index3:number = 0;
while (index3 < tempInCel.length){
    tempInFar[index3] = (tempInCel[index3] * 9/5) + 32 ;
    index3++;
}
console.log(tempInFar);
/****************************************************************************************************************** */