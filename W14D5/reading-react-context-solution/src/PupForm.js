import React from 'react';
import PupContext from './PupContext';
import banana from './pups/banana-pup.jpg';
import sleepy from './pups/sleepy-pup.jpg';
import speedy from './pups/speedy-pup.jpg';

class PupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPup: 'select',
    };
  }

  static contextType = PupContext;

  updateSelection = (e) => {
    this.setState({ selectedPup: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.updateContext(this.state.selectedPup);
  }

  render() {
    return (
      <form>
        <select
          name="pup"
          onChange={this.updateSelection}
          value={this.state.selectedPup}
        >
          <option value="select">Select a pup!</option>
          <option value={speedy}>Speedy Pup</option>
          <option value={banana}>Banana Pup</option>
          <option value={sleepy}>Sleepy Pup</option>
        </select>
        <button onClick={this.handleClick}>
          Submit
        </button>
      </form>
    );
  }
}

const PupFormWithContext = () => {
  return (
    <PupContext.Consumer>
      {(value) => <PupForm updateContext={value.updateContext} />}
    </PupContext.Consumer>
  );
};

export default PupFormWithContext;
