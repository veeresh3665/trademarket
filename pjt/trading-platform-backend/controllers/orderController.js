// controllers/orderController.js

const Order = require('../models/orderHistory');
const Trade = require('../models/tradeModel');

exports.getOrderHistory = async (req, res) => {
  try {
    const { userId } = req;
    // Fetch all orders for the user
    const orders = await Order.find({ userId }).populate('tradeId');
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching order history' });
  }
};

exports.calculatePnL = async (req, res) => {
  try {
    const { userId } = req;
    // Fetch all orders for the user
    const orders = await Order.find({ userId }).populate('tradeId');
    // Calculate P&L for each trade
    const pnlDetails = orders.map(order => {
      const trade = order.tradeId;
      const totalCost = order.quantity * order.price;
      const tradeCost = trade.quantity * trade.price;
      const pnl = order.action === 'BUY' ? totalCost - tradeCost : tradeCost - totalCost;
      return { ...order.toObject(), pnl };
    });
    res.status(200).json({ pnlDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error calculating P&L' });
  }
};
