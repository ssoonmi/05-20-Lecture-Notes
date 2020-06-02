# Asynchronicity

## Synchronicity vs Asynchronicity

[Sync vs Async Demo]

### Synchronous

- We must wait for the current command to complete before moving on and executing another command
- Because of this, there is an inherent order to synchronous code!

### Asynchronous

- Can continue to execute another command, even if the current command has not yet been completed
- No guaranteed order of completion in asynchronous code (unlike synchronous code where code is executed line by line)

## `setTimeout`

[setTimeout Demo]

- first argument to `setTimeout` is a callback function that you want to execute after `x` amount of time
- second argument to `setTimeout` is the `x` amount of milliseconds you want to wait before executing the callback function
- any remaining arguments to `setTimeout` will be passed into the callback function

## `setInterval`

[setInterval Demo]

- first argument to `setInterval` is a callback function that you want to execute every `x` amount of time
- second argument to `setInterval` is the `x` amount of milliseconds that you want in between every execution of the callback function
- any remaining arguments to `setInterval` will be passed into the callback function

# More Theory

## Threading

[Threading Demo]

- **Thread of execution** is a sequence of commands
- **Single-Threaded Execution**: **Only one** command can be processed at a time
- **Multi-Threaded Execution**: **Multiple** commands can be processed at a time

### Kitchen Analogy
![Single vs Multi Threading Kitchen Analogy]

- **JavaScript is a single-threaded language.** It can only execute one process at a time.
- If a command in JavaScript takes a long time to execute, it will delay all other commands

## Stacks and Queues

- **Stack Data Structure**: pile of many items
  - new items must be placed on top of the pile (push)
  - only the very top of the pile can be removed (pop)

- **Queue Data Structure**: like a line of checkout at a grocery store
  - new items are added to the back of the queue (enqueue)
  - items are removed from the front of the queue (dequeue)

![Stack vs Queue]

## Call Stack

[Call Stack Demo]

- **Call Stack** is the structure used in the JS runtime to track the execution of function calls
  - **Stack Frames** are the items placed in the call stack
  - When a function is called, a new frame is pushed onto the stack
  - When a function returns, the frame on the top of the stack is popped off the stack

## Event Loop

[Event Loop]

- **Event** an action that acts as a trigger for other actions
  - examples:
    - keys being pressed
    - buttons being clicked
    - page being scrolled
    - timeouts expiring
- **Event Loop** is the model of execution that JS uses and is comprised of the call stack and a message queue
  - call stack is used to track the actively running tasks
  - message queue is used to store things that can't be fulfilled yet because the stack is busy
- **Message Queue** is used to track the handling of events
  - **Messages** are items enqueued into and dequeued out of a message queue
  - When a new event occurs, but the call stack is busy processing another command, a message for that event is **enqueued** or added to the back of the message queue
  - When the runtime is finished with its current command, the next message is **dequeued** or taken out of the front of the message queue and processed

## User Input In Node

[User Input In Node]

- We can receive user input in NodeJS through the terminal
- We will be using the built-in NodeJS module, `readline`
- `readline.createInterface` is a function that when invoked will return an interface used to output text to the terminal and receive input from the terminal

```javascript
// use terminal for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

[`readline` Documentation]

## EOD

[EOD Lecture Notes]

## Learning Objectives
1. Identify JavaScript as a language that utilizes an event loop model
2. Identify JavaScript as a single threaded language
3. Describe the difference between asynchronous and synchronous code
4. Execute the asynchronous function setTimeout with a callback.
5. Given the function `function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }` and the function `function callback() { console.log("callback"); }`, predict the output of `asyncy(callback);`
6. Use setInterval to have a function execute 10 times with a 1 second period. After the 10th cycle, clear the interval.
7. Write a program that accepts user input using Node’s readline module

[Sync vs Async Demo]: ./sync_vs_async.js
[setTimeout Demo]: ./setTimeout.js
[setInterval Demo]: ./setInterval.js
[Threading Demo]: ./threading.js
[Single vs Multi Threading Kitchen Analogy]: ./single_vs_multi_threading.png
[Stack vs Queue]: ./stack_vs_queue.png
[Call Stack Demo]: ./call_stack.js
[Event Loop]: ./event_loop.js
[User Input In Node]: ./user_input_in_node.js
[`readline` Documentation]: https://nodejs.org/api/readline.html
[EOD Lecture Notes]: ./eod.js