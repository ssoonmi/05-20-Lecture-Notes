const { Mammal } = require('../folder1/folder2/mammal');

class Platypus extends Mammal {
  constructor(habitat) {
    super(habitat);
    this.liveBirth = false;
  }

  attack() {
    console.log("Playpus attakced with venomous claws!");
  }
}

exports.Platypus = Platypus;
exports.otherKey = 'hello world!';