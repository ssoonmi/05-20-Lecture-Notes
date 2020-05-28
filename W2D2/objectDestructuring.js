// Destructuring
  // A way to extract data from objects and arrays
    // Arrays
    // Objects
    // Alias Destructuring
      // Saving extracted values under a new variable name
    // Nested Destructuring
      // Extracting values from nested objects
    // Function Parameters
      // Extracting values in the function parameters from a passed in argument








// ---------------------------------------------------------

// Destructuring elements from an Array
  // Order matters!

let colors = ['red', 'purple', 'green', 'orange'];

// Setting values in an an array equal to a variable using index notation
// let firstColor = colors[0];
// let thirdColor = colors[2];

// Object destructuring on an array:
  // Order matters! 
  // Values will be assigned in the order they are stored in the array
let [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);
// console.log(thirdColor);







// ----------------------------------------------------------

// Destructuring values from an object.


// PT I

  // Order does not matter!
  // We must reference the object's keys to acces the corresponding values

  let instructorObject = {
    g: 'Gordon',
    s: 'Soon-Mi',
    a: 'Angela'
  };

  // let { g, s, a } = instructorObject;

  // console.log('\n--------- \n \nValue under variable g: \n');
  // console.log(g);
  // console.log('\n--------- \n \nValue under variable s: \n');
  // console.log(s);
  // console.log('\n--------- \n \nValue under variable a: \n');
  // console.log(a);
  // console.log('\n');







// PT II

  // Order does not matter!
  // let { a, g, s} = instructorObject;

  // console.log('\n--------- \n \nValue under variable g: \n');
  // console.log(g);
  // console.log('\n--------- \n \nValue under variable s: \n');
  // console.log(s);
  // console.log('\n--------- \n \nValue under variable a: \n');
  // console.log(a);
  // console.log('\n');











// PT III

  // Alias Destructuring
    // We can assign the values stored under keys 
      // to be stored under a different variable name

  // let instructorObject = {
  //   g: 'Gordon',
  //   s: 'Soon-Mi',
  //   a: 'Angela'
  // };

  let { g: spectacular, s: amazing, a: superStar } = instructorObject;

  spectacular = 'Justin';
  // console.log(instructorObject.g); // Prints 'Gordon'

  // console.log('\n--------- \n \nValue under variable spectacular: \n');
  // console.log(spectacular);
  // console.log('\n--------- \n \nValue under variable amazing: \n');
  // console.log(amazing);
  // console.log('\n--------- \n \nValue under variable superStar: \n');
  // console.log(superStar);
  // console.log('\n');








// PT IV

  // Nested destructuring
    // Access the values stored in objects
      // which are nested inside of other objects

  let dog = {
    name: 'Max',
    age: 3,
    status: 'Good boy',
    tricks: ['sit', 'speak', 'roll over', 'solve calculus'],
    owner: {
      firstName: 'Justin',
      lastName: 'Meyer'
    }
  };

  let { owner: { firstName } } = dog;
  let { tricks: [ trick1, trick2, trick3 ] } = dog;

  // console.log('This dog is loved by ' + firstName);

  // console.log('This dog can ' + trick1 + " and " + trick3 );










// -----------------------------------------------------------

// Destructuring Objects for function parameters
  // We can destructure an object directly in the parameters of a function


let alvin = { name: 'Alvin', city: 'NYC', neighborhood: 'Brooklyn' };
let rose = { name: 'Rose', city: 'SF', neighborhood: 'Oakland' };

function nameAndCity(person) {
  let name = person.name;
  let city = person.city;
  let neighborhood = person.neighborhood;

  console.log(name + ' is from ' + city + ', ' + neighborhood);
}


// We can directly access the values we want in an object by 
  // referencing the corresponding keys using the syntax shown below
function destructuredNameAndCity({ name, city }) {
  console.log(name + ' is from ' + city);
}

nameAndCity(alvin);
// destructuredNameAndCity(rose);
