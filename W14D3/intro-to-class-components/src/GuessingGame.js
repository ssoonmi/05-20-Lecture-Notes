import React from 'react';

class GuessingGame extends React.Component {
  constructor() {
    super();

    this.state = {
      guess: '',
      numberToGuess: this.generateRandomNumber(),
      solved: false
    };

    // this.makeTheGuess.bind(this); 
    // Can also use bind method insteaad of fat arrow
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  makeTheGuess = () => {
    // debugger
    if (this.state.guess === this.state.numberToGuess) {
      this.setState({ 
        message: 'You got it right!',
        solved: true 
      });
    } else if (this.state.guess < this.state.numberToGuess) {
      this.setState({ message: 'Try a bigger number...' });
    } else {
      this.setState({ message: 'Try a smaller number...' });
    }
  }

  getInputValue = e => {
    // debugger
    // If our input is an empty string, Number.parseInt("") = NaN
    // However, out input field is set to type="number"
    // And if an input field with type="number" has the value NaN, it will through an error.
    // To avoid this, we use a ternary operator to see if e.target is truthy or falsey ("" is falsey)
      // and if e.target.value is falsey, we explicitly set it to "" rather than NaN.
    const guess = e.target.value ? Number.parseInt(guess) : "";
    this.setState({
      guess: guess,
    });
  }

  reset = () => {
    this.setState({
      guess: '',
      message: '',
      numberToGuess: this.generateRandomNumber(),
    });
  }

  render() {
    return (
      <>
        <h1>Guessing Game!</h1>
        <p>Guess a number between 1 and 10</p>
        <input value={this.state.guess} type="number" onChange={this.getInputValue} />
        <button onClick={this.makeTheGuess}>Make your guess</button>
        <p>{this.state.message}</p>
        {this.state.solved ?
          <button onClick={this.reset}>Play again</button> :
          ''}
      </>
    );
  }
}

export default GuessingGame;