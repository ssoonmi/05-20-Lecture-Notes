# Handling Events



## Adding Event Listeners

* Define a instance method to handle the event

* Inside the element which will trigger the event, we should add an event listener. We can find a list of events here:
    - Docs: [React Events](https://reactjs.org/docs/handling-events.html)
    - Note: react events are named using camelCase

    - EX: Using the onClick SyntheticEvent on a button
    ```javascript
      <button type='button' onClick={this.myEventHandler}>Click Me</button>
    ```





## Using Context in Event Handlers

* An event handler will always be invoked function style

* To utilize the `this` keyword, we must either bind the event handler in the constructor or define the event handler as an arrow function. Pick one and be consistent.







## Preventing Default Behavior

* React will use SyntheticEvents, which are like regular events but with added functionality.
    - Docs: [SyntheticEvents](https://reactjs.org/docs/events.html)

* We want to prevent certain default behavior of events, such as reloading when submitting a form. To stop this behavior, we will use `event.preventDefault()` in our event handler.

Ex:
```javascript
import React from 'react';

class NoDefaultSubmitForm extends React.Component {
  submitForm = e => {
    e.preventDefault();
    window.alert('Handling form submission...');
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <button>Submit</button>
      </form>
    );
  }
}

export default NoDefaultSubmitForm;

```

