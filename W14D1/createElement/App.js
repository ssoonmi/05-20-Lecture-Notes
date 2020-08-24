import 'https://unpkg.com/react@16/umd/react.development.js';

import Clue from './Clue.js';

const App = props => React.createElement(
  'h1',
  null,
  props.clues.map(clue => React.createElement(Clue, { key: clue.id, ...clue })),
);

App.defaultProps = {
  clues: []
};

export default App;
