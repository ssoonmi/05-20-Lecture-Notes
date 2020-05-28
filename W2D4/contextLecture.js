// Context
// What does the keyword 'this' refer to?
// The context is determined by HOW a function is invoked


// Different ways of invoking a function
// function style
// context is set to the global object
// 'this' refers to the global object
// method style
// context is set to the object on which the method is called
// 'this' refers to the object on which the method is called


// How to ensure bind never change the context of a function 
// no matter how it is invoked.
// .bind()
// By adding .bind() to the end of a function we set the context
// to equal the argument passed to .bind() 
// 'this' will refer to the argument passed to .bind()


// Scope VS Context
// VERY DIFFERENT THINGS!!

// Scope: 
// Availability of variables at a line in your application
// Context:
// The value of this
// Determined by how a function has been invoked or the .bind() method




const cat = {
    name: 'Luigi',
    age: 2,
    whatIsThis: function () {
        console.log(this);
    },
    nameAndAge: function () {
        console.log(this.name + " is " + this.age + " years old.")
    }
};

// cat.whatIsThis();
// cat.nameAndAge();

const nameAndAgeFunc = cat.nameAndAge;
nameAndAgeFunc();

const boundNameAndAge = cat.nameAndAge.bind(cat);
// boundNameAndAge();








const cat2 = {
    name: 'Roma',
    age: 3
}

function nameAndAge() {
    console.log(this.name + " is " + this.age + " years old.");
}

const dog = {
    name: 'Napo',
    age: 5
}

const catNameAge = nameAndAge.bind(cat2);
const dogNameAge = nameAndAge.bind(dog);

catNameAge();
dogNameAge();