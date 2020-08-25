# Integrating Redux into a React Application
* [Redux Store in a React App](./videoCode/00-fruit-stand-redux-with-react/src/store.js)
* [Redux Actions in a React App](./videoCode/00-fruit-stand-redux-with-react/src/actions)
* [Redux Reducers in a React App](./videoCode/00-fruit-stand-redux-with-react/src/reducers)
* [Component with Redux integration](./videoCode/00-fruit-stand-redux-with-react/src/components/FruitSeller.js)
___
## Adding Redux Actions, Reducers and Store to a React Project
* [Redux Cycle - timestamp 1:12 in this video](https://open.appacademy.io/learn/js-py---may-2020-online/week-15-may-2020-online/using-redux-with-react-video)
    * Event handler is triggered (ex: someone hits submit on a form)
    * An action is dispatched to the Redux Store
    * The Store passes the action to ALL of the reducers
    * When it matches a switch's `action.type` case within a reducer, that reducer returns an updated state
    * Any components subscribed to the store are notified that the state has changed
    * The subscribed component(s)retrieve(s) the new state and renders
* Testing actions, reducers, and store BEFORE integrating with a component by adding them to the window in `index.js`
    * Test OFTEN!!! It means less code to wade through with debuggers!


## Updating React Components to Subscribe to a Redux Store's state changes
  * Get the correct slice of state from the store
  * lifeCycle methods
      * `componentDidMount()`
          * store.subscribe()
              * takes a callback which is called every time the store is changed
              * Returns a method we can use to unsubscribe from the store
      * `componentWillUnmount()`
          * invoke the unsubscribe method
## Updating React Components to dispatch actions to a Redux Store
* Dispatching actions from a component
      * in your event listener, add a dispatch of the desired action