# Promises in JavaScript

- `Promise` in JavaScript - a commitment that sometime in the future, your code will get `a value` or `an error` from some operation 
  - examples for values: reading a file or getting JSON from a Web site
  - examples for errors: the file doesn't exist or the Web site is down

- A `Promise` is a JavaScript class that we can create promises from

## Three States of Promises

1. `Pending` - the Promise object has not resolved. Once it does, the state of the Promise object may transition to either the fulfilled or rejected state.
2. `Fulfilled` - Whatever operation the Promise represented succeeded and your success handler will get called. Now that it's fulfilled, the Promise:
    - must not transition to any other state.
    - must have a value, which must not change.
3. `Rejected` - Whatever operation the Promise represented failed and your error handler will get called. Now that it's rejected, the Promise:
    - must not transition to any other state.
    - must have a reason, which must not change.

## Promise Syntax

- create a `new Promise`

```javascript
const myPromise = new Promise((resolve, reject) => {
  // resolve() // invoking resolve will change state from pending to resolved
  // reject() // invoking reject will change state from pending to rejected
});
```

- `.then` is an instance method for a `Promise`
    - first argument is expected to be a callback function that will be invoked when the promise is resolved, return value is passed into the next `.then`
    - second argument is expected to be a callback function that will be invoked when the promise is rejected

```javascript
myPromise
  .then((resolveArg) => {
    // resolveArg is the argument that gets passed into the resolve function in the promise
    // executed when promise is resolved
  }, (rejectArg) => {
    // rejectArg is the argument that gets passed into the reject function in the promise
    // executed when promise is rejected
  });
```

- `.then` can be chained on a `Promise` that will be executed one right after the other

```javascript
myPromise
  .then(() => 'hello world!')
  .then(() => 'after hello world');
```

- `.catch` is an instance method on a `Promise` to catch errors on any part of the promise or the `.then` chain
    - argument passed in is expected to be a callback function 

## Learning Objectives

1. Instantiate a `Promise` object
2. Use `Promise`s to write more maintainable asynchronous code
3. Use the `fetch` API to make `Promise`-based API calls