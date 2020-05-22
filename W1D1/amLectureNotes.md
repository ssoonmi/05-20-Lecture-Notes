# W1D1 - Welcome!
    - Welcome Lecture
    - Morning Lecture
    - Solo Work!

# How To Learn

- Passive
    - Readings, Flashcards, Videos, Discussions
- Active
    - Coding, Quizzes, Assessments
- Desirable Difficulty
    - You `should feel challenged` throughout the course
    - At the same time, we aren't asking you to build a full app this week
    - Difficulty and complexity will increase throughout the course
-  Repetition:
    - You'll notice repeating information throughout the course. This is intentoinal! 



# The Number Type  
- NOTE: `console.log` is a function in javascript which 'prints' or 'logs' the return value of the inputted code to your console.

```javascript
    console.log(1 + 1);   // 2
    console.log(2.5 - 2); // 0.5
    console.log(3 * 4);   // 12 
    console.log(10 / 2);  // 5

    // Modulo (%) calculates remainder 
    console.log(25 % 5); //5r0 -> 0
    console.log(26 % 5); //5r1 -> 1
    console.log(27 % 5); //4r2 -> 2
```

# String Type
- Single quotes or Double quotes
  - Be consistent
    - 'hello'
    - "hello"
    - "hello' -> BAD!
- Length
  - The `.length` method returns the number of characters in a string:
    - `'code'.length` -> 4
- Indexing Strings
  - Think of an "`Index`" as the positioning of elements 
  - Indices start at 0

```javascript
    // length
    console.log('code'.length);

    // using brackets
    console.log('code'[0]); // 'c'
    console.log('code'[1]); // 'o'
    console.log('code'[2]); // 'd' 

    // indexOf
    console.log('code'.indexOf('c')); // 0
    console.log('cool code'.indexOf('o')); // 1
    console.log('cool code'.indexOf('a')); // return undefined
```
# Boolean 
- What is it?
    - `true` or `false` 

- Not Operator (!)
    - Flips the value of a boolean
    - `!true` -> `false` instead of `true`

- The "And" Operator
    - Only true if both sides are true
    - `true && false` -> false

| A     | B     | A && B |
|:-----:|:-----:|:------:|
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |


- The "Or" Operator (||)
    - True if either side is true
    - `true || false` -> true
    

| A     | B     | A \|\| B |
|:-----:|:-----:|:------:|
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |
    

# Comparison 

```javascript
    // Less than/Greater than
    console.log(5 < 9);      // true
    console.log(5 > 9);      // false
    console.log('a' < 'b');  // true (dictionary order)
    console.log('cat' < 'cats'); // true (dictionary order)

    // Inclusive comparison
    console.log(7 <= 10);    // true
    console.log(10 >= 10);   // true 

    // Equality === and !==
    console.log(2 === 2);    // true
    console.log(2 === 2.1);  // false
    console.log(2 !== 2.1);  // true

    // Two equality operators, === and ==
    console.log(5 === '5'); // false
    console.log(5 == '5');  // true (types are coerced)
    console.log([] == 0);   // true (can be unpredictable)
```

# Variables

```javascript
    // initialization:
    //   - declaration, creating the space for the variable
    //   - assignment, giving a value to the variable

    let state;  // declaration using javascript 'let'
    console.log(state);
    state = 'California'; // assignment
    console.log(state);

    let city = 'Sacramento'; // both (i.e. initialized in one line)
    console.log(city);

    // more assignment
    let age = 5;
    console.log(age); // 5
    age + 5;          // no assignment used, i.e. change not permanent
    console.log(age); // 5
    age = age + 5;    // assignment is used, change is permanent
    console.log(age); // 10
    age += 5;         // assignment is used, this is shorthand
    console.log(age); // 15

    // Using ++ and -- 
    age++;
    console.log(age); // 16
    age--;
    console.log(age); // 15
```

# Functions
  - blocks of code that we can invoke multiple times
  - prevent us from having to rewrite code

## How to define your own function:
```js
// keyword    name        parameters        code block
function nameOfFunction(parameter1, parameter2){
  // code to run whenever we invoke/call the function
}
```

## How to call a function:
  - Using parentheses invokes the function.
  ``` js
    nameOfFunction(argument1, argument2);
  ```

### `return` keyword
  - By default, functions will return `undefined`.
  - If we want to return anything else, we use the `return` keyword:
    ```js
    function addTwo(num1, num2) {
      return num1 + num2;
    }
    console.log(addtwo(1, 2)); // 3
    ```
  - The `return` keyword stops executing code, nothing else below is run
    ```js
    function addTwo(num1, num2) {
        console.log("I will be run.");
        return num1 + num2;
        console.log("I won't be run."); /// after the return, will not be run
      }
    console.log(addTwo(1, 2)); 
    // "I will be run."
    // 3

    ```