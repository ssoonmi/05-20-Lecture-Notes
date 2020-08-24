import React from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import Something from './Something';
import Nothing from './Nothing';
import Other from './Other';


class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Class Component</h1>
        <div>
          <Link className="nav-link" to="/class-component/something">
            Something
          </Link>
          <NavLink className="nav-link" to="/class-component/Nothing">
            Nothing
          </NavLink>
          <NavLink exact className="nav-link" to="/class-component/">
            Other
          </NavLink>
        </div>
        <Switch>
          <Route path="/class-component/something" component={Something} />
          <Route path="/class-component/nothing" component={Nothing} />
          <Route path="*" component={Other} />
        </Switch>
      </>
    );
  }
}

export default ClassComponent;