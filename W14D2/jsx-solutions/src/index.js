import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

(async () => {
  const url = 'https://polar-beach-08187.herokuapp.com/api/pets/2';
  const response = await fetch(url);
  if (response.ok) {
    const pet = await response.json();
    console.log(pet);

    ReactDOM.render(
      <React.StrictMode>
        <App pet={pet} />   {/* Now, with data */}
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
})();
