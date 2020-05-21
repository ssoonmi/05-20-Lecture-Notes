// When we define a function, that does not execute the logic we wrote.
// The logic inside the functin will run when we invoke the function.

let isEven = function (num) {
  return num % 2 === 0;
};

let extractEvens = function (numbers) {
  let evens = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (isEven(num)) {
      evens.push(num);
    }
  }

  return evens;
}

// console.log(extractEvens([3, 5, 4, 7, 8]));

let b = function () {
  console.log('starting b')
  console.log('ending b')
}

let a = function () {
  console.log('starting a')
  b();
  console.log('ending a')
}

// a();


let isPrime = function (num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let pickPrimes = function (nums) {
  let primes = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (isPrime(num)) {
      primes.push(num);
    }
  }

  return primes;
}

// console.log(pickPrimes([4, 7, 5, 12]));
// console.log(pickPrimes([31, 25, 9, 16]));