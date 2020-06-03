//  We want to write a function factorial(num) which takes a number
//    and returns the product of all consecutive positive integers up to 
//    the given number. The factorial of zero is equal to 1.
//  This problem must be solved recursively.


// Repeating pattern


// Where does the pattern break


// Base Case


// Recursive Case


// Recrusive Step







// Website to visualize the call stack for factorial:
//    https://www.cs.usfca.edu/~galles/visualization/RecFact.html


function factorial(num) {

}


console.log(factorial(4));


// factorial(num);   // 1st frame,   num = ,
// factorial(num);   // 2nd frame,   num = ,
// factorial(num);   // 3rd frame,   num = ,
// factorial(num);   // 4th frame,   num = ,  returns ,    popped off the stack
// 3rd frame,     return from 4th frame = ,    returns ,     popped off the stack
// 2nd frame,     return from 3rd frame = ,    returns ,     popped off the stack
// 1st frame,     return from 2nd frame = ,    returns ,     popped off the stack
// Final return value: