import React from 'react';

class GuessingGame extends React.Component {
  constructor() {
    super();

    this.state = {
      guess: '',
      numberToGuess: this.generateRandomNumber(),
      solved: false
    };

    console.log('Number to Guess: ', this.state.numberToGuess);
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  makeTheGuess = () => {
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
    this.setState({
      guess: Number.parseInt(e.target.value),
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
        {(this.state.guess === this.state.numberToGuess) && this.state.solved ?
          <button onClick={this.reset}>Play again</button> :
          ''}
      </>
    );
  }
}

export default GuessingGame;