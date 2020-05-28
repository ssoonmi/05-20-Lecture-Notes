//  Global Scope

let cities = ["NYC", "SF"];

//console.log(cities);




// Local / Function Scope


function sayThings() {
  // let cities = ['Bogota', 'Madrid'];
  // console.log(cities);

  let word = 'dinosaur';
  console.log(word);
}

// console.log(cities); // prints NYC & SF
// console.log(word); // ReferenceError
//sayThings();










// Block Scope

if (true) {
  let cats = ['Roma', 'Luigi'];
  //console.log(cats); // prints Roma & Luigi
}

//console.log(cats) // ReferenceError

// This example was extended to show how scope within nested blocks works
// As Justin pointed out, it also leads directly into closures

let carrot = 'snake';

if (true){
  let carrot = 'doggie!';
  //console.log(carrot);
  if (true) {
    carrot = 'carrot';
    console.log(carrot); // prints carrot
  }
  for(let i = 1; i < 5; i++){
    console.log(`i is ${i}`);
  };
  //console.log(`i is ${i}`); // reference error
  console.log("line 57:" ,'george' ,carrot);
}

console.log(carrot); // prints snake