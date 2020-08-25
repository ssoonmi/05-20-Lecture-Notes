# Splitting and Combining Reducers
* [`combineReducers` example](./videoCode/02-fruit-stand-redux-with-react-containers/src/reducers/rootReducer.js)
* [Subordinate Reducer example](./videoCode/02-fruit-stand-redux-with-react-containers/src/reducers/farmersReducer.js)


## Define Multiple Reducers for Each Slice of State
* Each reducer is composed of only one slice of state (ex: farmer, fruit)
## Combining Reducers
* `combineReducers`
    * import each reducer into a `rootReducer` file
    * create and export your `rootReducer`
    * set your rootReducer to be equal to the return value of the Redux `combineReducers` function when it is invoked with an object as its argument.
        * The keys of this object are the names of your slices of state
        * The values of this object is your reducer for this slice
## Destructure the state object in your components
## Subordinate Reducers
* Shallow vs. Deep Copy
* For each layer of the state, you could create a subordinate reducer to freeze/duplicate that layer and create another layer of the nextState without manipulating your current state
* `Object.freeze()` is great, but also just shallow!
## REVIEW: Redux Workflow with Multiple Reducers
* Create and export the store (do this once!)
* Repeat the following for each feature of your application
    1. Create and export Action(s)
    2. Create and export Reducer
        * Create a subordinate reducer if necessary
    3. Add Reducer to rootReducer
    4. Components (The component flow changes when you add in container components which interact with redux for the presentational componenets)
        * Subscribe/unsubscribe components to your store
        * Access the correct slice of state for your component
        * Import and add dispatches to your actions in your components.