"use strict";
/*
2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
********************************************************************************************************************* */
let userName = "Hello Irzam, Would you like to learn some TypeScript Today?";
console.log(userName);
console.log('**********************************************************************************************************************');
/**********************************************************************************************************************
3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
********************************************************************************************************************* */
let userName2 = "jOhN";
let lower = userName2.toLowerCase();
let upper = userName2.toUpperCase();
let title = userName2
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
console.log(`Name: ${userName2}\nLower Case: ${lower}\nUpper Case: ${upper}\nTitle Case: ${title}`);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:  Albert Einstein once said, “A person who never made a mistake never tried anything new.”
********************************************************************************************************************* */
let quote = 'Albert Einstein once said, “A person who never made a mistake never tried anything new.”';
console.log(quote);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*********************************************************************************************************************/
let famous_person = "Albert Einstein";
let message = '“A person who never made a mistake never tried anything new.”';
console.log(`${famous_person} once said, ${message}`);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
********************************************************************************************************************* */
let name1 = "\t\n   Irzam   \t\n";
let strip = name1.trim();
console.log(`With Whitespace: ${name1}\n Without Whitespace: ${strip} `);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
********************************************************************************************************************* */
// Addition: 12 + (-4) = 8
console.log("Addition:", 12 + (-4));
// Subtraction: 16 - 8 = 8
console.log("Subtraction:", 16 - 8);
// Multiplication: 4 * 2 = 8
console.log("Multiplication:", 4 * 2);
// Division: 16 / 2 = 8
console.log("Division:", 16 / 2);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
8. You should create four lines that look like this:
_____________________________________________
console.log(5 + 3)
_____________________________________________
Your output should simply be four lines with the number 8 appearing once on each line.
********************************************************************************************************************* */
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
********************************************************************************************************************* */
let favNum = 4;
console.log(`My favourite Number is: ${favNum}`);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
********************************************************************************************************************* */
//Program 1:
let userName3 = "jOhN";
let lower2 = userName3.toLowerCase(); //Lower Case
let upper2 = userName3.toUpperCase(); //Upper Case
let title2 = userName3
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' '); // //Title Case conversion
console.log(`Name: ${userName3}\nLower Case: ${lower2}\nUpper Case: ${upper2}\nTitle Case: ${title2}`);
//---------------------------------------------------------------------------------------------------------------
// Program 2:
let favNum2 = 4;
console.log(`My favourite Number is: ${favNum2}`); // My favourite Number is printed
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
********************************************************************************************************************* */
let names = ['Ali', 'Fahad', 'Omer'];
for (let i = 0; i < names.length; i++)
    console.log(names[i]);
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
********************************************************************************************************************* */
let names4 = ['Ali', 'Fahad', 'Omer'];
for (let i = 0; i < names4.length; i++)
    console.log(names4[i], ", Tu n mera 500 wapis kb dena h?");
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
********************************************************************************************************************* */
let vehicles = ['Lexus', 'Mercedes', 'Rolls Royce'];
for (let i = 0; i < vehicles.length; i++)
    console.log("I would like to own a", vehicles[i]);
console.log('**********************************************************************************************************************');
let guests = [
    {
        guestName: "Ali",
    },
    {
        guestName: "Omer",
    },
    {
        guestName: "Fahad",
    }
];
for (let i = 0; i < guests.length; i++)
    console.log(guests[i].guestName, "you are invited to dinner @ 8:00 PM Saturday Night!!");
console.log('**********************************************************************************************************************');
let guests2 = [
    {
        guestName: "Ali",
        isComing: true
    },
    {
        guestName: "Omer",
        isComing: false
    },
    {
        guestName: "Fahad",
        isComing: true
    }
];
let updatedGuestList = [];
for (let i = 0; i < guests.length; i++) {
    if (guests2[i].isComing === false) {
        guests2[i].guestName = "Abdullah";
        guests2[i].isComing = true;
    }
    updatedGuestList.push(guests2[i].guestName);
}
for (let i = 0; i < updatedGuestList.length; i++)
    console.log(updatedGuestList[i], "you are invited to dinner @ 8:00 PM Saturday Night!!");
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
**********************************************************************************************************************/
console.log("I found a bigger table");
updatedGuestList.unshift("Raza"); //Added at the begining
updatedGuestList.push("Zaini"); //Added at the End
updatedGuestList.splice(updatedGuestList.length / 2, 0, "Farhan"); //Added in the middle
for (let i = 0; i < updatedGuestList.length; i++)
    console.log(updatedGuestList[i], "you are invited to dinner @ 8:00 PM Saturday Night!!");
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
********************************************************************************************************************* */
console.log('I invited only 2 people for dinner');
let uninvitedGuests = [];
let totalguest = updatedGuestList.length;
for (let i = 0; i < totalguest; i++) {
    if (i < totalguest - 2)
        uninvitedGuests.push(updatedGuestList.shift());
}
for (let i = 0; i < uninvitedGuests.length; i++)
    console.log(uninvitedGuests[i], "Sorry you are uninvited to dinner!!");
