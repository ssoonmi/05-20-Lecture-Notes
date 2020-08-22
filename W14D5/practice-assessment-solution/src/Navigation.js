import React from 'react';
import { NavLink } from 'react-router-dom';

import NameContext from './NameContext';

const Navigation = () =>
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="is-selected" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/staff" activeClassName="is-selected">Staff</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="is-selected">About Us</NavLink>
        </li>
      </ul>
    </nav>
    <NameContext.Consumer>
      {value => <div>{`Hello ${value.name}`}</div>}
    </NameContext.Consumer>
  </header>
;

export default Navigation;
