import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      hello: 'world'
    }
  }

  // state = {
  //   count: 0
  // }
  

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button 
          onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example;