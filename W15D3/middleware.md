# Middleware

When a dispatch is made, the middleware intercepts the action before it reaches the reducer. 



## Applying middleware to a Redux store

In the redux library's `createStore` function used to instantiate a `store`. `createStore` accepts three arguments:
(reducer, preloadedState, enhancer)

Middleware is given to the `store` via the optional `enhancer` argument.






Ex:
```javascript
// ./src/store.js

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // third-party logger middleware
// the logger middleware prints the store's state before and after an action is processed.

import rootReducer from './reducers/rootReducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger),
  );
};

export default configureStore;
```







## How to write a middleware function

A Redux middleware must always have the following signature:

```javascript
const middleware = store => next => action => {
 // swhatever logic we want to do
 return next(action);
};
```


1. Middleware receives the `store` as an argument and returns a function.

2. That function takes the `next` link in the middleware chain as an argument and returns another function.

3. This function receives the `action` and then triggers any side effects before returning the result of `next(action)`. 







Example of our own logger middleware:
```javascript
  // utils/logger.js

  const logger = store => next => action => {
    console.log('Action received:', action);
    console.log('State pre-dispatch:', store.getState());

    let result = next(action);

    console.log('State post-dispatch:', store.getState());

    return result;
  };
```