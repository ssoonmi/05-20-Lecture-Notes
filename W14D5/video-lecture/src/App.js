import React from "react";
import ThemeContext from "./contexts/ThemeContext";
import Home from "./components/Home";

const App = ({ color }) => {
  return (
  <div id="app" style={{ backgroundColor: `${color}` }}>
    <Home />
  </div>
  )
};

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "teal",
      updateContext: this.updateContext,
    };
  }

  updateContext = (color) => {
    debugger;
    this.setState({ color });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <App color={this.state.color} />
      </ThemeContext.Provider>
    );
  }
}

export default AppWithContext;