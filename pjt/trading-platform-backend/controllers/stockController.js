// controllers/stockController.js

const axios = require('axios');
const fetchStockData = require('../services/stockDataService');

// Controller function to fetch real-time stock data from the API
exports.getStockData = async (req, res) => {
  try {
    const { symbol } = req.params;

    // Fetch stock data from the service
    const stockData = await fetchStockData(symbol);

    // Send the stock data back to the client
    res.status(200).json(stockData);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ message: 'Failed to fetch stock data' });
  }
};
