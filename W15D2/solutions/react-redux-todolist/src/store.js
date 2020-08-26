import { createStore } from 'redux';
import tasksReducer from './reducers/tasksReducer';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();
debugger
export const store = createStore(tasksReducer, preloadedState);

store.subscribe(() => {
  const tasksState = store.getState();
  console.log(tasksState);
  saveState(tasksState);
});
