/*
STRING => "" , ''
TEMPLATE LITERAL => ``, ${}
*/

// let name = "Bob";
// console.log(`Hello, ${name}`); // template literal
// console.log('Hello, ' + name); // regular string concatination

// function tellStory(adj, animal) {
//     console.log(`My ${adj} ${animal} went for ${5+2} walk(s) today.`);
// }

// function tellStory(adj, animal) {
//     let sum = 5 + 2;
//     console.log("My " + adj + " " + animal +  " went for " + sum + " walk(s) today.");
// }

// tellStory('awesome', 'cow');
// ====================== HOISTING ==========================

/** 
 * VARIABLE HOISTING:
 *    - VAR declared variables get HOISTED and are 
 *      available to the scope they are defined in. 
 *    - VAR declared variables happen in TWO steps. 
 *    - LET & CONST do NOT allow for hoisting. 
 *      Instead, you would get an error
 * 
 * REGULAR FUNCTION HOISTING
 *    - ALL functions declared function style are 
 *      hoisted in JS, making your functions accessible 
 *      ANYWHERE in your code. (Cool!)
 * 
 * FUNCTION EXPRESSION HOISTING
 *     - TL;DR :
 *       function hoisting doesn't work w func expressions.
 *     - LET and CONST do NOT permit hoisting. 
 *     - VAR does hoist, but it still throws an error.
 * 
 * SAME NAME VARIABLES AND FUNCTIONS
 *     - Cannot be hoisted in the same space.
 *     - If you declare & assign a variable using VAR, 
 *       this variable will OVERTAKE a function named the same thing. 
 */ 

/**
 * VARIABLE HOISTING DEMO:
*/
// Hoisting makes TOP DOWN design work 
// 

// hoistDemo();

// function hoistDemo() {
//     console.log(hoisted); // => error
//     var hoisted = "Success!";
//     console.log(hoisted); // => Success!
// }

/**
 * REGULAR FUNCTION HOISTING
 */
// var greeting; => undefined
// greeting(); 
// const greeting = function hello(){
//     console.log("Yo!");
// };


/**
 * 2. Variable declaration with VAR
 *    takes priority! This is because of var's 
 *    HOISTING of variables.
*/
// var hello = "Hello 1!";
// function hello() {
//     console.log("Hello 2!");
// }
// console.log(hello);

/**
 * 3.
 *    var (assigned) > function
 *    var (declared) < function
*/

// var banana = "apple";
// function banana() {
//     console.log("Function!");
// };
// // console.log(banana());
// // banana = "Variable";
// console.log(banana);






// ====================== SYMBOLS / OBJECT BASICS ==========================

// What is a Symbol?
//      -> A newer primitive data type in JS. 
// Why are Symbols useful?
//      -> Allow unique keys in JS Objects
//      -> (even if desc string is the same)

// Different ways to create key:value pairs in an Object:
// POJO => Plain Old JavaScript Object

let newDog = 'Bud';
let dogs = {
    'Maggie': 'Poodle',
    Rudy: 'Pit Bull',   // To the left of the colon will be treated as a string
    [newDog]: 'Lab'     // Using brackets allows for evaluation
};

// console.log(dogs);

// Adding more key value pairings to an Object
let breed = 'German Shepherd';
dogs['Trudy'] = breed; 

// console.log('====');
// console.log(dogs);



// using the same string as a key will reassign our key:value pair
dogs['Maggie'] = 'Yorkie';
// console.log(dogs);

// what if we don't want to re-assign keys?


// USING SYMBOLS IN OBJECTS
// =========================
// - Each instance of a symbol is unique.
// - If we had two dogs named Maggie, our current data structure would not work.
// - Using symbols ensures no name collisions:

let symbolDogs = {
    [Symbol('Rudy')]: 'Pit Bull',
    [Symbol('Bud')]: 'Lab',
    [Symbol('Trudy')]: 'German Shepherd',
    'spot': 'lab' 
};

// console.log(symbolDogs);
let goodDog = Symbol('Maggie');
let bestDog = Symbol('Maggie');
symbolDogs[goodDog] = 'Poodle';
symbolDogs[bestDog] = 'Yorkie';

// console.log(symbolDogs);
// Object.keys(symbolDogs); // => ?
// console.log(Object.getOwnPropertySymbols(symbolDogs)); // => ?
console.log(symbolDogs['spot']); // => lab
console.log(symbolDogs[goodDog]); // => Poodle



let mixedDogs = {
    Maggie: 'Poodle',
    Max: 'Hound',
    [Symbol('Sally')]: 'Yorkie'
};

// console.log(Object.keys(mixedDogs)); // [ 'Maggie', 'Max ]
// console.log(Object.getOwnPropertySymbols(mixedDogs)); // [ Symbol('Sally') ]
