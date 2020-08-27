import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from './store/authentication';

function LogoutButton({ loggedOut, logout }) {
  if (loggedOut) {
    return <Redirect to="/login" />
  }
  return (
    <div id="logout-button-holder">
      <button onClick={logout}>Logout</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedOut: !state.authentication.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
