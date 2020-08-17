// React -> React.createElement
import 'https://unpkg.com/react@16/umd/react.development.js';

// ReactDOM -> ReactDOM.render
import 'https://unpkg.com/react-dom@16/umd/react-dom.development.js';

import App from './App.js';

const target = document.querySelector('main');
const app = React.createElement(App, null);
ReactDOM.render(app, target);

(async () => {
  const response = await fetch('https://jservice.xyz/api/random-games/1');
  if (response.ok) {
    const { clues } = await response.json();
    console.log(clues);

    const app = React.createElement(App, { clues });
    ReactDOM.render(app, target);
  }
})();
