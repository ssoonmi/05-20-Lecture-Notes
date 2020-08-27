import React from "react";
import Tweets from "../tweets/Tweets";
import { connect } from "react-redux";
import { fetchTweet } from "../../store/actions/tweetActions";
import TweetShow from './TweetShow';

class ConnectedTweetShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTweet(this.props.id);
  }

  render() {
    return <TweetShow tweet={this.props.tweet} user={this.props.user} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const tweet = state.tweets[ownProps.match.params.id] || {};
  
  return ({
    tweet: tweet,
    user: state.users[tweet.userId] || {},
    id: ownProps.match.params.id
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchTweet: (id) => dispatch(fetchTweet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedTweetShow);
