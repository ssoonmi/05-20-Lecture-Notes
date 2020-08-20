import React from "react";
import { Route, NavLink } from "react-router-dom";

import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";
import Violet from "./Violet";

const Rainbow = () => (
  <div>
    <h1>Rainbow Router!</h1>
    <NavLink exact to="/red">Red</NavLink>
    <NavLink to="/green">Green</NavLink>
    <NavLink exact to="/blue">Blue</NavLink>
    <NavLink to="/violet">Violet</NavLink>

    <div id="rainbow">
      <Route path="/red" component={Red} />
      <Route path="/green" component={Green} />
      <Route path="/blue" component={Blue} />
      <Route path="/violet" component={Violet} />
    </div>
  </div>
);

export default Rainbow;
