// Map returns a new array and does not mutate the original array
// All elements of the new array will be populated by the return value 
  // of the function inside the map method

let parks = ['Zion', 'Yellowston', 'Acadia', 'Yosemite'];

// let newParks = [];

// for (let i = 0; i < parks.length; i++) {
//   let park = parks[i];
//   newParks.push(park.toUpperCase());
// }

// console.log(newParks)


let newParks = parks.map(function (park) {
  return park + ' National Park';
});

console.log(parks);
console.log(newParks);