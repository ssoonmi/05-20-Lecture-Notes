export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_TWEET = "RECEIVE_TWEET";
export const NEW_TWEET = "NEW_TWEET";

// the below is an action creator
const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
};


// the below is an action creator
const receiveTweet = (tweet) => {
  return {
    type: RECEIVE_TWEET,
    tweet,
  };
};


// the below is a thunk action creator
export const fetchTweets = () => {
  return async (dispatch) => {
    const res = await fetch(`/api/tweets`); // Using proxy in our package.json,
    // we're able to set the path to simply '/tweets'
    const data = await res.json();
    dispatch(receiveTweets(data.tweets));
  };
};


// the below is a thunk action creator
export const fetchTweet = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/tweets/${id}`); // Using proxy in our package.json,
    // we're able to set the path to simply '/tweets'
    const data = await res.json();
    dispatch(receiveTweet(data.tweet));
  };
};


export const createTweet = (message) => {
  return async (dispatch) => {
    const res = await fetch('/api/tweets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });
    
    const data = await res.json();
    dispatch(receiveTweet(data.tweet));
    res.data = data;
    return res;
  };
};
