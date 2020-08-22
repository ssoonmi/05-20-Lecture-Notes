import React from "react";
import ThemeContext from "../contexts/ThemeContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }
  // static contextType = ThemeContext;

  updateSelection = e => {
    this.context.color; // value of the provider
    this.setState({ color: e.target.value });
  };

  handleClick = e => {
    debugger;
    e.preventDefault();
    // this.context.updateContext(this.state.color);
    this.props.updateContext(this.state.color);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.updateSelection}
          value={this.state.color}
          placeholder="Type a color!"
        />
        <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

const ProfileWithContext = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => <Profile updateContext={value.updateContext} />}
    </ThemeContext.Consumer>
  );
};

// export default Profile;
export default ProfileWithContext;
