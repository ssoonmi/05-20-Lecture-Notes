import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../store/authentication';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    };

    this.updateUsername = this.updateField('username');
    this.updateEmail = this.updateField('email');
    this.updatePassword = this.updateField('password');
    this.updatePassword2 = this.updateField('password2');
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    const res = await this.props.signup(username, email, password, password2);
    this.props.login(res.data.username, password);
  }

  updateField(name) {
    return (e) => {
      this.setState({ [name]: e.target.value });
    }
  }

  render() {
    if (this.props.loggedIn) return (
      <Redirect to="/" />
    )
    const { 
      username, 
      email, 
      password, 
      password2 
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={this.updateUsername}
          placeholder='Username'
        />
        <input
          type="email"
          value={email}
          onChange={this.updateEmail}
          placeholder='Email'
        />
        <input
          type="password"
          value={password}
          onChange={this.updatePassword}
          placeholder='Password'
        />
        <input
          type="password"
          value={password2}
          onChange={this.updatePassword2}
          placeholder='Matching Password'
        />
        <button type="submit">Sign Up</button>
      </form>

    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    loggedIn: !!auth.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, password, password2) => 
      dispatch(authActions.signup(username, email, password, password2)),
    login: (username, password) => 
      dispatch(authActions.login(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);