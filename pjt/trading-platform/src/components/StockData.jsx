import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockData = () => {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'LEWPLAIB7I0GIOMK';

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`);
        setStockData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (symbol !== '') {
      fetchStockData();
    }
  }, [symbol]);

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h2>Stock Data</h2>
      <form>
        <div className="form-group">
          <label htmlFor="symbol">Enter Stock Symbol:</label>
          <input
            type="text"
            className="form-control"
            id="symbol"
            value={symbol}
            onChange={handleSymbolChange}
            required
          />
        </div>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
      {stockData && (
        <div>
          <h3>{symbol} Stock Data</h3>
          <ul>
            {Object.entries(stockData['Time Series (5min)']).map(([time, data]) => (
              <li key={time}>
                Time: {time}, Open: {data['1. open']}, High: {data['2. high']}, Low: {data['3. low']}, Close: {data['4. close']}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StockData;
