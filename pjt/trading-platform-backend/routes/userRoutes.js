// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
router.post('/register', userController.registerUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route for user logout (optional)
// router.post('/logout', authMiddleware.verifyToken, userController.logoutUser);

module.exports = router;
