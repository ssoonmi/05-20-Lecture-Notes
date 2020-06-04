//  We want to write a function reverseString(string) which takes in a string
//      and returns a string with all characters in the reverse order.
//  This problem must be solved recursively.

// There is an error in the below code. We must use our debugging skills to fix this error.




// Debugging Steps:

// 1. Break the code out into multiple lines

// 2. console.log(); relevant values in a readable manner

// 3. Determine what values should be logged on to the screen before checking the output


function recursiveSum(string) {
    return(string[string.length-1] + string.slice(1));
}

const lilDog = 'puppy';

console.log(recursiveSum(lilDog));