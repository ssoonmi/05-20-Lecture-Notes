
# Updating the Context from a nested component

It's a common need to update the global `context` from a child consumer component. 

From the `context` update fired from the child component, your application will re-render ALL of the nested components that depend on that data.

We will simply need to invoke the function defined in our `Provider` which was stored in context and designed to update context.



Ex: 

  ```javascript
  // src/components/ChildComponent.js
  import React from 'react';
  import SampleContext from '../contexts/SampleContext.js';

  const ChildComponent = props => {
    handleClick = () => {
      e.preventDefault();
      props.handleEvent();
    }

    return (
      // Some JSX
    )
  }

  const ChildComponentWithContext = () => {
    return (
      <SampleContext.Consumer>
        {(value) => <ChildComponent value={value} />}
      </SampleContext.Consumer>
    );
  };





  // src/components/MyComponent.js
  import React from 'react';
  import SampleContext from '../contexts/SampleContext.js';

  const MyComponent = props => {
    return (
      <div>
        {props.relevant}
      <div>
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
    }

    render() {
      return(
        <SampleContext.Provider 
          value = {
            this.state.relevant
            this.state.handleEvent
          }
        >
          <MyComponent relevant={this.state.relevant}/>
        </SampleContext.Provider>
      )
    }
  }

  export default MyComponentWithContext;
```