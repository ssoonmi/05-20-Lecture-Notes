// Rest Parameters
  // Take in any remaining parameters passed into a function
  // and places them in an array

// JavaScript will NOT tell us if we provided the wrong number of arguments to a function
// If we want to capture all arguments being passed to a function
  // The rest parameter must be the last argument in a function definition
  // We can use the rest parameters to grab all remaining arguments.




function smoothie(ingredient1, ingredient2) {
  console.log('My smoothie has ' + ingredient1 + ' and ' + ingredient2);
}

// smoothie('mango', 'apple');


function restSmoothie(ingredient1, ...otherIngredients) {
  let string = 'My smoothie has ' + ingredient1;
  console.log(' --- Displaying Rest Parameters: ---')
  console.log(otherIngredients);
  console.log(' --- End Display --- \n')

  otherIngredients.forEach(function (ingredient) {
    string = string + ' and ' + ingredient;
  })

  console.log(string);
}

// restSmoothie('mango', 'apple', 'turmeric', 'almond milk');







// ----------------------------------------------------

// Spread Operator
  // Will spread out elements into the appropriate data structures
  // Will spread iterable data types within function arguments





// Spread with Arrays:

let smallDogs = ['chihuahua', 'pomeranian', 'maltese'];
let mediumDogs = ['poodle', 'collie', 'basset hound'];
let largeDogs = ['saint bernard', 'great dane', 'mastiff'];

// In this case,
  // by using the spread operator, we take each element of the array
  // and pass it separately to the new array.
let allDogs = [...smallDogs, ...mediumDogs, ...largeDogs];

// NOTE:
// The above is the same as:
// let allDogs = ['chihuahua', 'pomeranian', 'maltese', 'poodle', 'collie', 'basset hound','saint bernard', 'great dane', 'mastiff'];

// console.log(allDogs);







// Spread with Objects

let onlineInstructors = {
  g: 'Gordon',
  s: 'Soon-Mi',
  a: 'Angela',
  j: 'Justin'
};

let nyInstructors = {
  d: 'David',
  p: 'Paloma',
  k: 'Kafele'
}

let combinedInstructors = { ...onlineInstructors, ...nyInstructors };

// console.log(combiendInstructors);










// Spread when passing arguments to a function

  // The individual values from the array / object are passed 
    // as arguments to the function

function goodDogs (dog1, dog2, dog3) {
  console.log('A ' + dog1 + ' is a happy dog!');
  console.log('A ' + dog2 + ' is a playful dog!');
  console.log('A ' + dog3 + ' is a sleepy dog!');
}

// console.log(smallDogs);
// goodDogs(smallDogs);

// console.log(mediumDogs);
// goodDogs(mediumDogs);

// console.log(largeDogs);
// goodDogs(largeDogs);

