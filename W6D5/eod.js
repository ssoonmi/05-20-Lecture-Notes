function pause(numberOfSeconds) {
  console.log('pause invoked'); // 2
  return new Promise((resolve, reject) => {
    console.log("promise created"); // 3
    // resolve is invoked to indicate a success, reject is a failure
    // if a value is passed to resolve, it will be caught as the first argument to .then()
    // if a value is passed to reject, it will be caught as the first argument to .catch(), or the second argument to .then()
    setTimeout(() => {
      console.log('Timer went off'); // 6
      resolve();
    }, numberOfSeconds * 1000);
    resolve();
    console.log('Finished creating Promise') // 4
  });
}

console.log('Before pause invoked'); // 1

pause(6)
  .then(() => {
    console.log('Time is up!'); // 7
  });

console.log('After pause invoked'); // 5

// async function pause(numberOfSeconds) {
//   console.log('pause invoked'); // 2
//   await new Promise((resolve, reject) => {
//     console.log("promise created"); // 3
//     // resolve is invoked to indicate a success, reject is a failure
//     // if a value is passed to resolve, it will be caught as the first argument to .then()
//     // if a value is passed to reject, it will be caught as the first argument to .catch(), or the second argument to .then()
//     setTimeout(() => {
//       console.log('Timer went off'); // 5
//       resolve();
//     }, numberOfSeconds * 1000);
//   });
//   console.log('Finished creating Promise') // 6
// }

// console.log('Before pause invoked'); // 1

// pause(6)
//   .then(() => {
//     console.log('Time is up!'); // 7
//   });

// console.log('After pause invoked'); // 4