// ====== Conditionals ===:
let myBoolean = false;
if (myBoolean) {
    console.log("hi");
} else {
    console.log("hello");
}


myBoolean = 5;
if (myBoolean < 6) {
    console.log("this is a truthy value");
}
if (myBoolean < 10 ) {
    console.log("this is a falsey value");
}

// 'else' is mutually exclusive:


let hungerLevel = 5;
if (hungerLevel < 1) {
    console.log('not hungry yet');
} else if (hungerLevel <= 5) {
    console.log('snack time!');
} else if (hungerLevel <= 9) {
    console.log('Time for a meal!');
} else {
    console.log('HANGRY!');
} else if (hungerLevel <= 9) {
    console.log('almost HANGRY!');
} 





// ====== Loops ===:

let ticker = 3; 

while (ticker > 0 ) {
    console.log("I ran a lap!");
    ticker--;
}

for (let i = 0; i < 3; i++) {
    console.log("I ran a lap!")
}
// I ran a lap!
// I ran a lap!
// I ran a lap!
// I ran a lap!
// I ran a lap!
// I ran a lap!




// ======= Amazing Arrays === :
let array = [];

array.push(4);
array.push(5);
array.push(6);
array.push("sup");

console.log(array); // => [4, 5, 6, 'sup']

console.log(array[0]); // => 4
console.log(array[array.length - 1]); // => 'sup'
// console.log(array[3]); // => 'sup'

console.log(array.length); // => 4