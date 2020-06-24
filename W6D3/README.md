# `async` and `await`

`async`/`await` allows us to make `Promise`s synchronous with other code.

`async` is a keyword that is used in front of a `function` definition to make the `function` return a `Promise` and allow it to use the `await` keyword
  - once all the lines of code are executed in the `async` function, it will change the returned `Promise` to be `resolve`d

`async`/`await` are keywords that we need to use together and should not be used without each other.

`await` is used in front of a `Promise` in an `async function`.
  - It should not be used in front of a line of code that isn't a `Promise`
  - evaluates to the result of the `await`ed `Promise` (or what the `Promise`'s `resolve` value is)

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000)
});


async function asyncFunc() {
  console.log('before await');
  const res = await myPromise; // res = 3
  console.log('after await');
}

asyncFunc() // returns Promise pending until all lines of code have been executed
// before await
// 3
// after await (waits for myPromise to resolve)
```

## Learning Objectives

1. Use `async`/`await` with promise-based functions to write asynchronous code that behaves synchronously.