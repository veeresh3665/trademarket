import React, { useState } from 'react';
import axios from 'axios';

const TradeExecutionForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [tradeType, setTradeType] = useState('buy'); // Default to buy
  const [error, setError] = useState('');

  const handleTrade = async () => {
    try {
      const response = await axios.post('/api/trade', {
        symbol,
        quantity,
        tradeType
      });
      console.log(response.data); // Assuming backend returns trade execution response
      // Reset form fields upon successful trade execution
      setSymbol('');
      setQuantity('');
      setError('');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Trade Execution</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form>
        <div className="form-group">
          <label htmlFor="symbol">Stock Symbol:</label>
          <input
            type="text"
            className="form-control"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tradeType">Trade Type:</label>
          <select
            className="form-control"
            id="tradeType"
            value={tradeType}
            onChange={(e) => setTradeType(e.target.value)}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleTrade}>
          Execute Trade
        </button>
      </form>
    </div>
  );
};

export default TradeExecutionForm;
