# Connect

Using `connect`, you can pass specific slices of the `Redux store's state` and specific `action-dispatches` to a React component as `props`.

The React-Redux `connect` function is a `higher-order function`: 

  * `connect` takes two arguments (`mapStateToProps` and `mapDispatchToProps`) and returns a function.

The returned function will take a React component as an argument and return a new React component.




Ex:
```javascript
  import React from 'react';
  import { connect } from 'react-redux';
  import MyComponent from './MyComponent';

  const mapStateToProps = () => {
    // we'll go over this soon
  };

  const mapDispatchToProps = () => {
    // we'll go over this soon
  };

  const createConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  );

  const ConnectedComponent = createConnectedComponent(MyComponent);

  export default ConnectedComponent;
```


Typically, to keep things concise, the `ConnectedComponent` variable is omitted:

```javascript
  import React from 'react';
  import { connect } from 'react-redux';
  import MyComponent from './MyComponent';

  const mapStateToProps = () => {
    // we'll go over this soon
  }

  const mapDispatchToProps = () => {
    // we'll go over this soon
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```









## Defining mapStateToProps(state, [ownProps])

The first argument to `connect` is a function, `mapStateToProps` (or `msp` for short).

The first argument to `connect`, `mapStateToProps`, is mandatory.

It tells `connect` how to map the `Redux store's state` into your component's `props`.

`mapStateToProps` must take a first argument, the `Redux store's state`.

`mapStateToProps` will return an object containing the relevant slice of the `Redux store's state` as `props` for your component.





Ex:
```javascript
  import React from 'react';
  import { connect } from 'react-redux';

  const MyComponent = (props) => {
    const name = props.name;
    return (
      <div>{name}</div>
    )
  };

  const mapStateToProps = (state) => ({
    name: state.name;
  });

  export default connect(mapStateToProps)(MyComponent);
```




### ownProps

ownProps is an optional 2nd argument to `mapStateToProps`.



1. ownProps can match the props passed to React component, and include those in `mapStateToProps`.

Ex:
```javascript

  // Some file
  <ConnectedComponent lastName={'Wozniak'}/>

  ----------------------------------------------

  // /src/components/MyComponentConnected

  import React from 'react';
  import { connect } from 'react-redux';

  const MyComponent = ({ firstName, initials }) => {
    return (
      <>
        <h2>{initials}</h2>
        <div>{firstName}</div>
      </>
    )
  };

  const mapStateToProps = (state, ownProps) => ({
    firstName: state.name,
    initials: `${state.name[0]}. ${ownProps.lastName[0]}.`
  });

  export default connect(mapStateToProps)(MyComponent);
```







2. You can also access `React Router props`, such `match` and `history` through `ownProps`

Ex:
```javascript
  import React from 'react';
  import { connect } from 'react-redux';

  const MyComponent = (props) => {
    const name = props.name;
    return (
      <div>{name}</div>
    )
  };

  const mapStateToProps = (state, ownProps) => ({
    name: state.users[ownProps.match.params.userId].name,
  });

  export default connect(mapStateToProps)(MyComponent);
```






## Defining mapDispatchToProps

`mapDispatchToProps` is an optional second argument to `connect`.

`mapDispatchToProps` is a function that accepts the store's `dispatch` method. 

It returns an object containing functions that can be called to `dispatch actions` to the `store`. 

These `action dispatchers` are then passed as `props` to the `component`.


Ex:
```javascript
  import React from 'react';
  import { connect } from 'react-redux';

  const MyComponent = (props) => {
    const handleDelete = props.handleDelete;

    const handleClick = (){
      // logic getting an id for a todo
      handleDelete(id);
    }

    return (
      <div onClick={handleClick}>I'm a todo!</div>
    )
  };


  const deleteTodo = (id) => ({ type: 'DELETE_TODO', id }); // action creators
  const addTodo = (msg) => ({ type: 'ADD_TODO', msg });

  const mapDispatchToProps = (dispatch) => ({
    handleDelete: (id) => dispatch(deleteTodo(id)),
    handleAdd: (msg) => dispatch(addTodo(msg))
  });

  const ConnectedComponent = connect(null, mapDispatchToProps)(MyComponent);
```





Note: 
* The `connect` function is invoked with `null` as a placeholder for the `mapStateToProps` function. The `connect` function expects `mapStateToProps` as its first argument and `mapDispatchToProps` as its second argument.





## Example with msp and mdp

```javascript
  import React from 'react';
  import { connect } from 'react-redux';
  import { deleteTodo, addTodo } from '../actions/todoActions';

  const MyComponent = ({ firstName, initials, handleAdd, handleDelete }) => {
    return <div>...</div>;
  };

  const mapStateToProps = (state, ownProps) => ({
    firstName: state.name,
    initials: `${state.name[0]}. ${ownProps.lastName[0]}.`
  });

  const mapDispatchToProps = (dispatch) => ({
    handleDelete: (id) => dispatch(deleteTodo(id)),
    handleAdd: (msg) => dispatch(addTodo(msg))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyComponent);
```