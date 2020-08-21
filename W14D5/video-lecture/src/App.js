import React from "react";
import PupContext from "./contexts/ThemeContext";
import Home from "./components/Home";

const App = ({ color }) => (
  <div id="app" style={{ backgroundColor: `${color}` }}>
    <Home />
  </div>
);

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      updateContext: this.updateContext,
    };
  }

  updateContext = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <PupContext.Provider value={this.state}>
        <App color={this.state.color} />
      </PupContext.Provider>
    );
  }
}

export default AppWithContext;