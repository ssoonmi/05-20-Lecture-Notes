import { RECEIVE_TWEETS, RECEIVE_TWEET } from "../actions/tweetActions";

const tweetsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TWEETS:
      action.tweets.forEach(tweet => {
        const tweetClone = {};
        // We do not want a User object to exist in the Tweets slice of state
        // This would be a nested Redux state
        // In a normalized state, we only hold ids to other slices of state
        // Ex: each tweet has a userId, but not an entire User object
        Object.keys(tweet).forEach(key =>{
          if(key !== "User") tweetClone[key] = tweet[key];
        })
        newState[tweetClone.id] = tweetClone;
      });
      return newState;

    case RECEIVE_TWEET:
      const tweetClone = {};
      Object.keys(action.tweet).forEach(key => {
        if (key !== "User") tweetClone[key] = action.tweet[key];
      })
      newState[tweetClone.id] = tweetClone;
      return newState;

    default:
      return state;
  }
};

export default tweetsReducer;
