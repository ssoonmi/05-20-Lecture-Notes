import React from 'react';
import Task from './Task';
import { store } from '../store';
import { deleteTask } from '../actions/taskActions';

class TodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      // debugger
      this.forceUpdate();
    });
  }

  /* 
  const dog = () => {
    console.log("Dog!");
    return "Cat";
  }
  */ 

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  deleteTask = (id) => {
    store.dispatch(deleteTask(id));
  }

  render() {
    const tasksState = store.getState();
    const tasks = Object.values(tasksState);

    if (tasks.length === 0) {
      return null;
    }

    return (
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={this.deleteTask}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;