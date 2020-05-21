// Map returns a new array and does not mutate the original array.
// All elements of the new array will be determined by the return value 
  // of the function inside the .map() method.

let parks = ['Zion', 'Yellowston', 'Acadia', 'Yosemite'];

// Old Way

// let newParks = [];

// for (let i = 0; i < parks.length; i++) {
//   let park = parks[i];
//   newParks.push(park.toUpperCase());
// }

// console.log(parks);
// console.log(newParks)

//  ------------------------------------------

//  New Way 

let newParks1 = parks.map(function (park) {
  return park + ' National Park';
});

function makeNational (park) {
  return park + ' National Park';
}

let newParks2 = parks.map(makeNational);

console.log(parks);
console.log(newParks1);
console.log(newParks2);