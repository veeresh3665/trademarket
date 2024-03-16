// routes/stockRoutes.js

const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to fetch real-time stock data (protected with authentication middleware)
router.get('/:symbol', authMiddleware, stockController.getStockData);

module.exports = router;
