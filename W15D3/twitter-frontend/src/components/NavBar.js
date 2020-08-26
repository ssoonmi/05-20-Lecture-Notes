import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav>
      <h1>Twitter Lite!</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  )
}

export default NavBar;