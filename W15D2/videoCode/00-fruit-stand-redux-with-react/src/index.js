import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { addFruit, addFruits, sellFruit, sellOut } from './actions/fruitActions';


// FOR TESTING PURPOSES ONLY
// set our actions to the window
if (process.env.NODE_ENV === 'development') {
  window.store = store;
  window.addFruit = addFruit;
  window.addFruits = addFruits;
  window.sellFruit = sellFruit;
  window.sellOut = sellOut;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
