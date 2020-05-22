# W1D1 Learning Objectives

## [Expressions Learning Objectives](#expressions)
  1. [Given a working REPL interface, write and execute a statement that will print “hello world” using console.log](#expressions-objective-1)
  2. [Identify that strings are a list of characters defined by using double or single quotes](#expressions-objective-2)
  3. [Given an arithmetic expression using +, -, *, /, %, compute its value](#expressions-objective-3)
  4. [Given an expression, predict if its value is NaN](#expressions-objective-4)
  5. [Construct the truth tables for &&, ||, !](#expressions-objective-5)
  6. [Given an expression consisting of >, >=, ===, <, <=, compute it’s value](#expressions-objective-6)
  7. [Apply De Morgan’s law to a boolean expression](#expressions-objective-7)
  8. [Given an expression that utilizes operator precedence, compute its value](#expressions-objective-8)
  9. [Given an expression, use the grouping operator to change it’s evaluation](#expressions-objective-9)
  10. [Given expressions using == and ===, compute their values](#expressions-objective-10)
  11. [Given a code snippet using p(#expressions-objective-1)ostfix ++, postfix --, +=, -=. /=, *=, predict the value of labeled lines](#expressions-objective-11)
  12. [Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.](#expressions-objective-12)

## [Intro to Functions Learning Objectives](#intro-to-functions)
  1. [Define a function using function declaration](#functions-objective-1)
  2. [Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value](#functions-objective-2)
  3. [Identify the difference between parameters vs arguments](#functions-objective-3)

# Learning Objectives Examples

## Expressions

### Expressions Objective 1
Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
```js
console.log("hello world");
```

### Expressions Objective 2
Identify that strings are a list of characters defined by using double or single quotes
```js
"hello world" // valid string
'hello world' // valid string
'hello world" // invalid string!
```
```js
"hello world"[0] // 'h' (indices start at 0)
"hello world"[-1] // undefined (indices outside range of characters return undefined)
"hello world"["hello world".length - 1] // d (since we start at 0, the last character is at the index of length - 1)
```

### Expressions Objective 3
Given an arithmetic expression using +, -, *, /, %, compute its value
```js
console.log(1 + 2); // 3
console.log(14 - 6); // 8
console.log(2 * 3); // 6
console.log(6 / 3); // 2
console.log(7 % 6); // 1
```

### Expressions Objective 4
Given an expression, predict if its value is NaN
```js
let num1;
console.log(1 + 2 * 3); // 7 (multiplication is performed first)
console.log((1 + 2) * 3); // 9 (addition is first because it is grouped)
```

### Expressions Objective 5
Construct the truth tables for &&, ||, !
- NOT (!)

| A     | !A    |
|:-----:|:-----:|
| true  | false |
| false | true  |

- AND (&&)

| A     | B     | A && B |
|:-----:|:-----:|:------:|
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

- OR (||)

| A     | B     | A \|\| B |
|:-----:|:-----:|:------:|
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |


### Expressions Objective 6
Given an expression consisting of >, >=, ===, <, <=, compute it’s value
```js
console.log(1 > 4); // false
console.log(1 < 4); // true
console.log(4 >= 4); // true
console.log(4 <= 4); // true
console.log(4 === 4); // true

console.log((1 + 3) % 3 === 2 - 6 / 3 + 1) // true
```

### Expressions Objective 7
Apply De Morgan’s law to a boolean expression
- !(A || B) === !A && !B
- !(A && B) === !A || !B
```js
console.log(!(true || false)) // false
console.log(!true && !false) // false (equivalent to above)
```

### Expressions Objective 8
Given an expression that utilizes operator precedence, compute its value
```js
console.log(1 + 2 * 3 + 4); // 11 (multiplication is performed first, then addition)
console.log(1 + 2 * 3 % 4); // 3 (multiplication and modulo are performed first, then addition)
```

### Expressions Objective 9
Given an expression, use the grouping operator to change it’s evaluation
```js
console.log(1 + 2 * 3); // 7 (multiplication is performed first)
console.log((1 + 2) * 3); // 9 (addition is first because it is grouped)
```

### Expressions Objective 10
Given expressions using == and ===, compute their values
```js
console.log(4 == '4'); // true (coercion takes place)
console.log(4 === '4'); // false (the number and string are compared directly)
```

### Expressions Objective 11
Given a code snippet using postfix ++, postfix --, +=, -=. /=, *=, predict the value of labeled lines
```js
let age = 5;
console.log(age); // 5
age + 5;
console.log(age); // 5 (age was not reassigned above)
age += 5;
console.log(age); // 10 (+= is shorthand for age = age + 5, so age is reassigned)
age *= 5;
console.log(age); // 50
age -= 5;
console.log(age); // 45
age /= 5;
console.log(age); // 9
age++;
console.log(age); // 10 (++ is shorthand for age = age + 1, so age is reassigned)
age--;
console.log(age); // 9
```

### Expressions Objective 12
Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
```js
let variable = 'This is a string';
console.log(variable) // This is a string (The value of the variable is what is printed, not the name.)
variable = 8
console.log(variable) // 8 (The variable can be reassigned from the string to an integer.)
variable = true
console.log(variable) // true (Reassignment to a boolean works, too!)
```

## Intro to Functions
### Functions Objective 1
Define a function using function declaration
  - We use the `function` keyword to declare our intent to create a function.
  - We give our function a name (myNewFunction).
  - We capture any parameters that are passed in and assign them names (parameter1 and parameter2).
  - We open up a block with curly braces to house our function's code.
  - We do any functionality that we want our function to perform.
  - We use the `return` keyword to return a value from our function (otherwise we return `undefined`).
```js
function myNewFunction(parameter1, parameter2) {
  console.log(parameter1);
  console.log(parameter2);
  return parameter1 + parameter2;
}
```

### Functions Objective 2
Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value
```js
function averageOfTwo(num1, num2){
  let sum = num1 + num2;
  let average = sum / 2;
  return average;
}

console.log(averageOfTwo(3, 7)) // 5
```

### Functions Objective 3
Identify the difference between parameters vs arguments
- Parameters are in the function definition. They capture the values passed in to the function (arguments) as variable names and allow us to use those values in our function.
- Arguments are in the function invocation. They are the values that are passed in to the function.
- In [Objective 2](#functions-objective-2) above, `num1` and `num2` are the parameters while `3` and `7` are the arguments.