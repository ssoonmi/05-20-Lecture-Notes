// React
import 'https://unpkg.com/react@16/umd/react.development.js';

/**
 * <section class="clue">
 *  <h1 class="clue__title">Clue# 268530</h1>
 *  <div class="clue__question">
 *    2009: I dreamed a Dream
 *  </div>
 *  <div class="clue__category">
 *    «unparsed»
 *  </div>
 *  <div class="clue__amount">
 *    $800
 *  </div>
 * </section>
 */

const Clue = props => React.createElement(
  'section',
  { className: 'clue' },
  React.createElement('h1', { className: 'clue__title' }, `Clue# ${props.id}`),
  React.createElement('div', { className: 'clue__question' }, props.question),
  React.createElement('div', { className: 'clue__category' }, props.category.title),
  React.createElement('div', { className: 'clue__amount' }, `$${props.value}`),
);

Clue.defaultProps = {
  id: '',
  category: { title: '' },
  question: 'loading...',
  value: '???',
};

export default Clue;
