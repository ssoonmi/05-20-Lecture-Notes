import { RECEIVE_TWEETS } from "../actions/tweetActions";
import { SIGNUP } from '../authentication';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TWEETS:
      action.tweets.forEach((tweet) => {
        const user = tweet.User;
        newState[user.id] = user;
      });
      return newState;
    
    case SIGNUP:
      newState[action.user.id] = action.user;
      return newState;

    default:
      return state;
  }
}


export default usersReducer;