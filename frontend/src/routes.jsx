// src/routes.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components
// import Home from './pages/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;