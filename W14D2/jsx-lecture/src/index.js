import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App banana="banana" />
  </React.StrictMode>,
  document.getElementById('root')
);

(async () => {

  const response = await fetch('https://dog.ceo/api/breeds/image/random/3');

  if (response.ok) {
    const { message } = await response.json();
    ReactDOM.render(
      <React.StrictMode>
        <App urls={message} />
      </React.StrictMode>
    , document.getElementById('root'));
  }

})();
