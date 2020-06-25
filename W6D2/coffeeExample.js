// function grindTheBeans(nextTask) {
//   setTimeout(() => {
//     console.log('Done grinding the coffee beans');
//     nextTask();
//   }, 1000);
// }

// function heatTheWater(nextTask) {
//   setTimeout(() => {
//     console.log('Done heating the water');
//     nextTask();
//   }, 2000);
// }

// function addBeansToWater(nextTask) {
//   setTimeout(() => {
//     console.log('Done adding beans to the water');
//   }, 500);
// }

// function enjoy() {
//   setTimeout(() => {
//     console.log('Enjoying the coffee!');
//   }, 750)
// }


// // Callback craziness
// grindTheBeans(() => {
//   heatTheWater(() => {
//     addBeansToWater(enjoy);
//   });
// });

// Goal with Promises:
// grindTheBeans()
//   .then(heatTheWater)
//   .then(addBeansToWater)
//   .then(enjoy);












function grindTheBeans(nextTask) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Done grinding the coffee beans');
      resolve();
    }, 1000);
  });
}

function heatTheWater(nextTask) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Done heating the water');
      resolve('hello');
    }, 2000);
  });
}

function addBeansToWater(nextTask) {
  setTimeout(() => {
    console.log('Done adding beans to the water');
    nextTask();
  }, 500);
}

function enjoy() {
  setTimeout(() => {
    console.log('Enjoying the coffee!');
  }, 750);
}

grindTheBeans()
  .then(heatTheWater)
  .then(() => {
    addBeansToWater(enjoy)
  });