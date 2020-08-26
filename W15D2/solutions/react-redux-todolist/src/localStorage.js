const STATE_KEY = 'tasks';

export const loadState = () => {
  try {
    const stateJSON = localStorage.getItem(STATE_KEY);
    if (stateJSON === null) {
      return undefined;
    }
    return JSON.parse(stateJSON);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, stateJSON);
  } catch (err) {
    console.warn(err);
  }
};