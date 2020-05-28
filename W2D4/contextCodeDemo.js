// In the following examples we will predict what will
// be printed to the terminal


function whatIsThis() {
    console.log(this);
}

const pony = {
    name: "Lucy",
    whatIsThis: function () {
        console.log(this);
    },
    sayName: function () {
        console.log('Hello my name is ' + this.name);
    },
    changeName: function (newName) {
        this.name = newName;
        this.sayName();
    }
}


// 1.
// whatIsThis(); 


// 2.
// pony.whatIsThis();


// 3.
// pony.sayName();


// 4.
// pony.changeName("Layla");


// 5. 
// const sayNameFunc = pony.sayName;
// sayNameFunc();


// 6.
// const boundSayName = pony.sayName.bind(pony);
// boundSayName();


// 7.
const bart = {
    name: 'Bart'
}

const boundToBart = pony.sayName.bind(bart);
// boundToBart();


// 8.
const changeBartsName = pony.changeName.bind(bart);
changeBartsName('Sergey');