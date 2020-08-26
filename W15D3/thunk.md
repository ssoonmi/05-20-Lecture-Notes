# Thunk

One of the most common uses of middleware is to solve asynchronicity.

We will write a `thunk action creator` to make an asynchronous request to an API and `dispatch` an `action` when the response is received.




Ex:

```javascript

  // ./src/store.js

  import { createStore, applyMiddleware } from 'redux';
  import logger from 'redux-logger';

  import rootReducer from './reducers/rootReducer';
  import thunk from './middleware/thunkMiddleware';

  const configureStore = (preloadedState = {}) => {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk, logger),
    );
  };

  export default configureStore;




  ---------------------------------------




  // ./src/middleware/thunkMiddleware.js

  const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };

  export default thunk;




  ----------------------------------------




  // ./src/actions/fruitActions.js

  import { FRUIT_STAND_API_BASE_URL } from '../config';

  export const RECEIVE_FRUITS = 'RECEIVE_FRUITS';

  export const fetchFruits = () => (dispatch) => (
    fetch(`${FRUIT_STAND_API_BASE_URL}/fruits`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveFruits(data.fruits));
      })
  );

  const receiveFruits = (fruits) => {
    return {
      type: RECEIVE_FRUITS,
      fruits,
    };
  };





  -------------------------------------------



  // ./src/reducers/fruitReducer.js

  import { RECEIVE_FRUITS } from '../actions/fruitActions';

  const fruitReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_FRUITS:
        return action.fruits;
      default:
        return state;
    }
  };

  export default fruitReducer;
```