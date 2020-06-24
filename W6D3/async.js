function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('happy dog');
    }, 1000);
  });
}

// walkTheDog() // is a Promise
// walkTheDog()
//   .then(res => console.log('super', res));

const myFunc = async () => { // myFunc returns a Promise
  console.log('starting myFunc');
  const res = await walkTheDog(); // 'happy dog'
  console.log('super', res); // 'super happy dog'
  const res2 = await walkTheDog(res); // 'happy dog'
  console.log('not so', res2, 'meets super', res); // 'not so happy dog meets super happy dog'
  const res3 = await new Promise((resolve, reject) => {
    resolve('yay');
  });
  console.log(res3); // yay;
};

// const res = walkTheDog();
// console.log(res); // pending Promise

// console.log(myFunc()); // Promise pending

myFunc()
  .then(() => console.log('finished walking all dogs'));

// console.log('starting myFunc');
// walkTheDog()
//   .then(res => {
//     console.log('super', res); // 'super happy dog'
//     walkTheDog()
//       .then(res2 => {
//         console.log('not so', res2); // 'not so happy dog'
//       });
//   });


function doChores() {
  console.log('before walking the dog');
  walkTheDog()
    .then(res => {
        console.log(res);
        console.log('after walking the dog');
    });
  return 'done';
}

// console.log(doChores());


async function doChoresAsync() {
  console.log('before walking the dog');
  const res = await walkTheDog();
  console.log(res);
  console.log('after walking the dog');
}

// doChoresAsync().then(result => console.log(result));









// // Numbered Walkthrough

// function walkTheDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('2');
//       resolve('happy dog');
//     }, 1000);
//   });
// }

// async function doChores() {
//   console.log('1');
//   const res = await walkTheDog();
//   console.log('3');
//   return res.toUpperCase();
// }

// async function wrapper() {
//   console.log('0');
//   const finalResult = await doChores();
//   console.log('4');
//   console.log(finalResult + '!!!');
// }

// wrapper();





// // Refactoring the Promise Chain

// function wrapper() {
//   promise1
//     .then(res1 => {
//       console.log(res1);
//       return promise2;
//     })
//     .then(res2 => {
//       console.log(res2);
//       return promise3;
//     })
//     .then(res3 => {
//       console.log(res3);
//     });
// }


// async function wrapper() {
//   console.log(await promise1);
//   console.log(await promise2);
//   console.log(await promise3);
//   console.log(await promise4);
// }


// // Error Handling

// function action() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('uh-oh'); // rejected
//     }, 3000);
//   });
// }

// async function handlePromise() {
//   try {
//     const res = await action();
//     console.log('resolved with', res);
//   } catch (err) {
//     console.log('rejected because of', err);
//   }
// }

// handlePromise();