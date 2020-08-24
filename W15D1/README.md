# Intro to Redux

Redux is a package that we use to manage data flow throughout our application.

## `store`

The **store** holds the global state of our entire application. It also gives us
methods to show the current state and to trigger a change in the state.

`store` methods:

* `getState()` - returns the current state
* `dispatch(action)` - triggers a change in the state based on the action
* `subscribe(listenerCb)` - calls `listenerCb` when the store's state changes

## `action`

An **action** is a POJO with a `type` key and optional payload keys. The `type`
key needs to be a string that uniquely identifies the action.

Example of an action:

```js
{
  type: "CHANGE_SOMETHING",
  [optional payload keys]
}
```

An **action creator** is a function that returns an action. It's used to define
customized payloads.

Example of an action creator:

```js
const changeSomething = (payload) => {
  return {
    type: "CHANGE_SOMETHING",
    payload
  };
};
```

Actions define the triggers of change to the Redux store state. To trigger a 
change, you need to call the store's `dispatch` method and with an action as an
argument.

## `reducer`

A **reducer** dictates how the state should change based on an **action**'s
`type`. A reducer is a function that returns a new state if the state needs to 
be changed. Otherwise, it returns the old state unchanged.

Example of a reducer:

```js
const reducer = (state = {}, action) => {
  // state = current state
  let newState;
  switch (action.type) {
    case "CHANGE_SOMETHING":
      newState = { ...state };
      // do something with the newState
      return newState;
    case "CHANGE_SOMETHING_ELSE":
      newState = { ...state };
      // do something with the newState
      return newState;
    default: 
      return state; // if no action.type matches, then return default state
  }
};
```

![Redux Flow]



[Redux Flow]: ./redux-flow.png