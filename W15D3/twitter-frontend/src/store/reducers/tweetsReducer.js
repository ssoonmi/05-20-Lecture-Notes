import { RECEIVE_TWEETS, RECEIVE_TWEET } from "../actions/tweetActions";

const tweetsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TWEETS:
      action.tweets.forEach(tweet => {
        const tweetClone = {};
        Object.keys(tweet).forEach(key =>{
          if(key !== "User") tweetClone[key] = tweet[key];
        })
        newState[tweetClone.id] = tweetClone;
      });
      return newState;

    case RECEIVE_TWEET:
      debugger
      newState[action.tweet.id] = action.tweet;
      return newState;
    default:
      return state;
  }
};

export default tweetsReducer;
