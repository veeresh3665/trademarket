// controllers/tradeController.js

const Trade = require('../models/tradeModel');
const { movingAverageCrossoverStrategy } = require('../strategies/tradingStrategy');
const fetchStockData = require('../services/stockDataService');

exports.executeTrades = async (req, res) => {
  try {
    // Fetch historical stock data from database or API
    const stockData = await fetchStockData();

    // Use the strategy to generate trade signals
    const signals = movingAverageCrossoverStrategy(stockData);

    // Execute trades based on the signals
    const { userId } = req;

    // Create an array to store promises of trade save operations
    const tradePromises = signals.map(signal => {
      const { symbol, action, quantity, price } = signal;
      const timestamp = new Date(); // Generate timestamp
      const trade = new Trade({
        userId,
        symbol,
        action,
        quantity,
        price,
        timestamp // Include the timestamp
      });
      // Return the promise of saving the trade
      return trade.save();
    });

    // Wait for all trades to be executed and saved to the database
    await Promise.all(tradePromises);

    // Send response back to client
    res.status(200).json({ message: 'Trades executed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error executing trades' });
  }
};
