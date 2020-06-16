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

const obj = {
  Mammal: Mammal
}

module.exports = obj;