import React from 'react';
import Tweets from './Tweets';
import { connect } from 'react-redux';
import { fetchTweets } from '../../store/actions/tweetActions';

class ConnectedTweets extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTweets();
  }

  render (){
    return (
      <Tweets 
        tweets={this.props.tweets} 
        users={this.props.users}
      />
    )
  }
}

const mapStateToProps = (state) =>({
  tweets: state.tweets,
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  fetchTweets: () => dispatch(fetchTweets())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(ConnectedTweets);