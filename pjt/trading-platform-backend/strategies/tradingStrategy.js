// strategies/tradingStrategy.js

function movingAverageCrossoverStrategy(stockData) {
    const shortTermMA = calculateMovingAverage(stockData, 50); // Calculate 50-day moving average
    const longTermMA = calculateMovingAverage(stockData, 200); // Calculate 200-day moving average
  
    // Check for crossover signals
    const buySignal = shortTermMA > longTermMA; // Buy signal when short-term MA crosses above long-term MA
    const sellSignal = shortTermMA < longTermMA; // Sell signal when short-term MA crosses below long-term MA
  
    return { buySignal, sellSignal };
  }
  
  function calculateMovingAverage(stockData, period) {
    // Implement logic to calculate moving average based on historical stock data
    // Example: Simple Moving Average (SMA)
    const prices = stockData.slice(-period).map(data => data.price); // Get prices for the last 'period' days
    const sum = prices.reduce((total, price) => total + price, 0); // Calculate sum of prices
    return sum / period; // Calculate average
  }
  
  module.exports = { movingAverageCrossoverStrategy };
  