function cookSteak() {
  console.log('Started cooking steak');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Finished cooking steak');
      // resolve('Cooked Steak');
      reject('Set stove on fire');
    }, 2000);
  });
}

function bakeCake() {
  console.log('Put cake in the oven');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Take cake out of oven');
      // resolve('Yummy Cake');
      reject('Burnt Cake');
    }, 5000);
  });
}

function mashPotatoes() {
  console.log('Prepping to mash potatoes');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Finished mashing potatoes');
      resolve('Mashed Potatoes');
    }, 3000);
  });
}

const dinnerDateNight = [
  mashPotatoes(),
  bakeCake(),
  cookSteak()
];


Promise.all(dinnerDateNight) // returning a promise
  .then((fancyDinner) => { 
    console.log('Dinner is served!', fancyDinner);
  })
  .catch((reason) => {
    console.log('Quickly make up an excuse to reschedule date night because you', reason);
  });