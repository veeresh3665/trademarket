import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioManagement = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [assetSymbol, setAssetSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user's portfolio data upon component mount
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get('/api/portfolio');
        setPortfolio(response.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetchPortfolioData();
  }, []);

  const handleAddAsset = async () => {
    try {
      const response = await axios.post('/api/portfolio/add', {
        symbol: assetSymbol,
        quantity: parseInt(quantity)
      });
      console.log(response.data); // Assuming backend returns portfolio update response
      // Update portfolio state upon successful addition
      setPortfolio(response.data);
      setAssetSymbol('');
      setQuantity('');
      setError('');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleRemoveAsset = async (assetId) => {
    try {
      const response = await axios.delete(`/api/portfolio/remove/${assetId}`);
      console.log(response.data); // Assuming backend returns portfolio update response
      // Update portfolio state upon successful removal
      setPortfolio(response.data);
      setError('');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Portfolio Management</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-6">
          <h3>Add Asset</h3>
          <form>
            <div className="form-group">
              <label htmlFor="assetSymbol">Asset Symbol:</label>
              <input
                type="text"
                className="form-control"
                id="assetSymbol"
                value={assetSymbol}
                onChange={(e) => setAssetSymbol(e.target.value)}
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
            <button type="button" className="btn btn-primary" onClick={handleAddAsset}>
              Add Asset
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Current Portfolio</h3>
          <ul>
            {portfolio.map(asset => (
              <li key={asset.id}>
                Symbol: {asset.symbol}, Quantity: {asset.quantity}{' '}
                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveAsset(asset.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioManagement;
