# <Provider />

`<Provider />` is a React component in which you wrap the rest of the application.
 
It is intrinsicly tied to the `connect` function.

The Provider component receives the `store` as a `prop` and sets a store `context`. 

Note:
  This is the same `context` as `React Context API`.




Because you wrapped the entire App in the Provider component, all your components can access the `store` `context`.


Components that need to access the `store` `context` have to be wrapped in a `container component` created by the `connect` function, which will see soon.






## Adding Provider

1. In the entry point for your application (typically the index.js file), import the Provider component and your Redux store:

```javascript
  import { Provider } from 'react-redux';
  import store from './store';
```



2. Then use the Provider component to wrap your App component and set its store prop to your Redux store:

```javascript
  <Provider store={store}>
    <App />
  </Provider>
```




3. Here's what your completed index.js file will look like:

```javascript
  // ./src/index.js

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import './index.css';
  import App from './App';
  import store from './store';

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
```