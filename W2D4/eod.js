const obj = {
  name: 'Example Object',
  unnamedFunc: function() {
    console.log(this.name);
  }
};

// Method-style invocation
obj.unnamedFunc(); // 'Example Object'

// Function-style invocation
const unnamedFunc = obj.unnamedFunc;
unnamedFunc(); // `undefined` because Global context





console.log('-------------------');






// Unnamed Func
const dog = {
  name: 'Digby'
};

const boundFunc = obj.unnamedFunc.bind(dog);
boundFunc(); // Digby
obj.unnamedFunc(); // Example Object







console.log('-------------------');




// Bind Time and Call Time Arguments
// bind time arguments passed in first, then call time arguments
function printAge(...args) {
  const age = args[0];
  const year = args[1];
  console.log(args);
  console.log(this.name + ' is ' + age + ' years old. Born in ' + year);
}

const otherArgs = [2005];

const printDigby = printAge.bind(dog, 12, ...otherArgs);
printDigby(2000);
printDigby(2008);

// const printRealDigby = printAge.bind(dog, 4);
// printRealDigby(2002);