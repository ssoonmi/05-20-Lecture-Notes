# Connect

Using `connect`, you can pass specific slices of the store's `state` and specific `action-dispatches` to a React component as `props`.

The React-Redux `connect` function is a `higher-order function`. 

`connect` takes two arguments (`mapStateToProps` and `mapDispatchToProps`) and returns a function.

The returned function will take a React component as an argument and return a new React component.


Ex:
```javascript
  import React from 'react';
  import { connect } from 'react-redux';
  import MyComponent from './MyComponent';

  const mapDispatchToProps = () => {
    // we'll go over this soon
  }

  const mapDispatchToProps = () => {
    // we'll go over this soon
  }

  const createConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  );

  const ConnectedComponent = createConnectedComponent(MyComponent);

  export default ConnectedComponent;
```

