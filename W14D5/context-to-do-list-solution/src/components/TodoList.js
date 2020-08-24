import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Task from './Task';

class TodoList extends React.Component {
  static contextType = TodoContext;

  render() {
    const { tasks, deleteTask } = this.context;

    return (
      <ul>
        {Object.values(tasks).map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    );
  }
} 

export default TodoList;
