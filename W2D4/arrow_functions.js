// Arrow Functions
// 1. Syntax
// 2. Scoping with Arrow Functions

function logger(title, body) {
  console.log("\x1b[31m%s\x1b[0m", title);
  console.log('    ', body);
}

// Named Function
function sayHelloNamed(name) {
  return 'hello ' + name;
}

logger('Named Function', sayHelloNamed('Justin'));

// Unnamed Function
const sayHelloUnnamed = function(name) {
  return 'hello ' + name;
};

logger('Unnamed Function', sayHelloUnnamed('Soon-Mi'));







// Fat Arrow Function with EXPLICIT return
// curly braces around body of fat arrow functions need explicit return keyword
// const sayHelloExplicit = (name) => {
//   return 'hello ' + name;
// };

// No parentheses surrounding parameter needed if ONLY one parameter
const sayHelloExplicit = name => {
  return 'hello ' + name;
};

logger('Fat Arrow Function with Explicit Return', sayHelloExplicit('Gordon'));












// Fat Arrow Function with IMPLICIT return
// Also called a One-Liner Fat Arrow function
// should only use this when the function's body is NOT multi-line
const sayHelloImplicit = (name) => 'hello' + name;

// can use parentheses around function body as well
// const sayHelloImplicit = (name) => ({
//   hello: 'Angela'
// });

// notice the semicolon ; at the end

logger('Fat Arrow Function with Implicit Return', sayHelloImplicit('Angela'));






console.log('\n--------------\n');




// Example using fat arrow functions
const arr = [1, 2, 3];

const newArr = arr.map(el => {
  return el + 2;
});
// const newArr = arr.map(function(el) {
//   return el + 2;
// });

logger('Original Array, `arr`', arr);
logger('New Mapped Array, `newArr`', newArr);




console.log('\n--------------\n');






// Context using Fat Arrow functions
const pony = {
  name: 'Lucy',
  wrappedSayName: function() {
    console.log(this.name);
    return function() {
      console.log(this.name);
      console.log('Hello my name is ' + this.name);
    }
  },
  wrappedArrowSayName: function() {
    console.log(this.name);
    return () => {
      console.log('Hello my name is ' + this.name);
    }
  }
};

pony.wrappedSayName = pony.wrappedSayName.bind(pony);
let wrap = pony.wrappedSayName().bind(pony); // method-style invocation
wrap(); // function-style invocation

console.log('-----------');

wrap = pony.wrappedArrowSayName(); // method-style invocation
wrap(); 

console.log('-----------');

const arrowSayName = pony.wrappedArrowSayName; // not invoking
wrap = arrowSayName(); // function-style invocation
wrap();



// bound to the context of wherever it's defined






console.log('-----------');

const zoomMeeting = {
  students: ['Christian', 'Ronald','Wren'],
  listStudent: function(studentName) {
    console.log(this.students);
    // console.log(studentName);
  },
  listStudents: function() {
    const listStudent = this.listStudent;
    listStudent(); // function-style
    console.log('***');
    this.students.forEach(listStudent);
  }
};

zoomMeeting.listStudents();