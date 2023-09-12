"use strict";
/*
2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
********************************************************************************************************************* */
// let userName:string = "Hello Irzam, Would you like to learn some TypeScript Today?";
function make_album(artist, title, track) {
    let myAlbum = {
        artistName: artist,
        albumTitle: title,
    };
    if (track !== undefined)
        myAlbum.tracks = track;
    return myAlbum;
}
console.log(make_album('Artist 1', 'Album 1', 10));
console.log(make_album('Artist 2', 'Album 2'));
console.log(make_album('Artist 3', 'Album 1', 16));
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
