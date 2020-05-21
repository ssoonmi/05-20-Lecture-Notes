// Filter returns a new array and does not mutate the original array
// The function inside .filter() must return a boolean
// All elements of the new array will be selected from the original array
  // where the returned boolean expression evaluates to true


let parks = ['Zion', 'Yellowston', 'Acadiaaaaa', 'Yosemite'];

// Old Way

let yParks = [];

for (let i = 0; i < parks.length; i++) {
  let park = parks[i];

  if (park[0] === 'Y') {
    yParks.push(park);
  }
}

// console.log(yParks);


// -------------------------------------------------------------

// New Way

// This is a comment explaining an anti-pattern
// Or don't do anti-patterns!
let selectedParks = parks.filter(function (park) {
  return (park.length > 7) && (park[0] === 'Y') ;
});

console.log(selectedParks);