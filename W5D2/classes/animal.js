class Animal {
  constructor(name, age) {
    // constructor method
    this.name = name; // instance variables
    this.age = age;

    // this is bad
    // this.getAge = function() {
    //   return this.age;
    // };
  }

  getAge() {
    // instance method
    return this.age;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  static getAllNames(...animals) {
    //static method
    return animals.map((animal) => animal.name);
  }
}

module.exports = Animal;