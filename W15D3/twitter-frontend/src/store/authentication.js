export const SET_USER = 'authentication/SET_USER';
export const REMOVE_USER = 'authentication/REMOVE_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    const res = await fetch('/api/users/token', {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    dispatch(setUser(data));
    res.data = data;
    return res;
  };
};

export const logout = () => {
  return async (dispatch) => {
    const res = await fetch('/api/users/session', {
      method: "delete"
    });
    if (res.ok) dispatch(removeUser());
    res.data = await res.json();
    return res;
  };
};

// import authReducer from '.';
// import { login } from '.';

// {
//   id,
//   username,
//   token
// }

export default function authReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}