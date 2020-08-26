import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../store/authentication';
import { connect } from 'react-redux';

const NavBar = ({loggedIn, logOut}) => { // we use object destructuring on our props
  return(
    <nav>
      <h1>Twitter Lite!</h1>
      <NavLink to="/">Home</NavLink>
      {loggedIn ? 
        <button onClick={logOut}>Log Out</button> :
        <NavLink to="/login">Log In</NavLink>
      }
    </nav>
  )
}

const msp = ({auth}) => ({ 
  // we use object destructuring to take out the relevant slice of Redux State
  loggedIn: !!auth.id
})

const mdp = dispatch => ({
  logOut: () => dispatch(logout())
})

export default connect(msp, mdp)(NavBar);