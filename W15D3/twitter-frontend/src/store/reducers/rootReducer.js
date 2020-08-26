import { combineReducers } from 'redux';
import tweetsReducer from './tweetsReducer';
import usersReducer from './usersReducer';
import authReducer from '../authentication';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
  auth: authReducer
})

export default rootReducer;