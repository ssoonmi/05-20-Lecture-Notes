
# Adding a Consumer to a nested component

We will provide child components access to the values in context via two options:
1. `SampleContext.Consumer` - 
  `SampleContext.Consumer` can be used with both functional and class components.
2. `static contextType = SampleContext;` - 
  In class components we can use the instance method `static contextType = SampleContext;`.

By providing values via `SampleContext.Consumer` or `static contextType = SampleContext;` we will not have to thread props to nested components.

We must import `SampleContext` (or whatever we've named the context) into our files.










## static contextType = SampleContext;

By creating this static instance method in our class component, we can now access all values in `SampleContext` under the `this.context` property.

Ex:
```javascript
  import React from 'react';
  import SampleContext from '../contexts/SampleContext';

  class ChildComponent extends React.Component {
    static contextType = SampleContext;
    // we now have access to all values under context via the this.context property or attribute

    render (
      return (
        <div>
          {this.context.relevant} // We are able to access value on this.context
          // some JSX
        </div>
      )
    )
  }

  export default ChildComponent;
```










## SampleContext.Consumer

1. Where we have our `ChildComponent`, we will create a functional component named using the `-WithContext` style, Ii.e. `ChildComponentWithContext`. 

2. This functional component will return a wrapper `SampleContext.Consumer` component.

3. Inside of that wrapper `SampleContext.Consumer` component we will have a function which takes `value` as an argument (the argument can be any name, but `value` is used by convention). `value` will have access to all values contained in context. This function will return our `ChildComponent` with any relevant values passed as `props`.



EX:
```javascript
  import React from 'react';
  import SampleContext from '../contexts/SampleContext';

  const ChildComponent = props => {

    return (
      <div>
        {props.relevant}
        // Some JSX
      </div>
    )
  }

  const ChildComponentWithContext = () => {
    return (
      <SampleContext.Consumer>
        {value => <ChildComponent relevant={value.relevant} />}
      </SampleContext.Consumer>
    );
  };

  export default ChildComponentWithContext;
```

