// pre-ES6 Class Syntax
function Animal(name, age) {
  this.name = name;
  this.age = age;

  // don't do this because it will create a new instance :
  // this.getAge = function() {
  //   return this.age;
  // };
}

// can't use arrow function otherwise context will be global
Animal.prototype.getAge = function() {
  return this.age;
};

Animal.prototype.setAge = function(newAge) {
  this.age = newAge;
};

Animal.getAllNames = function(...animals) {
  return animals.map((animal) => animal.name);
};

// constructor-style invocation
const fluffy = new Animal('Fluffy', 4);


// DON'T NEED TO KNOW ANYTHING AFTER THIS POINT FOR THE ASSESSMENT



function Cat(name, age, color) {
  Animal.prototype.constructor.call(this, name, age);
  this.color = color;
}

Cat.prototype.meow = function () {
  return `${this.name} adorably meows at you.`;
}


function Intermediate() {
  this.constructor = Cat;
}

Intermediate.prototype = Animal.prototype;
Cat.prototype = new Intermediate();
Intermediate.prototype.constructor = Animal;

// const fluffy = new Cat("Fluffy", 4, 'orange');