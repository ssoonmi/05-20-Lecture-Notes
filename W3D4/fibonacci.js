//  We want to write a function fib(nth) the takes a number
//    and returns the nth number of the fibonacci sequence.
//  The first two numbers of the fibonacci sequence are both 1. Every 
//    number after wards is the sum of the two prior fibonacci numbers.
//  This problem must be solved recursively.


// Repeating pattern


// Where does the pattern break


// Base Case


// Recursive Case


// Recrusive Step






function fib(nth) {

}




console.log(fib(5));





// fib(nth);   // 1st frame,   nth = ,   nth - 1 = , nth - 2 = 
// fib(nth);   // 2nd frame,   nth = ,   nth - 1 = , nth - 2 = 
// fib(nth);   // 3rd frame,   nth = ,   nth - 1 = , nth - 2 = 
// fib(nth);   // 4th frame,   nth = ,   nth - 1 = , nth - 2 = 
// fib(nth);   // 5th frame,   nth = ,   nth - 1 = , nth - 2 = ,  returns ,    popped off the stack
// 4th frame,     return from 5th frame = ,    returns ,     popped off the stack
// 3rd frame,     return from 4th frame = ,    returns ,     popped off the stack
// 2nd frame,     return from 3rd frame = ,    returns ,     popped off the stack
// 1st frame,     return from 2nd frame = ,    returns ,     popped off the stack
// Final return value: