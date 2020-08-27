import { combineReducers } from 'redux';
import gifsReducer from './gifsReducer';

export default combineReducers({
  gifs: gifsReducer,
});
