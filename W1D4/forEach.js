let parks = ['Zion', 'Yellowstone', 'Acadia', "Yosemite"];


// The Old Way:

// for (let i = 0; i < parks.length; i++) {
//   let park = parks[i];
//   console.log(park);
//   console.log(i);
//   console.log(parks);
//   console.log("------------");
// }


// The New Way:

// forEach will invoke some logic on each element elemnt of an array

// parks.forEach(function (park, idx, arr) {
//   console.log(park);
//   console.log(idx);
//   console.log(arr);
//   console.log("------------");
// });

// --------------------------------------------

// An example showing that the first argument to the 
// forEach method is an actual function.

let nums = [1, 20, 13, 7];

function numLogger (num, i) {
  console.log(num);
  console.log(i);
  console.log("-----");
}

// console.log(numLogger);
// nums.forEach(numLogger);



// --------------------------------------------

// A more advacned example:

// let nums = [[1, 2], [3, 4]];

// let numLogger = function (subArr, i) {
//   console.log(i);
//   subArr.forEach(function (num) {
//     // console.log(num);
//   })
// }

// nums.forEach(numLogger);




// ------------------------------------------

// ------   PITFALLS OF .forEach();   -------

// ------------------------------------------


// We CANNOT return inside of .forEach();

// .forEach is not good for search functionality

// Good for simple iteration on an array






// ---------------------------------------------

// Bad use of using .forEach();

let numbers = [1, 6, 3, 4];

function findFirstEvenBad(numbers){

  numbers.forEach(evenIdx);
  
  return null;
}

function evenIdx(num, idx){
  if (num % 2 === 0) {
    console.log(num);
    console.log(idx);
    console.log("-------")
    return idx;
  }
}

console.log(findFirstEvenBad(numbers));





// ---------------------------------------------

// Proper use of .forEach();

function findFirstEvenGood(numbers) {

  for(let i = 0; i < numbers.length; i++) {
    if (number % 2 === 0) {
      return idx;
    }
  }

  return null;
}

console.log(findFirstEvenGood(numbers));