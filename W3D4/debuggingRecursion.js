//  We want to write a function reverseString(string) which takes in a string
//      and returns a new string with all characters in the reverse order.
//  This problem must be solved recursively.

// There is an error in the below code. We must use our debugging skills to fix this error.




// Debugging Steps:

// 1. Break the code out into multiple lines

// 2. console.log(); relevant values in a readable manner

// 3. Determine what values should be logged on to the screen before checking the output


function reverseString(string) {
    if(string.length == 0){
        console.log('Base case: ' + string);
        return string;
    }

    const lastChar = string[string.length - 1];         // y
    const restOfWord = string.slice(0, string.length - 1);                 // pupp
    console.log('lasChar: ' + lastChar);
    console.log('restOfWord: ' + restOfWord);

    const reversedVal = reverseString(restOfWord);      // arg = pupp
    console.log('reversedVal: ' + reversedVal);
    console.log('\n ----------- \n')

    return(lastChar + reversedVal);
}

const lilDog = 'puppy';

console.log(reverseString(lilDog));