for (let i = 0; i < updatedGuestList.length; i++)
    console.log(updatedGuestList[i], "you are still invited to dinner @ 8:00 PM Saturday Night!!");
console.log('**********************************************************************************************************************');
/*********************************************************************************************************************
18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
**********************************************************************************************************************/
let desiredPlaces = ['NewYork', 'London', 'SwitzerLand', 'AbuDahbi', 'Paris'];
let originalOrder = [];
desiredPlaces.forEach(n => originalOrder.push(n));
console.log("Original Order: ", originalOrder);
console.log("Alphabetical Order: ", desiredPlaces.sort());
console.log("Original Order: ", originalOrder);
console.log("Reverse Order: ", desiredPlaces.reverse());
console.log("Original Order: ", originalOrder);
console.log("Original (Reverse Order)", originalOrder.reverse());
console.log("Original (Reverse Order) Again", originalOrder.reverse());
console.log("Alphabetical Order: ", originalOrder.sort((a, b) => a.localeCompare(b)));
console.log("Reverse Alphabetical Order: ", originalOrder.sort((a, b) => b.localeCompare(a)));
console.log('**********************************************************************************************************************');
/**********************************************************************************************************************
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
/**********************************************************************************************************************/
console.log('I invited', updatedGuestList.length, 'people for dinner'); // Message indicating the number of people invited
console.log('**********************************************************************************************************************');
/**********************************************************************************************************************
20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
**********************************************************************************************************************/
let countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Australia",
    "Japan",
    "Brazil",
    "India",
    "China"
];
console.log("List of Countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
console.log('**********************************************************************************************************************');
const cars = [
    {
        Sr: 1,
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver",
    },
    {
        Sr: 2,
        make: "Honda",
        model: "Civic",
        year: 2021,
        color: "Blue",
    },
    {
        Sr: 3,
        make: "Ford",
        model: "Mustang",
        year: 2023,
        color: "Red",
    },
    {
        Sr: 4,
        make: "Chevrolet",
        model: "Equinox",
        year: 2020,
        color: "Black",
    },
];
console.log("List of Cars:");
for (let i = 0; i < cars.length; i++) {
    console.log(`Sr # ${cars[i].Sr}: Make: ${cars[i].make}, Model: ${cars[i].model}, Year: ${cars[i].year}, Color: ${cars[i].color}`);
}
console.log('**********************************************************************************************************************');
/**********************************************************************************************************************
22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
**********************************************************************************************************************/
const myArray = [1, 2, 3, 4, 5];
const indexErrorValue = myArray[10]; // Accessing index 10, which doesn't exist
console.log(indexErrorValue); // Attempting to print the value, which will cause a runtime error
// To correct the error, make sure you access a valid index
const validIndexValue = myArray[2]; // Accessing index 2 (third element)
console.log(validIndexValue); // Printing the valid value
/*********************************************************************************************************************
23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
***************************************************************************************************************************/
// // Test 1: Equality check
// let num1: number = 5;
// let num2: number = 5;
// console.log("Is num1 == num2? I predict True.");
// console.log(num1 == num2); // True
// // Test 2: Inequality check
// let x: number = 10;
// let y: number = 20;
// console.log("Is x != y? I predict True.");
// console.log(x != y); // True
// // Test 3: Greater than check
// let a: number = 15;
// let b: number = 10;
// console.log("Is a > b? I predict True.");
// console.log(a > b); // True
// // Test 4: Less than check
// let p: number = 7;
// let q: number = 12;
// console.log("Is p < q? I predict True.");
// console.log(p < q); // True
// // Test 5: Greater than or equal to check
// let m: number = 25;
// let n: number = 25;
// console.log("Is m >= n? I predict True.");
// console.log(m >= n); // True
// // Test 6: Less than or equal to check
// let r: number = 30;
// let s: number = 35;
// console.log("Is r >= s? I predict False.");
// console.log(r >= s); // False
// // Test 7: Strict equality check
// let str1: string = "hello";
// let str2: string = "hello";
// console.log("Is str1 !== str2? I predict False.");
// console.log(str1 !== str2); // False
// // Test 8: Check if bool1 is true
// let bool1: boolean = true;
// console.log("Is bool1 true? I predict True.");
// console.log(bool1); // True
// // Test 9: Logical AND operator
// let sunny: boolean = true;
// let warm: boolean = true;
// console.log("Is it sunny && warm? I predict True.");
// console.log(sunny && warm); // True
// // Test 10: Logical OR operator
// let raining: boolean = false;
// let windy: boolean = true;
// console.log("Is it raining || windy? I predict True.");
// console.log(raining || windy); // True
/*********************************************************************************************************************
24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
***************************************************************************************************************************/
// Tests for equality and inequality with strings:
// Equality Test with Strings (True)
// let str1: string = "apple";
// let str2: string = "apple";
// console.log("Is str1 equal to str2? I predict True.");
// console.log(str1 === str2); // True
// // Inequality Test with Strings (False)
// let str3: string = "banana";
// let str4: string = "apple";
// console.log("Is str3 not equal to str4? I predict False.");
// console.log(str3 === str4); // False
// // Tests using the toLowerCase function:
// // Lowercase Test (True)
// let word1: string = "HELLO";
// let word2: string = "hello";
// console.log("Is word1.toLowerCase() equal to word2? I predict True.");
// console.log(word1.toLowerCase() === word2); // True
// // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
// // Greater Than Test (True)
// let num1: number = 10;
// let num2: number = 5;
// console.log("Is num1 greater than num2? I predict True.");
// console.log(num1 > num2); // True
// // Less Than or Equal To Test (False)
// let num3: number = 15;
// let num4: number = 10;
// console.log("Is num3 less than or equal to num4? I predict False.");
// console.log(num3 <= num4); // False
// // Tests using "and" and "or" operators:
// // Logical OR Test (True)
// let isSunny: boolean = true;
// let isWarm: boolean = false;
// console.log("Is it sunny or warm? I predict True.");
// console.log(isSunny || isWarm); // True
// // Logical AND Test (False)
// let isRaining: boolean = true;
// let isWindy: boolean = false;
// console.log("Is it raining and windy? I predict False.");
// console.log(isRaining && isWindy); // False
// // Test whether an item is in an array:
// // Array Includes Test (True)
// let fruits: string[] = ["apple", "banana", "cherry"];
// let searchFruit: string = "banana";
// console.log(`Is ${searchFruit} in the fruits array? I predict True.`);
// console.log(fruits.includes(searchFruit)); // True
// // Test whether an item is not in an array:
// // Array Excludes Test (False)
// let colors: string[] = ["red", "green", "blue"];
// let searchColor: string = "yellow";
// console.log(`Is ${searchColor} not in the colors array? I predict False.`);
// console.log(!colors.includes(searchColor)); // False
/*********************************************************************************************************************
25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
***************************************************************************************************************************/
// let  alien_color: string = 'green'
// let points: number = 0
// 1st Version ----> Passes the test
//------------------------------------------
// if (alien_color === 'green'){
//     points += 5
//     console.log(`Player just earned ${points} points`);
// }
//2nd Version ----> Fails the test
//-------------------------------------------
// let alien_color_fail: string = 'red';
// if (alien_color_fail === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
/*********************************************************************************************************************
26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
***************************************************************************************************************************/
// let  alien_color: string = 'green'
// let points: number = 0
// 1st Version ----> Using if Statements
//----------------------------------------------------------
// if (alien_color === 'green'){
//     points += 5
//     console.log(`Player just earned ${points} points`);
// }
// if (alien_color !== 'green'){
//     points += 10
//     console.log(`Player just earned ${points} points`);
// }
// 2nd Version ----> Using if-else Statement
//---------------------------------------------------------
// if (alien_color === 'red'){
//     points += 5
//     console.log(`Player just earned ${points} points`);
// }
// else{
//     points += 10
//     console.log(`Player just earned ${points} points`);
// }
/*********************************************************************************************************************
27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
***************************************************************************************************************************/
// let  alien_color: string = 'green'
// let points: number = 0
// 1st Version ----> Using if Statements
//----------------------------------------------------------
// if (alien_color === 'green'){
//     points += 5
//     console.log(`Player just earned ${points} points`);
// }
// if (alien_color === 'yellow'){
//     points += 10
//     console.log(`Player just earned ${points} points`);
// }
// if (alien_color === 'red'){
//     points += 15
//     console.log(`Player just earned ${points} points`);
// }
// 2nd Version ----> Using if-else Statement
//---------------------------------------------------------
// if (alien_color === 'green'){
//     points += 5
//     console.log(`Player just earned ${points} points`);
// }
// else if (alien_color === 'yellow'){
//     points += 10
//     console.log(`Player just earned ${points} points`);
// }
// else {
//     points += 15
//     console.log(`Player just earned ${points} points`);
// }
// 3rd Version ----> Using Switch Statement
//---------------------------------------------------------
// switch (alien_color){
//     case "green":
//         points += 5
//         console.log(`Player just earned ${points} points`);
//         break;
//     case "yellow":
//         points += 10
//         console.log(`Player just earned ${points} points`);
//         break;
//     case "red":
//         points += 15
//         console.log(`Player just earned ${points} points`);
// }
/*********************************************************************************************************************
28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
***************************************************************************************************************************/
// const age:number = 1;
// if (age >= 65)
//     console.log("The person is an elder");
// else if ( age >= 20)
//     console.log("The person is an adult");
// else if (age >= 13)
//     console.log("The person is a teenager");
// else if (age >= 4)
//     console.log("The person is a kid");
// else if (age >= 2)
//     console.log("The person is a toddler");
// else
//     console.log("The person is a baby");
/*********************************************************************************************************************
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
***************************************************************************************************************************/
// const favFruits: string[] = ['orange', 'mango', 'banana'];
// for (let i:number = 0; i < favFruits.length; i++){
//     if (favFruits[i] === 'orange')
//         console.log("You really like oranges!");
//     if (favFruits[i] === 'mango')
//         console.log("You really like mangoes!");
//     if (favFruits[i] === 'banana')
//         console.log("You really like banana!");
//     if (favFruits[i] === 'apple')
//         console.log("You really like apples!");
//     if (favFruits[i] === 'kiwi')
//         console.log("You really like kiwi!");
// }
/*********************************************************************************************************************
30. Hello Admin: Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
***************************************************************************************************************************/
// const usernames: string[] = ["admin", "Eric", "Alice", "Bob", "Charlie"];
// for (let i:number = 0; i < usernames.length; i++) {
//     if (usernames[i] === "admin")
//         console.log("Hello admin, would you like to see a status report?");
//     else
//         console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
// }
/*********************************************************************************************************************
31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
***************************************************************************************************************************/
// const usernames: string[] = ["admin", "Eric", "Alice", "Bob", "Charlie"];
// const usernames: string[] = []; // Empty List
// if (usernames.length === 0)
//     console.log('We need to find some users!');
// else {
//     for (let i: number = 0; i < usernames.length; i++) {
//         if (usernames[i] === "admin")
//             console.log("Hello admin, would you like to see a status report?");
//         else
//             console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
//     }
// }
/*********************************************************************************************************************
32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
***************************************************************************************************************************/
// const currentUsers: string[] = ['John', 'Alice', 'Eric', 'Mary', 'Sarah'];
// const newUsers: string[] = ['mary', 'Bob', 'Eric', 'Samantha', 'John'];
// // Convert currentUsers to lowercase for case-insensitive comparison
// const currentUsersLower:string[] = currentUsers.map(n => n.toLowerCase());
// console.log(currentUsersLower);
// // Convert newUser to lowercase for case-insensitive comparison
// for(let i:number = 0; i < newUsers.length; i++){
//     const newUrsersLower: string = newUsers[i].toLowerCase();
//     if (currentUsersLower.includes(newUrsersLower))
//         console.log(`Sorry, the username "${newUsers[i]}" is already taken. Please enter a new username.`);
//     else
//     console.log(`The username "${newUsers[i]}" is available.`);
// }
/*********************************************************************************************************************
33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
***************************************************************************************************************************/
// const ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ordinalNumbers.forEach(n => {
//     if (n === 1)
//         console.log(`${n}st`);
//     else if (n === 2)
//         console.log(`${n}nd`);
//     else if (n === 3)
//         console.log(`${n}rd`);
//     else
//         console.log(`${n}th`);
// });
/*********************************************************************************************************************
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
***************************************************************************************************************************/
// const myPizza:string[] = ['tikka', 'fajita', 'pepperoni'];
// myPizza.forEach(n => {
//     console.log(`I like ${n}!!`);
// });
// console.log(`I can't resist the deliciousness of Pepperoni.`);
// console.log(`Margherita's simplicity is a culinary masterpiece.`);
// console.log(`The sweetness of Hawaiian pizza is simply amazing.`);
/*********************************************************************************************************************
35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
***************************************************************************************************************************/
// const animals: string[] = ['dog', 'cat', 'mouse'];
// animals.forEach(n => console.log(`A ${n} would make a great pet!!!`));
// console.log('\nThey are all domesticated animals');
/*********************************************************************************************************************
36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
***************************************************************************************************************************/
// function make_shirt(size: string, text: string) {
//     return `The shirt is of size: ${size}\n"${text}"`;
// }
// console.log(make_shirt("XL", "This is a great shirt"));
/*********************************************************************************************************************
37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
***************************************************************************************************************************/
// function make_shirt(size: string = "Large", text: string = "I love TypeScript"): string {
//     return `The shirt is of size: ${size}\n"${text}"`;
// }
// // Large shirt with the Default Message
// console.log(make_shirt());
// // Medium shirt with the Default Message
// console.log(make_shirt("Medium"));
// //Shirt of any size and different message
// console.log(make_shirt("Small", "This is a great shirt"));
/*********************************************************************************************************************
38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
***************************************************************************************************************************/
// function describe_city (city:string, country:string = 'Pakistan'):string{
//     return `${city} is in ${country}`;
// }
// console.log(describe_city ('Lahore'));
// console.log(describe_city ('Multan'));
// console.log(describe_city ('Paris'));
/*********************************************************************************************************************
39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
***************************************************************************************************************************/
// function city_country (city:string, country: string): string{
//     return `${city}, ${country}`;
// }
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Paris", "Italy"));
// console.log(city_country("NewYork", "U.S.A"));
/*********************************************************************************************************************
40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
***************************************************************************************************************************/
// type album = {artistName: string; albumTitle: string; tracks?: number}
// function make_album (artist: string, title: string, track?: number): album{
//     let myAlbum: album = {
//         artistName: artist,
//         albumTitle: title,
//     };
//     if (track !== undefined)
//         myAlbum.tracks = track;
//     return myAlbum;
// }
// console.log(make_album('Artist 1', 'Album 1', 10));
// console.log(make_album('Artist 2', 'Album 2'));
// console.log(make_album('Artist 3', 'Album 1', 16));
/*********************************************************************************************************************
41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
***************************************************************************************************************************/
// function show_magicians (magician:string[]){
//     magician.forEach(n => console.log(n));
// }
// show_magicians (["Raza", "Fahad", "Ahmad"])
/*********************************************************************************************************************
42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
***************************************************************************************************************************/
// function make_great (magician:string[]){
//     magician.forEach(n => console.log(`Great Magician ${n}`));
// }
// make_great (["Raza", "Fahad", "Ahmad"])
/*********************************************************************************************************************
43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
***************************************************************************************************************************/
// function show_magicians(magician: string[]) {
//     magician.forEach(n => console.log(n));
// }
// function make_great(magician: string[]):string[] {
//     return magician.map(n => `Great Magician ${n}`);
// }
// const originalMagicians: string[] = ["Raza", "Fahad", "Ahmad"];
// const greatMagician: string[] = make_great([...originalMagicians]); // Create a copy of the original array
// console.log("Original Magicians:");
// show_magicians(originalMagicians);
// console.log("\nGreat Magicians:");
// show_magicians(greatMagician);
/*********************************************************************************************************************
44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
***************************************************************************************************************************/
// function makeSandwich(sandwichItems: string[]) {
//     console.log("Sandwich Summary:");
//     if (sandwichItems.length === 0) {
//         return "You ordered an empty sandwich.";
//     }
//     else {
//         console.log("You ordered a sandwich with the following items:");
//         return sandwichItems.map(item => `- ${item}`);
//     }
// }
// console.log(makeSandwich([]));
// console.log(makeSandwich(['Turkey', 'Beef']));
// console.log(makeSandwich(['Turkey', 'Beef', 'Fajitas']));
/*********************************************************************************************************************
45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
***************************************************************************************************************************/
// type CarType = {
//     manufacturerT: string;
//     modelT: string;
//     colorT?: string; // Make color optional with "?"
//     modelNumberT?: number; // Make modelNumber optional with "?"
// };
// function car(manufacturer: string, model: string, color?: string, modelNumber?: number): CarType {
//     let myCar: CarType = {
//         manufacturerT: manufacturer,
//         modelT: model,
//     };
//     if (color !== undefined)
//         myCar.colorT = color;
//     if (modelNumber !== undefined)
//         myCar.modelNumberT = modelNumber;
//     return myCar;
// }
// const myCar = car('Toyota', 'Camry', 'Blue', 2023);
// console.log(myCar);
