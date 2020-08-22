import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Navigation from './Navigation';
import StaffPage from './StaffPage';

function App(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/staff" render={() => <StaffPage staff={props.data.company.staff} />}/>
        <Route path="/about" render={() => <AboutPage company={props.data.company} />}/>
        <Route path="*" render={() => <HomePage company={props.data.company} />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
