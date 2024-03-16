import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import UserRegistrationForm from './UserRegistrationForm'; // Adjust import paths
import LoginForm from './LoginForm'; // Adjust import paths
import Dashboard from './DashBoard'; // Adjust import paths
import StockDataViewer from './StockData'; // Adjust import paths
import TradeExecutionForm from './TradeExecutionForm'; // Adjust import paths
import PortfolioManagement from './PortfolioManagement'; // Adjust import paths
import OrderHistory from './OrderHistory'; // Adjust import paths
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
    <div>
      <Routes>
      <Route path="/Navbar" element={<Navbar />} />
        <Route path="/UserRegistrationForm" element={<UserRegistrationForm />} />
        <Route path="/LoginForm" element={<LoginForm setLoggedIn={setLoggedIn} setUser={setUser} />} />
        <Route path="/Dashboard" element={loggedIn ? <Dashboard user={user} /> : null} />
        <Route path="/StockData" element={loggedIn ? <StockDataViewer /> : null} />
        <Route path="/TradeExecutionForm" element={loggedIn ? <TradeExecutionForm /> : null} />
        <Route path="/PortfolioManagement" element={loggedIn ? <PortfolioManagement /> : null} />
        <Route path="/OrderHistory" element={loggedIn ? <OrderHistory /> : null} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
