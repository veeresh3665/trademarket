// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to view user data (protected with admin authentication middleware)
router.get('/users', authMiddleware, adminController.viewUsers);

// Route to manage users (e.g., delete users, update user roles)
router.delete('/users/:userId', authMiddleware, adminController.deleteUser);
router.put('/users/:userId', authMiddleware, adminController.updateUser);
module.exports = router;
