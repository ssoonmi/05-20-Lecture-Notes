import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Clock from "./Clock";
import Folder from "./Folder";
import Weather from "./Weather";
import AutoComplete from "./Auto";

const Widgets = ({ folders, names }) => (
  <div>
    <h1>Widgets</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/clock">Clock</NavLink>
      <NavLink to="/folder">Folder</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/autocomplete">Autocomplete</NavLink>
    </nav>
    <Switch>
      <Route path="/clock" component={Clock} />
      <Route path="/folder" render={() => <Folder folders={folders} />} />
      <Route path="/weather" component={Weather} />
      <Route path="/autocomplete" render={() => <AutoComplete names={names} />} />
      <Route exact path="/" render={() => <h1>Welcome to your widgets app!</h1>} />
      <Route render={() => <h1>404: Page not found</h1>} />
    </Switch>
  </div>
);

export default Widgets;
