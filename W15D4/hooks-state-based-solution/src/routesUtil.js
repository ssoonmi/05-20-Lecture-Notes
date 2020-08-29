import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ 
  component: Component, 
  needLogin,
  cProps,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      needLogin === true ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} {...cProps} />
      )
    }
  />
);