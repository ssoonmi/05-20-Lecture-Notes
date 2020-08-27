import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, NavLink, HashRouter } from 'react-router-dom';
import StateWithoutHooks from './state_without_hooks';
import StateWithHooks from './state_with_hooks';
import LifeWithoutHooks from './lifecycle_without_hooks';
import LifeWithHooks from './lifecycle_with_hooks';

function Main() {
  return (
    <>
      <ul>
        <li><NavLink to="/state">State Without Hooks</NavLink></li>
        <li><NavLink to="/state_hook">State With Hooks</NavLink></li>
        <li><NavLink to="/life">Lifecycle Without Hooks</NavLink></li>
        <li><NavLink to="/life_hook">Lifecycle With Hooks</NavLink></li>
      </ul>
      <Switch>
        <Route path="/state" component={StateWithoutHooks} />
        <Route path="/state_hook" component={StateWithHooks} />
        <Route path="/life" component={LifeWithoutHooks} />
        <Route path="/life_hook" component={LifeWithHooks} />
      </Switch>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    (<HashRouter>
      <Main />
    </HashRouter>),
    document.getElementById('main')
  );
});

