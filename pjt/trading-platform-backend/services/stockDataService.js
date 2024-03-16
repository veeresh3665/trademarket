// services/stockDataService.js

const axios = require('axios');

// Function to fetch stock data from a stock market API
const fetchStockData = async (symbol) => {
  try {
    // Make a GET request to the stock market API to fetch stock data
    const response = await axios.get(`https://api.example.com/stocks/${symbol}`);
    
    // Extract relevant data from the API response
    const stockData = response.data;

    return stockData;
  } catch (error) {
    // Handle errors if the API request fails
    console.error('Error fetching stock data:', error);
    throw new Error('Failed to fetch stock data');
  }
};

module.exports = fetchStockData;
