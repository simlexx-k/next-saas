import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './auth/AuthProvider.jsx';

const Dashboard = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/user', {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
        });
        setUserData(response.data);
        setError(null); // Clear any previous errors if successful
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data. Please try again later.'); // Set error message
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      {error && <p>Error: {error}</p>} {/* Display error message if there is an error */}
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user details here as needed */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
