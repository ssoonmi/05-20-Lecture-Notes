import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
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

  render() {
    const results = this.matches().map((result, i) => (
      <li key={i}>{result}</li>
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
          <ReactCSSTransitionGroup
            transitionName="auto"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {results}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
};

export default AutoComplete;
