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

parks.forEach(function (park, idx, arr) {
  console.log(park);
  console.log(idx);
  console.log(arr);
  console.log("------------");
});


let str = "";

parks.forEach(function(ele){
  str = ele + " ";
})

console.log(str)


// --------------------------------------------

// An example showing that the first argument to the forEach method is an actual function.

// let nums = [1, 2, 3, 4];

// let numLogger = function (subArr, i) {
//   console.log(i);
// }

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