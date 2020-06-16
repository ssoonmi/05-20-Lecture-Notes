class Mammal {
  constructor(habitat) {
    this.habitat = habitat;
    this.liveBirth = true;
    this.warmBlooded = true;
    this.hasHair = true;
  }

  typicalMammal() {
    const typical = this.liveBirth && this.warmBlooded && this.hasHair;
    return typical;
  }
}

class Platypus extends Mammal {
  constructor(habitat){
    super(habitat);
    this.liveBirth = false;
  }

  attack(){
      console.log("Playpus attakced with venomous claws!");
  }
}

