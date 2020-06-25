const promiseCb = (resolve, reject) => {
  setTimeout(() => {
    // resolve(4);
    reject(3);
  }, 1500);
};

const myPromise = new Promise(promiseCb);

const res = myPromise + 2; // 6

const resolvedCb = (myPromiseResult) => {
  // console.log(myPromiseResult) // 4
  return 10;
};

const rejectedCb = (myPromiseReject) => {
  // console.log(myPromiseReject) // 3
  return 9;
};

const secondThenCb = (res) => {
  // console.log(res) // 10 or 9 depending on if promise was rejected or resolved
}

const catchCb = (error) => {
  // will be run if resolvedCb, rejectedCb or secondThenCb has an error
};

myPromise
  .then(resolvedCb, rejectedCb)
  .then(secondThenCb)
  .catch(catchCb)

// 3 states
  // pending
  // resolved
  // rejected