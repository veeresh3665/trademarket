// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for order history and P&L calculation
router.get('/history', authMiddleware, orderController.getOrderHistory);
router.get('/pnl', authMiddleware, orderController.calculatePnL);

module.exports = router;
