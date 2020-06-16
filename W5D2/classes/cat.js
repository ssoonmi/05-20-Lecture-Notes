// can name this import whatever we want
const AnimalClass = require('./animal');

class Cat extends AnimalClass {
  constructor(name, age, color) {
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

// when we import this file somewhere else and want to get Cat, 
// we need to extract the key of Cat from the exported object
// by either object destructuring or getting the key of Cat from the exported object
module.exports = {
  Cat: Cat
}