import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from './store/authentication';

class LoginPanelRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "demo@example.com",
      password: "password",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateValue("email");
    this.updatePassword = this.updateValue("password");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  updateValue = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    if (this.props.currentUserId) {
      return <Redirect to="/" />
    }
    return (
      <main className="centered middled">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <button type="submit">Login</button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.authentication.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanelRedux);
