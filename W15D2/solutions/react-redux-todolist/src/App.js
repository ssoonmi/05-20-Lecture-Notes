import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { store } from './store';
import { resetTaskList } from './actions/taskActions';

const App = () => {
  const handleClick = () => store.dispatch(resetTaskList());

  return (
    <div>
      <h1>To-do List</h1>
      <button onClick={handleClick}>Reset</button>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;