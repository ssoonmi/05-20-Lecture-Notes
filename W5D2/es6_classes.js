// ES6 Class Syntax
class Animal {
  // constructor method that will be called when calling Animal constructor-style (with new keyword)
  constructor(name, age) {
    this.name = name; // instance variables
    this.age = age;

    // don't do this because it will create a new instance of getAge for every Animal instance created
    // instead, you should define methods on the prototype of Animal
    // this.getAge = function() {
    //   return this.age;
    // };
  }

  getAge() { // instance method
    return this.age;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  static getAllNames(...animals) { //static method
    return animals.map(animal => animal.name);
  }
}

// constructor-style invocation
const digby = new Animal('Digby', 6);
const sage = new Animal('Sage', 10);
// console.log(Animal.getAllNames(sage, digby));

Animal.prototype.hello = function() {
  return `${this.name} says hello`;
};


// remember the other styles?

// method-style invocation
// const obj = {
//   whatever: 'whatever',
//   fn: function() {
//     console.log(this);
//     // console.log(this.whatever);
//   }
// }

// obj.fn();

// function-style invocation
// const fn = obj.fn;
// fn();

// constructor-style invocation
// new fn();




// Inheritance
class Cat extends Animal {
  constructor(name, age, color) {
    // can call super that will call the constructor method for Animal
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.color = color;
  }

  getAge() {
    return this.age * 7;
  }

  meow() {
    return `${this.name} adorably meows at you.`;
  }
}


const fluffy = new Cat("Fluffy", 4, 'orange');

// fluffy.getAge will look to prototype of Cat first then prototype of Animal
console.log(fluffy.getAge());

// can make digby, a non-Cat meow, if we really wanted to
const meow = fluffy.meow;
// const meow = Cat.prototype.meow;
console.log(meow.call(digby));

