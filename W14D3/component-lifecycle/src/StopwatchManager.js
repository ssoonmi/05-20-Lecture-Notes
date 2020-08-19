import React from "react";

import Stopwatch from "./Stopwatch";

class StopwatchManager extends React.Component {
  constructor() {
    super();
    this.state = { 
      show: false 
    };
  }

  toggleStopwatch = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <h1>Stopwatch Manager</h1>
        <p>Click the button to show and hide the stopwatch.</p>
        <button onClick={this.toggleStopwatch}>Toggle stopwatch</button>
        {this.state.show ? <Stopwatch /> : null}
      </>
    );
  }
}

export default StopwatchManager;
