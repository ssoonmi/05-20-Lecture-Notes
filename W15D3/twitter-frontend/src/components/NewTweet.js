import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createTweet } from '../store/actions/tweetActions';


class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { message } = this.state;
    this.props.createTweet(message);

  }

  updateMessage = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    // If a user is not logged in, we return null
    if (!this.props.loggedIn) return null;

    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={this.updateMessage}
          placeholder="Write a tweet!"
        />
        <button type="submit">Tweet</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.id
});

const mapDispatchToProps = dispatch => ({
  createTweet: (message) => dispatch(createTweet(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet);