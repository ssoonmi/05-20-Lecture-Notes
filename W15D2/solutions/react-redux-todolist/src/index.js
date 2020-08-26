import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { createTask, deleteTask } from './actions/taskActions';

window.store = store;
window.createTask = createTask;
window.deleteTask = deleteTask;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);