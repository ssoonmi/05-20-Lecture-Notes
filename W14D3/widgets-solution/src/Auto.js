import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    };
    this.nodeRefs = {};
  }

  handleInput = (e) => {
    this.setState({ inputVal: e.target.value });
  }

  selectName = (e) => {
    const name = e.target.innerText;
    this.setState({ inputVal: name });
  }

  matches = () => {
    const { inputVal } = this.state;
    const { names } = this.props;
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return names;

    names.forEach(name => {
      const nameSegment = name.slice(0, inputLength);
      if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push('No matches');

    return matches;
  }

  wrappers(name) {
    if (!this.nodeRefs[name]) this.nodeRefs[name] = React.createRef();
    return this.nodeRefs[name];
  }

  render() {
    const results = this.matches().map((result, i) => (
      <CSSTransition
        key={i}
        classNames="result"
        timeout={{ enter: 500, exit: 300 }}
        nodeRef={this.wrappers(result)}
      >
        <li ref={this.wrappers(result)}>{result}</li>
      </CSSTransition>
    ));

    return (
      <div>
        <h1>Autocomplete</h1>
        <div className="auto">
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder="Search..."
          />
        </div>
        <ul onClick={this.selectName}>
          <TransitionGroup>
            {results}
          </TransitionGroup>
        </ul>
      </div>
    );
  }
};

export default AutoComplete;
