//  We want to write a function exponent(base, power) which takes two numbers,
//    a base and power, returns the base raised to that power.
//  This problem must be solved recursively.


// Repeating pattern


// Where does the pattern break


// Base Case


// Recursive Case


// Recrusive Step






function exponent(base, power) {

}



console.log(exponent(2, 5));

// exponent(base, power);   // 1st frame,   base = ,   power = 
// exponent(base, power);   // 2nd frame,   base = ,   power = 
// exponent(base, power);   // 3rd frame,   base = ,   power = 
// exponent(base, power);   // 4th frame,   base = ,   power = 
// exponent(base, power);   // 5th frame,   base = ,   power = ,  returns ,    popped off the stack
// 4th frame,     return from 5th frame = ,    returns ,     popped off the stack
// 3rd frame,     return from 4th frame = ,    returns ,     popped off the stack
// 2nd frame,     return from 3rd frame = ,    returns ,     popped off the stack
// 1st frame,     return from 2nd frame = ,    returns ,     popped off the stack
// Final return value: