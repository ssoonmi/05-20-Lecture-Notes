

# React State

* State is data that's internal to a component.

* Props are not to be changed by a component, but state is intended to be changed.

* We should only assign a value to `state` if it will be updated in our component. 









## Initializing State

* When creating a stateful class component, you can use a class `constructor` method to initialize the `this.state` object.

Ex:
```javascript
import React from 'react';

class RandomQuote extends React.Component {
  constructor() {
    super();

    const quote = 'May the Force be with you.';

    this.state = { 
      quote: quote 
    };
  }

  render() {
    return (
      <>
        <h2>Random Quote</h2>
        <p>{this.state.quote}</p>
      </>
    );
  }
}

```

## Updating State

* The `this.setState` method accepts an object containing the state properties to update.

* We should always use the `this.setState` method to update state rather than setting the `this.state `property directly. Reassigning `this.state` alone won't trigger re-rendering, leaving your component out of sync.

* We only use `this.state = {}` inside our `constructor` method 

* Because calling the `this.setState` method triggers a re-render, it should not be called from within the `render` method, as that would trigger an infinite loop.

Ex:
```javascript
changeQuote = () => {
  const newQuote= 'My favorite state is non-Newtonian fluid.'

  this.setState({ 
    quote: newQuote 
  });
}
```

