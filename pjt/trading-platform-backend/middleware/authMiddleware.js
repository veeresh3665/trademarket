// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    // Check if Authorization header is present
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user; // Attach user object to request object

    // Check if the user is an admin
    if (!user.isAdmin) {
      // If the user is not an admin, call next to proceed to the next middleware
      return next();
    }

    next(); // Call next middleware
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
