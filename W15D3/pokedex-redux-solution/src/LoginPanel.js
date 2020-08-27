import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'demo@example.com',
      password: 'password',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateValue('email');
    this.updatePassword = this.updateValue('password');
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/api/session`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    });

    if (response.ok) {
      const { player } = await response.json();
      this.props.updateUser(player.id);
      this.setState({ currentUserId: player.id });
    }
  }

  updateValue = name => e => {
    this.setState({ [name]: e.target.value });
  }

  render() {
    if (this.state.currentUserId) {
      return <Redirect to="/" />;
    }
    return (
      <main className="centered middled">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.updateEmail} />
          <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.updatePassword} />
          <button type="submit">Login</button>
        </form>
      </main>
    );
  }
}

export default LoginPanel;
