// routes/tradeRoutes.js

const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to execute trades based on trading strategy
router.post('/execute', authMiddleware, tradeController.executeTrades);

module.exports = router;
