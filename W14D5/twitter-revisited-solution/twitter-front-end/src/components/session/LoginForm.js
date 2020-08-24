import React from "react";
import UserContext from '../../contexts/UserContext';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const res = await fetch(`/users/token`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
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
    const { email, password } = this.state;

    return (
      <form onSubmit={this.loginUser}>
        <h2>Log In</h2>
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

        <button type="submit">Log In</button>
      </form>
    )  
  }
}

const LoginFormWithContext = (props) => {
  return (
    <UserContext.Consumer>
      {value => <LoginForm {...props} login={value.login} />}
    </UserContext.Consumer>
  );
}

export default LoginFormWithContext;

