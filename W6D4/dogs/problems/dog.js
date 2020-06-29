class Dog {
    constructor(name){
        this.name = name;
    }

    chainChaseTail(n){
        for(let i=0; i < n; i++){
            this.chaseTail();
        }
    }

    chaseTail(){
        console.log("Chaising my tail");
    }
}

module.exports = Dog;