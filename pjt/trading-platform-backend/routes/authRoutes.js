// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Route for user login
router.post('/login', userController.loginUser);

// Route for user logout (optional)
router.post('/logout', userController.logoutUser);

module.exports = router;
