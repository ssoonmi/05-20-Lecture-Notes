# Preloaded State
* [LocalStorage Code from the Video Lecture](./videoCode/01-fruit-stand-redux-with-react-multiple-reducers/src/localStorage.js)
* [Redux Store Utilizing PreLoaded State](./videoCode/01-fruit-stand-redux-with-react-multiple-reducers/src/store.js)
___
Persisted data (such as on a database) that your application can interact with across page reloads.

* preloaded state __must__ match the state shape that the reducers create
* preloaded state is __not__ default state. Default state is the default value found in a reducer

## Preloaded State Without a Database or other API Using the Browser's `localStorage`
1. Helper Methods for getting and updating
    * `loadState()`
    * `saveState()`
2. Update the `store` to save the state if it detects any changes.
3. Load the `preloadedState` into your store when it is initialized