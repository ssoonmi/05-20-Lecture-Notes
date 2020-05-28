// Closure
// When an inner function uses, or changes, 
// variables defined in an outer scope.
// NOT for declaring a variable of the same name in an inner scope.







function sayHi() {
    let name = 'Bart';
    function greeting() {
        // here greeting function closes over, or captures, the name variable
        // to read it's value
        return "Hi there, " + name + "!";
    }

    // Here, we return the return value of the greeting function
    return greeting();
}

// console.log(sayHi());









function nameAndCity() {
    let person = { name: 'Sergey', city: 'Moscow' };

    function changeCity() {
        // here changeCity function closes over the person variable
        // and reassigns a value on an existing key
        person.city = 'Toronto';
    }

    changeCity();
    // the person variable will show the changes from the changeCity function
    return person;
}

// console.log(nameAndCity());










function smoothieMaker() {
    let ingredients = [];

    function addIngredient(ingredient) {
        // Here addIngredient function closes over the ingredients variable
        // to push new elements into the ingredients variable.
        // We have created a private state where we cannot access 
        // the ingredients array from the outside and can only access
        // the variable from the inner function.
        ingredients.push(ingredient);
        return ingredients;
    }

    // Here the return value for smoothiemaker is the return value 
    // is the function addIngredient, NOT addIngredient's return value
    return addIngredient;
}


// Here we initialize we return a new addIngredient function
// which has closed over the ingredients array
const makeSmoothie = smoothieMaker();

console.log(makeSmoothie);
console.log(makeSmoothie('spinach')); // prints [ spinach ]
console.log(makeSmoothie('turmeric')); // prints [ spinach, turmeric ]

// let mySmoothie = makeSmoothie();

// Here we return a new and different addIngredient function
// which has closed over a new a different ingredients array
const makeSmoothie2 = smoothieMaker();

console.log(makeSmoothie2('kale')); // prints [ kale ]  -- does not include spinach and turmeric








function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

let counter1 = createCounter();
let counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// What will this print out?
// console.log(counter2());




// Brief talk of scope and redeclaring a const variable in a loop
for (let i = 0; i < 5; i++) {
    const num = i + 2;
}