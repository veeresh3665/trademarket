import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Trading Platform</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/UserRegistrationForm">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LoginForm">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/DashBoard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/StockData">Stock Data</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TradeExecutionForm">Trade Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PortfolioManagement">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OrderHistory">Order History</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
