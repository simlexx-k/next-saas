// PrivateRoute.js - Protected route component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '/frontend/src/pages/auth/AuthProvider.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;
