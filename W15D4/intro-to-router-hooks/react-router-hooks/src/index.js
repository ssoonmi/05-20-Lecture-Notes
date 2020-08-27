import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { 
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

const TrackingWrapper = ({children}) => {
  const location = useLocation();
  useEffect(() => {
    console.log('navigation happened', location.pathname)
  }, [location])
  return children;
}

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <TrackingWrapper>
          <App />
        </TrackingWrapper>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
