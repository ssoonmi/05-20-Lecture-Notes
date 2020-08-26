import { combineReducers } from 'redux';
import tweetsReducer from './tweetsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  users: usersReducer
})

export default rootReducer;