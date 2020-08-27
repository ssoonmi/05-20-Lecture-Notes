import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";

import ComingSoon from "./components/ComingSoon";
import Document from "./components/Document";
import Home from "./components/Home";
import Report from "./components/Report";

function App() {
  return (
      <div>
        <NavLink to="/">Home</NavLink> | <NavLink to="/help">Help</NavLink>
        <Switch>
            <Route path='/user/:userId/doc/:docId' component={Document}/>
            <Route path={['/report/:date', '/report']} component={Report}/>
            <Route path='/help' component={ComingSoon}/>
            <Route path='/' component={Home}/>
        </Switch>
      </div>
  );
}

export default App;
