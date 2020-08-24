import React from 'react';

const Task = ({ task, deleteTask }) => {
  const handleClick = () => {
    deleteTask(task.id);
  }
  
  return (
    <li>
      <h1>{task.message}</h1>
      <button onClick={handleClick}>Delete Task</button>
    </li>
  );
}

export default Task;
