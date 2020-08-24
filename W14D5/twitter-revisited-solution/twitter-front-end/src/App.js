import React from 'react';
import { Switch, NavLink } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from './Routes';
import RegistrationForm from './components/session/RegistrationForm';
import LoginForm from './components/session/LoginForm';
import Profile from './components/Profile';
import Home from './components/Home';

const App = ({ currentUserId }) => {

  const profileLink = currentUserId
    ? <NavLink to={`/users/${currentUserId}`}>My Profile</NavLink>
    : null;

  return (
    <div>
      <h1>Twitter Lite</h1>
      <nav>
        <NavLink to="/register">Register</NavLink>
        <br />
        <NavLink to="/login">Log In</NavLink>
        <br />
        <NavLink exact to="/">Home</NavLink>
        <br />
        {profileLink}
      </nav>

      <Switch>
        <AuthRoute path="/register" component={RegistrationForm} currentUserId={currentUserId} />
        <AuthRoute path="/login" component={LoginForm} currentUserId={currentUserId} />
        <ProtectedRoute path="/users/:userId" component={Profile} currentUserId={currentUserId} />
        <ProtectedRoute exact path="/" component={Home} currentUserId={currentUserId} />
      </Switch>
    </div>
  );
};

export default App;
