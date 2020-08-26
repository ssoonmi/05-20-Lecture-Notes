
# Adding a Provider to the App Component

The `Provider` component expects a `value` property to set the `context` passed throughout your application. 
You need to wrap your Parent components with provider component tags to give them access to the `context`.


Ex:
```javascript
<SampleContext.Provider value={/* some value */}>
  <ParentComponent />
</SampleContext.Provider>
```

Now, our ParentComponent and ALL of it's children will have the ability to access whatever is stored under `value` via `context`.

We must import `SampleContext` (or whatever we've named the context) into our files.










## How do we decide which Component to wrap with our Provider?

When building our application, if we find a component which has the following properties:

1. Holds values in its `state`
2. These values need to be passed as `props` multiple levels down
3. These changes in `state` will be infrequent

Then that component is a good choice to wrap with a provider component.







## How do we refactor a component to be wrapped by a Provider?

1. Since our component, `MyComponent`, wold need to have it's own `state`, it will be a class component (for now, wait till next week!).

2. Instead, we will make a new class with the term `-WithContext` added to the end of our original component's name,  `MyComponentWithContext`.

3. We will refactor our original component so that it is now a functional component and all initialization and changes to state and any relevant methods will now take place in our new `-WithContext` component.

4. In our `-WithContext` component, any relevant events should be set as key-value pairs in the component's state.

4. In the `render` method of our new class component, `MyComponentWithContext`, we will return our original component, `MyComponent`, wrapped by a provider component.






## Example:

ORIGINAL:

  ```javascript
  class MyComponent extends React.Component {
    constructor(){
      super();
      this.state = {
        relevant: someValue;
      }
    }

    handleEvent = () => {
      // Logic to handle some event, updates state
    }

    render() {
      return(
        <div>
          {this.state.relevant}
          <ChildComponent handleEvent={this.handleEvent}/>
        <div>
      )
    }
  }

  export default MyComponent;
  ```




REFACTORED WITH CONTEXT:

  ```javascript
  import React from 'react';
  import SampleContext from '../contexts/SampleContext.js';

  const MyComponent = props => {
    return (
      <div>
        {props.relevant}
        <ChildComponent />
      </div>
    )
  };

  class MyComponentWithContext extends React.Component {
    constructor(){
      super();
      this.state = {
        relevant: someValue,
        handleEvent: this.handleEvent,
      }
    }

    handleEvent = () => {
      // Logic to handle some event
      this.setState({ 
        //some object 
      });
    }

    render() {
      return(
        <SampleContext.Provider 
          value = {
            relevant: this.state.relevant, 
            handleEvent: this.state.handleEvent
          }
        >
          <MyComponent relevant={this.state.relevant}/>
        </SampleContext.Provider>
      )
    }
  }

  export default MyComponentWithContext;

  ```