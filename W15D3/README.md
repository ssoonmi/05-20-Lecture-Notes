# LOs

* Describe what a higher-order component (HOC) is

* Write a higher-order component (HOC) that accepts a component as an argument and returns a new component

* Use the React-Redux library's <Provider /> component to make your Redux store available to any nested components that have been wrapped in the connect function

* Use the React-Redux library's connect function to give a component access to a Redux store

* Write a selector to extract and format information from state stored in a Redux store

* Use the React-Redux library's applyMiddleware function to configure one or more middleware when creating a store

* Write a thunk action creator to make an asynchronous request to an API and dispatch an action when the response is received

* Describe a situation where defining multiple containers for a single component is advantageous

* Configure a React application to use the Redux development tools







## Higher-Order Component (HOC)

Higher-order components, or HOCs, receive a React component as an argument and return a new component.


Ex:

1. ProtectedRoute- This will redirect a user to the `/login` if there is no currentUserId

```javascript
  export const ProtectedRoute = ({ component: Component, path, currentUserId, exact }) => {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) =>
          currentUserId ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };
```


2. AuthRoute- This will redirect a user to `/` if there is a currentUserId

```javascript
  export const AuthRoute = ({ component: Component, path, currentUserId, exact }) => {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) =>
          currentUserId ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    );
  };
```



## React-Redux Library

We use the React-Redux library to improve how React Components interact with the Redux store.

The React-Redux library has two main parts- The `<Provider />` component and `connect` function.

* <Provider /> allows its children t have access to the store

* `connect` subscribes React components to specific slices of Redux state and action creators

To use the React-Redux library we must
  * `npm instal react-redux`