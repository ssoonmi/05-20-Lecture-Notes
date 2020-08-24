import React from 'react';
import UserContext from '../../contexts/UserContext';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  registerUser = async (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;

    try {
      const res = await fetch(`/users`, {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw res;

      const {
        token,
        user: { id },
      } = await res.json();

      // Updates context
      this.props.login(token, id);
    } catch (err) {
      console.error(err);
    }
  };

  update = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <form onSubmit={this.registerUser}>
        <h2>Register</h2>
        <input
          type="text"
          value={username}
          onChange={this.update}
          name="username"
          placeholder="Enter Username"
        />
        <input
          type="email"
          value={email}
          onChange={this.update}
          name="email"
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={password}
          onChange={this.update}
          name="password"
          placeholder="Enter Password"
        />

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const RegistrationFormWithContext = (props) => {
  return (
    <UserContext.Consumer>
      {value => <RegistrationForm {...props} login={value.login} />}
    </UserContext.Consumer>
  );
}

export default RegistrationFormWithContext;
