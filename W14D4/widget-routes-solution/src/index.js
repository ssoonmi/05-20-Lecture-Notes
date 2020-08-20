import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/reset.css';
import './stylesheets/index.css';
import Root from './Root.js';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );
})