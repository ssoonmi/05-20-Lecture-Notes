// const { createInterface } = require('readline');
const createInterface = require('readline').createInterface;
console.log(createInterface);

// use terminal for input and output
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const handleFirstQuestion = function (answer) {
  console.log(`Hello ${answer}!`);
  rl.question('Where are you from?\n', handleSecondQuestion);
};

const handleSecondQuestion = answer => {
  console.log(answer, 'is a great place');
  rl.question('How are you doing?\n', handleThirdQuestion);
};

const handleThirdQuestion = answer => {
  console.log('very cool,', answer);
  rl.close();
};

rl.question('What is your name?\n', handleFirstQuestion);

// DON'T do this:
// const rl2 = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl2.question('What is your fav number?\n', num => {
//   console.log(Number(num) === 42);
// });