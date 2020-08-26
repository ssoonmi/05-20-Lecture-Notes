export const CREATE_TASK = 'CREATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const RESET_TASK_LIST = 'RESET_TASK_LIST'

export const createTask = (taskMessage) => {
  debugger
  return ({
    type: CREATE_TASK,
    taskId: new Date().getTime(),
    taskMessage,
  });
};

export const deleteTask = (taskId) => {
  debugger
  return {
    type: DELETE_TASK,
    taskId,
  }
};

export const resetTaskList = () => ({
  type: RESET_TASK_LIST,
});