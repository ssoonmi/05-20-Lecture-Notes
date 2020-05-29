const createMeowValue = () => {
  console.log(this.name);
  let meow = function () {
    console.log(this);
    console.log(this.name + ' meows');
  }
  meow = meow.bind(this);
  return meow;
};

const name = 'Fluffy';

const cat = {
  name: name,
  age: 12,
  createMeow: function () {
    console.log(this.name);
    let meow = () => {
      const hello = 'hello';
      console.log(this.name + ' meows');
    };
    let world = '';
    if (true) {
      world = 'world';
    }
    console.log(world);
    // meow = meow.bind(this);
    return meow;
  }
};

cat.newKey = function () {
  const outermostContext = this;
  const innerFunc = () => {
    secondContext = this;
    console.log(secondContext === outermostContext)
    return function () {
      innermostContext = this;
    }
  };
  return innerFunc.bind(outermostContext);
};

const meow = cat.createMeow(); // method-style invocation
meow(); // function-style invocation

console.log('-------')

const createMeow = cat.createMeow;
const globalMeow = createMeow(); // function-style
globalMeow(); // function-style

function createSmoothie(ingredient) {
  const ingredients = [ingredient];
  return ingredients;
}

// console.log(createSmoothie('banana'));
// console.log(createSmoothie('apple'));





// one parameter only
// first argument is a string
// return an array
// DO NOT USE forEach