import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false
    };
  }

  logout = () => {
    fetch(`/api/session`, {
      method: 'delete'
    }).then(() => this.setState({ loggedOut: true }));
  }

  render() {
    if (this.state.loggedOut) {
      return <Redirect to="/login" />;
    }
    return (
      <div id="logout-button-holder">
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default LogoutButton;
