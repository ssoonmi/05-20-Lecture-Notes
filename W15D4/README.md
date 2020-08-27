# React, React-Redux, and React-Router-Dom Hooks

## React Hooks

The reasons you wanted to use Class components over Functional components were that you needed to use component state, and/or you needed life-cycle methods. 

React hooks allows Functional components to use component state and life-cycle methods so there is no need for Class components anymore.

- Hooks need to be defined at the top of the Functional Component

## [React Hooks Docs][1]

The [React docs on Hooks][1] are awesome and give great explanations for the available hooks and some use cases for them. 

### `useState`

Makes a component state variable and a function to set that state variable

```js
function ExampleWithASingleState() {
  const stateVarArr = useState('initial state variable value');
  const stateVar = stateVarArr[0];
  const setStateFunc = stateVarArr[1];

  setStateFunc(newStateVal); // sets `stateVar` equal to `newStateVal`
  // ...
}
```

```js
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

### `useEffect`

Combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` life-cycle methods all into one.

```js
useEffect(() => {
  // runs when componentDidMount
  return () => {
    // runs when componentWillUnmount or when dependency list changes
  };
}, [/* Dependency List */]);
```

```js
function ExampleWithUseEffect() {
  useEffect(() => {
    
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
}
```

## [React Router Hooks Docs][2]

The [React Router Dom docs on its hooks][2] are a great resource for understanding how the hooks work.


[1]: https://reactjs.org/docs/hooks-intro.html
[2]: https://reactrouter.com/web/api/Hooks
