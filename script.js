// Part 1: Arithmetic Operators
let num1 = 20;
let num2 = 4;

console.log("Part 1: Arithmetic Operators");
console.log("Addition (num1 + num2):", num1 + num2); 
console.log("Subtraction (num1 - num2):", num1 - num2); 
console.log("Multiplication (num1 * num2):", num1 * num2); 
console.log("Division (num1 / num2):", num1 / num2); 
console.log("Modulus (num1 % num2):", num1 % num2); 

// Part 2: Relational Operators
console.log("\nPart 2: Relational Operators");
console.log("num1 > num2:", num1 > num2); 
console.log("num1 < num2:", num1 < num2);
console.log("num1 >= num2:", num1 >= num2); 
console.log("num1 <= num2:", num1 <= num2);
console.log("num1 === num2:", num1 === num2); 
console.log("num1 !== num2:", num1 !== num2); 

// Part 3: Logical Operators
let isSunny = true;
let isWeekend = false;

console.log("\nPart 3: Logical Operators");
console.log("isSunny && isWeekend:", isSunny && isWeekend); 
console.log("isSunny || isWeekend:", isSunny || isWeekend); 
console.log("!isSunny:", !isSunny); 

// Part 4: Assignment Operators
let score = 50;

console.log("\nPart 4: Assignment Operators");
score += 10; 
console.log("score += 10:", score); 
score -= 5; 
console.log("score -= 5:", score); 
score *= 2; 
console.log("score *= 2:", score);

// Part 5: User Interaction
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("\nPart 5: User Interaction");
console.log("Hello, " + userName + "! You are " + userAge + " years old.");
