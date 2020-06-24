const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    // resolve('hello world');
    reject('error');
    console.log(myPromise);
  }, 2000);
});

console.log(myPromise);

myPromise
  .then((helloWorld) => {
    console.log('promise.then', helloWorld);
    return 'return of first then'
  }, (rejectedError) => {
    console.log('promise.then', rejectedError);
  })
  .then((returnOfFirstThen) => {
    console.log(returnOfFirstThen);
    return new Promise((resolve, reject) => {
      reject('second then error');
    })
  })
  .then((returnOfSecondThen) => console.log(returnOfSecondThen))
  .catch((error) => {
    console.log('catch', error);
  });

// myPromise
//   .then((arg) => {
//     console.log('first then', arg);
//     return 42;
//   }, (reason) => {
//     console.log('first then rejected', reason);
//   })
//   .then((arg) => {
//     console.log('second then', arg);
//   }, (reason) => {
//     console.log('first then rejected', reason);
//   })
//   .catch((reason) => {
//     console.log('catch rejected', reason);
//   });





