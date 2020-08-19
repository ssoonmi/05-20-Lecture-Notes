# React Class Components Syntax

* Every class component must `extend` (i.e. inherit) from `React.Component`

* Every class component must have a `render` method that returns the element(s) to render 

* To access props within a class component, use the `this.props` property

* If your class component defines a `constructor` method that needs access to `props`, define a `props` parameter.
    - In the contructor, be sure to call the `super` method and pass in the `props`

EX:
```javascript
class Message extends React.Component {
  constructor(props) {
    super(props);

    // TODO Initialize state, etc.
  }

  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}
```

