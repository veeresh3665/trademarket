import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user's order history upon component mount
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetchOrderHistory();
  }, []);

  const calculateProfitLoss = (order) => {
    // Perform profit and loss calculation based on trade type (buy/sell) and prices
    if (order.type === 'buy') {
      // For a buy order, profit/loss is calculated as the difference between sell price and buy price
      return (order.sellPrice - order.buyPrice) * order.quantity;
    } else if (order.type === 'sell') {
      // For a sell order, profit/loss is calculated as the difference between buy price and sell price
      return (order.buyPrice - order.sellPrice) * order.quantity;
    }
  };

  return (
    <div className="container mt-5">
      <h2>Order History</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.symbol}</td>
              <td>{order.type}</td>
              <td>{order.quantity}</td>
              <td>${order.buyPrice.toFixed(2)}</td>
              <td>${order.sellPrice.toFixed(2)}</td>
              <td>${calculateProfitLoss(order).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
