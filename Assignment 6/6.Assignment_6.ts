//1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let n:number = 100;
let sum:number = 0;
for (let i:number = 1; i <= n; i++){
    if (i % 2 === 0){
        sum += i;
    }
}

console.log(`Sum of first ${n} even numbers: ${sum}`);