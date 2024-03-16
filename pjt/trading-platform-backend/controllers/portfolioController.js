// controllers/portfolioController.js

const Trade = require('../models/tradeModel');
const User = require('../models/User');

exports.buyStock = async (req, res) => {
  try {
    const { userId } = req;
    const { symbol, quantity, price } = req.body;
    
    // Create a new trade
    const trade = new Trade({
      userId,
      symbol,
      action: 'BUY',
      quantity,
      price
    });
    await trade.save();

    // Update user's portfolio (increase stock quantity)
    await User.findByIdAndUpdate(userId, { $inc: { [`portfolio.${symbol}`]: quantity } });

    res.status(201).json({ message: 'Stock bought successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error buying stock' });
  }
};

exports.sellStock = async (req, res) => {
  try {
    const { userId } = req;
    const { symbol, quantity, price } = req.body;

    // Check if the user has enough stocks to sell
    const user = await User.findById(userId);
    if (!user || user.portfolio[symbol] < quantity) {
      return res.status(400).json({ message: 'Insufficient stocks to sell' });
    }

    // Create a new trade
    const trade = new Trade({
      userId,
      symbol,
      action: 'SELL',
      quantity,
      price
    });
    await trade.save();

    // Update user's portfolio (decrease stock quantity)
    await User.findByIdAndUpdate(userId, { $inc: { [`portfolio.${symbol}`]: -quantity } });

    res.status(201).json({ message: 'Stock sold successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error selling stock' });
  }
};
