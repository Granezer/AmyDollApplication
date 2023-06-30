import React from 'react';
import './styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Not Found</h1>
      <p className="not-found__message">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
