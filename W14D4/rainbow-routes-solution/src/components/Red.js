import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Orange from './Orange';
import Yellow from './Yellow';

class Red extends React.Component {
  render() {
    return (
      <div>
        <h2 className="red">Red</h2>
        <NavLink to="/Red">Red only</NavLink>
        <NavLink to="/Red/orange">Add orange</NavLink>
        <NavLink to="/Red/yellow">Add yellow</NavLink>

        <Route path="/red/orange" component={Orange} />
        <Route path="/red/yellow" component={Yellow} />
      </div>
    );
  }
};

export default Red;
