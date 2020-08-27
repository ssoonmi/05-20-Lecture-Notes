import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ga from "react-ga";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import Document from "./components/Document";
import Report from "./components/Report";
import ComingSoon from "./components/ComingSoon";
import Home from "./components/Home";

function TrackingWrapper({children}) {
    let location = useLocation();
    React.useEffect(() => {
        ga.send(["pageview", location.pathname]);
    }, [location]);
    return children
}

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <TrackingWrapper>
              <Switch>
                  <Route path='/user/:userId/doc/:docId' component={Document}/>
                  <Route path={['/report/:date', '/report']} component={Report}/>
                  <Route path='/help' component={ComingSoon}/>
                  <Route path='/' component={Home}/>
              </Switch>
          </TrackingWrapper>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
