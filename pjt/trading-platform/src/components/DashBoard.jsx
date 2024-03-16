import React from 'react';
import { Link } from 'react-router-dom';
import UserRegistrationForm from './UserRegistrationForm';
import LoginForm from './LoginForm';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <UserRegistrationForm />
        </div>
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
      <div className="mt-3">
        <p>
          Already have an account? <Link to="/LoginForm">Login here</Link>
        </p>
      </div>
      {/* Other functionalities placeholders */}
      <div className="mt-5">
        <h3>Other Functionalities:</h3>
        <ul>
          <li>View Real-time Stock Data</li>
          <li>Execute Trades</li>
          <li>Manage Portfolios</li>
          <li>Review Order History with P&amp;L Calculations</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
