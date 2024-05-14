// AuthProvider.js - Context provider for authentication state
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state

  // Login function to set the user state
  const login = (userData) => {
    setUser(userData);
    // Store authentication token in localStorage or sessionStorage
    localStorage.setItem('authToken', userData.token);
  };

  // Logout function to clear the user state
  const logout = () => {
    setUser(null);
    // Remove authentication token from localStorage or sessionStorage
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
