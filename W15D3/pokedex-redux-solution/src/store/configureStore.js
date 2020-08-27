import { 
  createStore, 
  applyMiddleware, 
  combineReducers, 
  compose 
} from 'redux';
import thunk from 'redux-thunk';
import authentication from "./authentication";
import pokemon from "./pokemon";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  authentication,
  pokemon
});

const storeEnhancer = composeEnhancers(applyMiddleware(thunk));

const configureStore = (initialState) => {
  return createStore(
    reducer, 
    initialState, 
    storeEnhancer
  );
};

export default configureStore;