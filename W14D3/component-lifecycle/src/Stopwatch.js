import React from "react";

class Stopwatch extends React.Component {
  constructor() {
    super();

    this.state = {
      now: 0,
      running: false,
      start: 0,
    };
    console.log("Stopwatch#constructor");
  }

  componentDidMount() {
    console.log("Stopwatch#componentDidMount");
  }

  componentDidUpdate() {
    console.log("Stopwatch#componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Stopwatch#componentWillUnmount");
    clearInterval(this.interval);
  }

  tick() {
    // console.log('Stopwatch#tick');
    this.setState({
      now: new Date().valueOf(),
    });
  }

  toggle = () => {
    console.log("Stopwatch#toggle");
    const running = !this.state.running;
    if (running) {
      this.interval = setInterval(() => this.tick(), 10);
      this.setState({
        start: new Date().valueOf(),
      });
    } else {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState({ running });
  };

  render() {
    console.log("Stopwatch#render");
    return (
      <div>
        <p>{(this.state.now - this.state.start) / 100}</p>
        <button onClick={this.toggle}>
          {this.state.running ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default Stopwatch;
