// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by checking if authentication token exists in local storage)
  return localStorage.getItem('authToken') !== null; // Change 'authToken' to your actual token key
};

// ProtectedRoute component to protect routes that require authentication
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Navigate to="/auth/login" /> // Redirect to login page if not authenticated
        )
      }
    />
  );
};

export default ProtectedRoute;
