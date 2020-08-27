export const SET_USER = 'authentication/SET_USER';
export const REMOVE_USER = 'authentication/REMOVE_USER';
export const SIGNUP = 'SIGNUP';

const setUser = (user) => {
  return {
    type: SET_USER,
    user
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

const newUser = (user) => ({
  type: SIGNUP,
  user
})

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

export const signup = (username, email, password, password2) => {
  return async (dispatch) => {
    const res = await fetch('/api/users', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password, password2 })
    });

    const data = await res.json();
    dispatch(newUser(data));
    res.data = data;
    return res;
  };
}

export default function authReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case SET_USER || SIGNUP:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}