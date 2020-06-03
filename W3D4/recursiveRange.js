//  We want to write a function recursiveRange(num1, num2) which takes two numbers,
//    and returns an array of all integers between the two numbers (inclusive). This
//    This should be an inclusive range.
//  This problem must be solved recursively.


// Repeating pattern


// Where does the pattern break


// Base Case


// Recursive Case


// Recrusive Step






function recursiveRange(base, power) {

}



console.log(recursiveRange(2, 6));

// recursiveRange(num1, num2);   // 1st frame,   num1 = ,   num2 = 
// recursiveRange(num1, num2);   // 2nd frame,   num1 = ,   num2 = 
// recursiveRange(num1, num2);   // 3rd frame,   num1 = ,   num2 = 
// recursiveRange(num1, num2);   // 4th frame,   num1 = ,   num2 = 
// recursiveRange(num1, num2);   // 5th frame,   num1 = ,   num2 = ,  returns ,    popped off the stack
// 4th frame,     return from 5th frame = ,    returns ,     popped off the stack
// 3rd frame,     return from 4th frame = ,    returns ,     popped off the stack
// 2nd frame,     return from 3rd frame = ,    returns ,     popped off the stack
// 1st frame,     return from 2nd frame = ,    returns ,     popped off the stack
// Final return value: