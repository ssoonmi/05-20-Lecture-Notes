import React from "react";
import UserContext from '../contexts/UserContext';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      tweets: [],
      newTweet: ""
    }
  }

  fetchUser = async () => {
    const { currentUserId } = this.props;
    try {
      const res = await fetch(`/users/${currentUserId}`);

      if (!res.ok) throw res;
      const { user } = await res.json();
      return user;
    } catch (err) {
      console.error(err);
      return {};
    }
  }

  createTweet = async (e) => {
    e.preventDefault();
    const { currentUserId } = this.props;
    const { newTweet } = this.state;
    try {
      const res = await fetch(`/tweets/`, {
        method: "POST",
        body: JSON.stringify({ message: newTweet, userId: currentUserId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw res;
      const tweets = await this.fetchUserTweets();
      this.setState({ tweets, newTweet: "" });
    } catch (err) {
      console.error(err);
    }
  }

  deleteTweet = (tweetId) => {
    return async e => {
      try {
        const res = await fetch(`/tweets/${tweetId}`, {
          method: "DELETE"
        });

        if (!res.ok) throw res;
        const tweets = await this.fetchUserTweets();
        this.setState({ tweets });
      } catch (err) {
        console.error(err);
      }
    };
  }

  fetchUserTweets = async () => {
    const { currentUserId } = this.props;
    try {
      const res = await fetch(`/users/${currentUserId}/tweets`);

      if (!res.ok) throw res;
      const { tweets } = await res.json();
      return tweets;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  updateNewTweet = e => {
    this.setState({ newTweet: e.target.value });
  }

  async componentDidMount() {
    const user = await this.fetchUser();
    const tweets = await this.fetchUserTweets();
    this.setState(
      { user, tweets },
      () => console.log(this.state),
    );
  }

  render() {
    const { user, tweets, newTweet } = this.state;

    const userTweets = (tweets.length)
      ? tweets.map((tweet) => {
          const { id, message } = tweet;
          return (
            <li key={id}>
              <p>{message}</p>
              <button onClick={this.deleteTweet(id)}>Delete</button>
            </li>
          )
        })
      : <p>This user has no tweets! :(</p>

    return (
      <div>
        <h1>Profile: {user.username}</h1>
        <form onSubmit={this.createTweet}>
          <textarea
            onChange={this.updateNewTweet}
            value={newTweet}
            placeholder="Make a tweet!"
          />
          <br />
          <button>Create Tweet</button>
        </form>
        <ul>
          <h2>{user.username}'s tweets:</h2>
          {userTweets}
        </ul>
      </div>
    );
  }
};

const ProfileWithContext = (props) => {
  return (
    <UserContext.Consumer>
      {value => <Profile {...props} authToken={value.authToken} currentUserId={value.currentUserId} />}
    </UserContext.Consumer>
  );
}

export default ProfileWithContext;
