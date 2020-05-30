// Context
// regular function with function keyword
  // check if its binded
  // check how it's being invoked (function/method-style?)

// fat-arrow always takes context of where it's defined

const makeDog = function(name) {
  const dog = {
    name: name
  };
  dog.bark = cat.meow
  return dog;
};

const digby = makeDog('Digby');
console.log(digby.name);

const fido = makeDog('Fido');
console.log(fido['name']);

// changing fido's name doesn't change digby's name because of closure!
// fido.name = 'fido';
// console.log(fido);
// console.log(digby);

digby.bark(); // method-style, not binded => context = digby
const digbyBarks = digby.bark;
digbyBarks(); // function-style, not binded => context = global

const fidoBarks = digby.bark.bind(fido);
fidoBarks(); // function-style but binded => context = fido

// const cat = {
//   name: 'Fluffy'
// }
// cat.meow = function () {
//   console.log(this);
// }
// const dog = {
//   name: name
// };

// dog.bark = cat.meow;

// cat.meow(); // context will be cat
// dog.bark(); // context will be dog