import React from 'react';
import UserContext from './UserContext';

// Bonus: Higher order components
const withContext = (Component) => {
  return function ContextComponent(props) {
    return (
      <UserContext.Consumer>
        {value => <Component {...props} value={value} />}
      </UserContext.Consumer>
    );
  }
}

export default withContext;
