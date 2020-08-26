export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_TWEET = "RECEIVE_TWEET";

// the below is a thunk action creator
export const fetchTweets = () => {
  return async (dispatch) => {
    const res = await fetch(`/api/tweets`); // Using proxy in our package.json,
    // we're able to set the path to simply '/tweets'
    const data = await res.json();
    dispatch(receiveTweets(data.tweets));
  };
};

// the below is an action creator
const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
};

// the below is a thunk action creator
export const fetchTweet = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/tweets/${id}`); // Using proxy in our package.json,
    // we're able to set the path to simply '/tweets'
    const data = await res.json();
    debugger
    dispatch(receiveTweet(data.tweet));
  };
};

// the below is an action creator
const receiveTweet = (tweet) => {
  return {
    type: RECEIVE_TWEET,
    tweet,
  };
};