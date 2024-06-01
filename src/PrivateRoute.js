import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
