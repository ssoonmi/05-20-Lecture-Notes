import React from 'react';
import { Link } from 'react-router-dom';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // only once after the first render
  componentDidMount() { 
    document.title = `You clicked ${this.state.count} times`;
  }

  // after every single render not including the first one
  componentDidUpdate(prevProps, prevState) { 
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  // only once right before it's about to unmount
  componentWillUnmount() {
    document.title = `You finished clicking ${this.state.count} times`;
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
        <Link to="/">Unmount</Link> 
      </div>
    );
  }
  
}

export default Example;